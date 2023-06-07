import { Modal, Tooltip } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/types";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "../list/BoardList.queries";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  const router = useRouter();
  // 모달창
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const handleCancel = () => {
    setIsOpenDeleteModal(false);
  };
  const onClickOpenDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };

  // 삭제하기
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      });
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete} onCancel={handleCancel}>
          <div>게시글을 삭제하시겠습니까?</div>
        </Modal>
      )}
      <div className="w-[1200px] mx-auto bg-white dark:bg-[#101010] rounded-xl md:w-[800px] lg:w-[1024px] m-[100px]">
        <S.CardWrapper>
          <S.Header>
            <S.AvatarWrapper>
              <S.Avatar src="/images/avatar.png" />
              <S.Info>
                <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                <S.CreatedAt>
                  {getDate(props.data?.fetchBoard?.createdAt)}
                </S.CreatedAt>
              </S.Info>
            </S.AvatarWrapper>
            <S.IconWrapper>
              <S.LinkIcon src="/images/board/detail/link.png" />
              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} ${
                  props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                }`}
              >
                <S.LocationIcon src="/images/board/detail/location.png" />
              </Tooltip>
            </S.IconWrapper>
          </S.Header>
          <S.Body>
            <S.Title>{props.data?.fetchBoard?.title}</S.Title>
            <S.ImageWrapper>
              {props.data?.fetchBoard.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <S.Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.ImageWrapper>
            <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
            {props.data?.fetchBoard.youtubeUrl && (
              <S.Youtube
                url={props.data?.fetchBoard.youtubeUrl}
                width="486px"
                height="240px"
              />
            )}
            <S.LikeWrapper>
              <S.IconWrapper>
                <S.LikeIcon onClick={props.onClickLike} />
                <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
              </S.IconWrapper>
              <S.IconWrapper>
                <S.DislikeIcon onClick={props.onClickDislike} />
                <S.DislikeCount>
                  {props.data?.fetchBoard.dislikeCount}
                </S.DislikeCount>
              </S.IconWrapper>
            </S.LikeWrapper>
          </S.Body>
        </S.CardWrapper>
        <S.BottomWrapper>
          <S.Button onClick={props.onClickMoveToBoardList}>목록으로</S.Button>
          <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
          <S.Button onClick={onClickOpenDeleteModal}>삭제하기</S.Button>
        </S.BottomWrapper>
      </div>
    </>
  );
}

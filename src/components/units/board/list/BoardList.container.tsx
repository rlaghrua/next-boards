import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent, useState } from "react";
import { withAuth } from "../../../commons/hocs";
import { accessTokenState } from "../../../../commons/store";
import { Modal } from "antd";
import { useRecoilState } from "recoil";

export default function BoardList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const [accessToken] = useRecoilState(accessTokenState);

  // 모달창
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleCancel = () => {
    setIsOpenModal(false);
  };
  const onClickOpenModal = () => {
    setIsOpenModal(true);
  };

  const onClickMoveToBoardNew = () => {
    if (accessToken) {
      void router.push("/boards/new");
    } else {
      onClickOpenModal();
    }
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (accessToken) {
      void router.push(`/boards/${event.currentTarget.id}`);
    } else {
      onClickOpenModal();
    }
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <>
      {isOpenModal && (
        <Modal
          visible={true}
          onOk={() => {
            router.push("/login");
          }}
          onCancel={handleCancel}
        >
          <div>로그인 후 이용가능합니다!</div>
        </Modal>
      )}

      <BoardListUI
        data={data}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
        count={dataBoardsCount?.fetchBoardsCount}
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
      />
    </>
  );
}

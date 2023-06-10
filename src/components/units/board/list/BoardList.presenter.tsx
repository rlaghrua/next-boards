import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import Paginations01 from "../../../../components/commons/paginations/Paginations01.container";
import { v4 as uuidv4 } from "uuid";
import Searchbars01 from "../../../../components/commons/searchbars/Searchbars01.container";
import * as S from "./BoardList.styles";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <div className="w-[1200px] mx-auto bg-white dark:bg-[#101010] rounded-xl md:w-[800px] lg:w-[1024px]">
      <Searchbars01
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el, index) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((el) => (
                <span
                  className="TextToken"
                  key={uuidv4()}
                  isMatched={props.keyword === el}
                >
                  {el}
                </span>
              ))}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Paginations01 refetch={props.refetch} count={props.count} />
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </div>
  );
}

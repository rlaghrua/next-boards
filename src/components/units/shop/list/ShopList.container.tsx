import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEMS_IBOUGHT } from "./ShopList.queries";
import { MouseEvent, useState } from "react";
import ShopListUI from "./ShopList.presenter";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import * as S from "./ShopList.styles";

export default function ShopList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS_IBOUGHT);

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchBoards: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMoveToShopNew = () => {
    void router.push("/shops/new");
  };

  const onClickMoveToShopDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/shops/${event.currentTarget.id}`);
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <>
      <div style={{ height: "700px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {data?.fetchUseditems.map((el, index) => {
            return (
              <S.Items key={el._id}>
                <a className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
                  <div className="h-72 border-b-2 border-palette-lighter relative">
                    {el.images
                      ?.filter((el: string) => el)
                      .map((el: string) => (
                        <img
                          key={el}
                          src={`https://storage.googleapis.com/${el}`}
                          className="transform duration-500 ease-in-out hover:scale-110"
                        />
                      ))}
                  </div>
                  <div className="h-48 relative">
                    <S.Title id={el._id} onClick={onClickMoveToShopDetail}>
                      {el.name
                        .replaceAll(keyword, `@#$%${keyword}@#$%`)
                        .split("@#$%")
                        .map((el) => (
                          <span key={uuidv4()} isMatched={keyword === el}>
                            {el}
                          </span>
                        ))}
                    </S.Title>
                    <S.Content>{el.contents}</S.Content>
                    <S.Price>{el.price}</S.Price>
                    {el.seller?.picture ? (
                      <img
                        id={el._id}
                        src={`https://storage.googleapis.com/${el.seller?.picture}`}
                      />
                    ) : null}
                  </div>
                </a>
              </S.Items>
            );
          })}
        </InfiniteScroll>
      </div>

      <button>등록하기</button>
    </>
  );
}

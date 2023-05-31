import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export interface IUseditemsProps {
  data?: Pick<IQuery, "fetchUseditems">;
  onClickMoveToShopNew: () => void;
  onClickMoveToShopDetail: (event: MouseEvent<HTMLDivElement>) => void;
  fetchMore: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
}
export interface ITextTokenProps {
  isMatched: boolean;
}

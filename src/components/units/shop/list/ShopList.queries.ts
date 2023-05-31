import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_IBOUGHT = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      name
      price
      contents
      images
      pickedCount
      seller {
        picture
      }
      _id
    }
  }
`;

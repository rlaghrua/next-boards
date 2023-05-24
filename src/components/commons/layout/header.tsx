import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";
import { useRouter } from "next/router";
import { gql, useApolloClient, useMutation, useQuery } from "@apollo/client";
import { IMutation } from "../../../commons/types/generated/types";
import { useRecoilState, useSetRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function Header() {
  const router = useRouter();
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickBoard = () => {
    void router.push("/boards");
  };

  const client = useApolloClient();
  const onClickLogout = async () => {
    client.clearStore();
    setAccessToken("");
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <span className="ml-2 mr-2 text-xl">호겸 게시판</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-400">
              Home
            </Link>
            <Link href="/about" className="mr-5 hover:text-gray-400">
              About
            </Link>
            <span
              onClick={onClickBoard}
              className="mr-5 hover:text-gray-400 cursor-pointer dark:text-slate-600 dark:hover:text-slate-400"
            >
              boards
            </span>
            {data?.fetchUserLoggedIn._id ? null : (
              <Link href="/register" className="mr-5 hover:text-gray-400">
                Signup
              </Link>
            )}
            {data?.fetchUserLoggedIn._id ? null : (
              <Link href="/login" className="mr-5 hover:text-gray-400">
                Login
              </Link>
            )}
            {!data?.fetchUserLoggedIn._id ? null : (
              <Link href="/mypage" className="mr-5 hover:text-gray-400">
                Mypage
              </Link>
            )}
            {!data?.fetchUserLoggedIn._id ? null : (
              <span
                onClick={onClickLogout}
                className="mr-5 hover:text-gray-400 cursor-pointer dark:text-slate-600 dark:hover:text-slate-400"
              >
                Logout
              </span>
            )}
          </nav>
          {/* 다크모드 토글 버튼 작업해야함 */}
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}

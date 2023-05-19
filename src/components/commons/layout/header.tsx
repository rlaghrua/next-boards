import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const onClickBoard = () => {
    void router.push("/boards");
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
            <Link
              href="https://rlaghrua.tistory.com/"
              className="mr-5 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tstory
            </Link>
            <Link
              href="https://open.kakao.com/o/sPVOEjhf"
              className="mr-5 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              kakao
            </Link>
          </nav>
          {/* 다크모드 토글 버튼 작업해야함 */}
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}

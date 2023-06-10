import Link from "next/link";
import * as S from "./main.styles";
import ReactPlayer from "react-player";

export default function MainPage() {
  return (
    <>
      {/* 비디오 배경화면 */}
      {/* <S.mainBanner id="top" data-section="section1">
        <video
          autoPlay
          muted
          loop
          style={{
            minWidth: "100%",
            minHeight: "100vh",
            maxWidth: "100%",
            maxHeight: "100vh",
            objectFit: "cover",
          }}
        >
          <source src="/images/main/course-video.mp4" type="video/mp4" />
        </video>
        <S.videoOverlay>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <S.caption>
                  <S.captionh6>Hokyeom Board</S.captionh6>
                  <S.captionh2>Welcome to Mysite</S.captionh2>
                  <S.captionp>
                    Share your daily life <br />
                    Post on the bulletin board
                  </S.captionp>
                  <S.mainbuttonred>
                    <button className="bg-blue-300 rounded p-[10px] font-bold">
                      <Link href="/boards">Join Us Now!</Link>
                    </button>
                  </S.mainbuttonred>
                </S.caption>
              </div>
            </div>
          </div>
        </S.videoOverlay>
      </S.mainBanner> */}

      <div className="w-full h-screen relative text-white">
        <img
          src="https://images.unsplash.com/photo-1438109491414-7198515b166b?w=1800"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
        />

        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center px-12">
          <div>
            <h1 className="text-3xl md:text-6xl leading-tight mb-16 text-white">
              Share your daily life <br className="hidden md:block" /> <br />
              Post on the bulletin board
            </h1>
            <Link
              href="/boards"
              className="border border-white py-4 px-8 hover:bg-white hover:text-black"
            >
              일상 공유하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

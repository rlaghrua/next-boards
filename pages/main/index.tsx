import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <div className="w-full h-screen relative text-white">
        <img
          src="https://images.unsplash.com/photo-1438109491414-7198515b166b?w=1800"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
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

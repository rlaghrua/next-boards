import Head from "next/head";

import Image from "next/legacy/image";
import profileImage from "../../public/images/profile.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-3 pb-10">
      <Head>
        <title>About</title>
        <meta name="description" content="portfolio by yumin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-16">
        <div className="mt-2 w-2/3 m-auto rounded-full overflow-hidden">
          <Image
            alt="about-me"
            src={profileImage}
            layout="responsive"
            width={500}
            height={500}
            quality={50}
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center sm:items-start py-10 sm:py-4 sm:px-10">
          <div className="text-xl sm:text-3xl mb-6 mt-10">KIM HOKYEOM</div>
        </div>
      </div>
    </div>
  );
};

export default About;

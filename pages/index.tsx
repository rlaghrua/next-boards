import Head from "next/head";
import Layout from "../src/components/commons/layout/layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>게시판</title>
        <meta name="description" content="게시판" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

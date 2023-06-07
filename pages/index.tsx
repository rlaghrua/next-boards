import Head from "next/head";
import Layout from "../src/components/commons/layout/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/main");
  }, []);

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

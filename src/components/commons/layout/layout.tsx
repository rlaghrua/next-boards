import styled from "@emotion/styled";
import Footer from "./footer";
import Header from "./header";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: JSX.Element;
}

const HIDDEN = ["/main"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const Hidden = HIDDEN.includes(router.asPath);

  return (
    <div className="bg-primary select-none font-sans antialiased">
      <>
        {!Hidden && <Header />}
        <section className=" flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          {props.children}
        </section>
        {!Hidden && <Footer />}
      </>
    </div>
  );
}

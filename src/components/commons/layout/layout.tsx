import styled from "@emotion/styled";
import Footer from "./footer";
import Header from "./header";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <div className="bg-primary select-none font-sans antialiased">
      <>
        <Header />
        <section className=" flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          {props.children}
        </section>
        <Footer />
      </>
    </div>
  );
}

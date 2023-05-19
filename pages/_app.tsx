import { ThemeProvider } from "next-themes";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout/layout";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloSetting>
    </RecoilRoot>
  );
}

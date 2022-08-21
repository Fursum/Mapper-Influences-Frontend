import "../styles/globals.scss";
import type { AppProps } from "next/app";
import store from "../redux/store";
import { Provider } from "react-redux";
import Head from "next/head";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="icon" href="/svg/Influences.svg"/>
        <title>Mapper Influences</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}



export default MyApp;

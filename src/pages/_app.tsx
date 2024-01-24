import "@/styles/fonts/fontawesome-free-6.1.2-web/css/all.min.css";
import "@/styles/fonts/poppins/poppins.css";
import "@/styles/css/reset.css";
import "@/styles/css/scroll.css";
import "@/styles/css/loader.css";
import "@/styles/css/styles.css";
import "@/styles/css/responsive.css";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

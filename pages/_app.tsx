import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { Fragment } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { LazyMotion, domAnimation } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <link
          rel="shortcut icon"
          href="/rounded-avatar.png"
          type="image/x-icon"
        />

        <title>{`Baskaran's Portfolio`}</title>

        <meta name="title" content="Baskaran's Portfolio" />
        <meta name="description" content="Baskaran's Portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Baskaran's Portfolio" />
        <meta property="og:description" content="Baskaran's Portfolio" />
        <meta property="og:image" content="/avatar.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Baskaran" />
        <meta property="twitter:description" content="Baskaran's Portfolio" />
        <meta property="twitter:image" content="/avatar.jpg" />
      </Head>
      <LazyMotion features={domAnimation}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </LazyMotion>
    </Fragment>
  );
}

export default MyApp;

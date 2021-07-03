import 'ress';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { css, Global } from '@emotion/react';
import { fontFace } from '../styles/fonts';
import { fontFamilies } from '../styles/fonts';
import React from 'react';
import Head from 'next/head';
import { colors, useCustomVhProperty } from '../styles/utils';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  useCustomVhProperty();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="ja" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#eee" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Wacoal" />
        <title>I am hogehoge years old.</title>
        <meta name="description" content="I am hogehoge years old." />
        <link rel="canonical" href="https://iam-years-old.vercel.app/" />
        <link
          rel="shortcut icon"
          href="/assets/images/meta/favicon.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/images/meta/app-touch-icon.png"
        />
        <meta property="og:site_name" content="I am hogehoge years old." />
        <meta property="og:title" content="I am hogehoge years old." />
        <meta
          property="og:image"
          content="https://iam-years-old.vercel.app/assets/images/meta/ogimg.jpg"
        />
        <meta property="og:description" content="I am hogehoge years old." />
        <meta property="og:url" content="https://iam-years-old.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Wacoal_News" />
        {/* Gtag */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FH2PEQRJ0V"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FH2PEQRJ0V');`,
          }}
        ></script> */}
      </Head>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
};
export default App;

const globalStyle = css`
  ${fontFace};

  html,
  body {
    font-size: 16px;
    color: ${colors.textBlack};
    background: ${colors.backGround};
    text-size-adjust: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Hiragino Sans',
      'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
    ${fontFamilies.a1MinStdBold}
  }

  #__next {
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  svg:not([fill]) {
    fill: currentColor;
  }

  input,
  textarea {
    font: inherit;
    color: inherit;
    border-radius: 0;
    box-shadow: none;
    appearance: none;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    /* outline: 1px solid red; */
  }
`;

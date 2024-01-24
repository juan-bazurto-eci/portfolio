import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const DocumentNext = () => {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

/**
 * Collect styles in SSR
 *
 * @public
 * @param {DocumentContext} ctx - context object from next.js with one addition:
 * renderPage: {Function} - a callback that executes the actual
 * React rendering logic (synchronously).
 * @returns {Promise<DocumentInitialProps>}
 */
DocumentNext.getInitialProps = async (ctx: any) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) =>
          sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};

export default DocumentNext;

import Document, {Html, Head, Main, NextScript} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html lang="de">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/app/favicon.ico" />
          <meta name="theme-color" content="#000000" />
          <link rel="apple-touch-icon" href="/app/icon192.png" />
          <link rel="manifest" href="/app/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

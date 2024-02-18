import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='fr'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        
      </Head>
      <body className="bg-white dark:bg-neutral-900 text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
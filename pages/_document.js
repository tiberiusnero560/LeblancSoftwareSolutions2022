import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id='G-PCEC1Z0BMQ`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PCEC1Z0BMQ', {
              page_path: window.location.pathname,
            });

            document.addEventListener( 'contactform', function( event ) {
            ga( 'send', 'event', 'Contact Form', 'submit' );
        }, false );
          `,
            }}
          />
        </Head>
        <body>
          <Main />                                          
          <NextScript />
        </body>
      </Html>
    )
  }
}
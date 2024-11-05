import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles} {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
                        rel="stylesheet"
                        type="text/css"
                    />

                    <meta property="og:title" content="고려대학교 소프트웨어창업학회 NEXT" />
                    <meta property="og:description" content="고려대학교 소프트웨어창업학회 NEXT" />
                    <meta
                        property="og:image"
                        content="https://next-recruit.s3.ap-northeast-2.amazonaws.com/assets/mail-main.png"
                    />

                    <meta name="Keywords" content="NEXT: 고려대학교 소프트웨어창업학회 NEXT" />
                    <meta name="keywords" content="NEXT: 고려대학교 소프트웨어창업학회 NEXT" />
                    <meta name="Description" content="고려대학교 소프트웨어창업학회 NEXT" />
                    <meta name="description" content="고려대학교 소프트웨어창업학회 NEXT" />
                    <meta name="google-site-verification" content="YdrWjel7OcCUGNmuvaV86uwaB_ZEqJsOqOoV-rKi6vA" />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                    ></link>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

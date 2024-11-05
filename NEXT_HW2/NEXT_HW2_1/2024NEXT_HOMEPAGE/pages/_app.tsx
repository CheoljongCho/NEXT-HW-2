import GlobalStyle from "styles/GlobalStyle";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { useRouter, Router } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import Loading from "components/loading/index";
import * as gtag from "lib/gtag";
import Head from "next/head";
import Header from "components/header";
import Script from "next/script";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// export default function App({ Component, pageProps, session }: AppProps) {
export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      // NProgress.start();
      setLoading(true);
    };
    const end = () => {
      // NProgress.done();
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  // GA 설정 시작
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  // GA 설정 끝
  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <ChakraProvider>
          <GlobalStyle>
            <Head>
              <title>NEXT</title>
            </Head>
            <Header></Header>
            {/* GA 설정 시작 */}
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
              }}
            />
            {/* GA 설정 끝 */}
            {loading ? <Loading /> : <Component {...pageProps} />}
            {/* <Loading /> */}
          </GlobalStyle>
        </ChakraProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}

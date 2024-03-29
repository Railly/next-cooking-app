import AuthLayout from "components/Layouts/AuthLayout";
import BrowseLayout from "components/Layouts/BrowseLayout";
import LandingLayout from "components/Layouts/LandingLayout";
import { listenLatestCookbooks } from "firebase/client";
import useUser from "hooks/useUser";
import { GA_TRACKING_ID, pageview } from "lib/gtag";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AUTH_PAGES, BROWSE_PAGES, LANDING_PAGES, re } from "utils/dictionary";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const user = useUser();
  const [cookbooks, setCookbooks] = useState([]);
  const { pathname } = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
      console.log(GA_TRACKING_ID);
      console.log(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    let unsubscribe;
    if (user) {
      unsubscribe = listenLatestCookbooks(user.uid, setCookbooks);
    }
    return () => unsubscribe && unsubscribe();
  }, [user]);

  return (
    <>
      <Head>
        <title>
          Foody -{" "}
          {LANDING_PAGES[pathname] ||
            AUTH_PAGES[pathname] ||
            BROWSE_PAGES[pathname] ||
            (re.test(pathname) && "Crea")}
        </title>
        <meta
          name="description"
          content="Tu app de recetas digitales favorita"
        />
        <link rel="icon" href="/favicon-foody.ico" />
      </Head>
      {LANDING_PAGES[pathname] && (
        <>
          <LandingLayout />
          <Component {...pageProps} />
        </>
      )}
      {AUTH_PAGES[pathname] && (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      )}
      {re.test(pathname) && (
        <div style={{ display: "grid", gridTemplateColumns: "2fr 25fr 45fr" }}>
          <BrowseLayout />
          <Component user={user} cookbooks={cookbooks} {...pageProps} />
        </div>
      )}
    </>
  );
}

export default MyApp;

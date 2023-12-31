import { useState } from "react";

import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import Head from "next/head";

import SideNavigation from "@/components/navigation/SideNavigation";
import Header from "@/components/navigation/Header";
import Footer from "@/components/footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/css/main.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Kayquit Student Portal</title>
        <link rel="shortcut icon" href="/images/kayquit-logo.png" />
        <meta name="description" content="Paragraph" />
        <meta name="keywords" content="Paragraph" />
        <meta name="author" content="Names" />
        <meta property="og:title" content="Kayquit Elementary School | Student Portal" />
        <meta property="og:url" content="https://myportal-kayquit.vercel.app/" />
        <meta property="og:image" content="Website Image" />
      </Head>
      <NextNProgress
        color="linear-gradient(to right, hsl(224, 100%, 75%), hsl(224, 100%, 60%))"
        options={{ showSpinner: false }}
      />
      <Header showNavigation={showNavigation} setShowNavigation={setShowNavigation} />
      <main>
        <SideNavigation showNavigation={showNavigation} setShowNavigation={setShowNavigation} />
        <section className="content px-3">
          <Component {...pageProps} />
          <Footer />
        </section>
      </main>
    </SessionProvider>
  );
}
import { NextPage } from "next";
import type { AppProps } from "next/app";

import Seo from "@/components/Seo";

import "../styles/globals.scss";
import "../components/Drawer/Drawer.scss";

import localFont from "next/font/local";

type AppPropsWithLayout = AppProps & {
  Component: NextPage;
};

const sf = localFont({
  src: [
    {
      path: "../public/fonts/sfprodisplaybold-webfont.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/sfprodisplaymedium-webfont.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/sfprodisplayregular-webfont.woff2",
      weight: "300",
    },
  ],
  variable: "--sf-font",
});

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <>
      <Seo
        headTitle="Afolabi Moyin"
        description="Experienced Software Software Engineer with over 3 years of expertise in HTML, CSS, TypeScript, JavaScript and React."
        title="Frontend Engineer"
        type="website"
        url="https://moyin.netlify.app/"
        image="/images/preview.png"
      />
      <div className={`${sf.className} bg-[#00003f]`}>
        {<Component {...pageProps} />}
      </div>
    </>
  );
};

export default App;

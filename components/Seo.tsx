import React from "react";
import Head from "next/head";

interface SeoProps {
  headTitle: string;
  title: string;
  url: string;
  type: string;
  image: string;
  description: string;
}

const Seo = ({ headTitle, title, url, type, image, description }: SeoProps) => {
  return (
    <Head>
      <title>{headTitle}</title>
      <meta name="description" content={description} />
      {/* open graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@soft_moyin" />
    </Head>
  );
};

export default Seo;

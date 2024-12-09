import React from "react";
import { Helmet } from "react-helmet";
import pageImage from "./src/assets/blog.png";
function Page() {
  const pageTitle = "✍️ Your ❤️ Out - A Blogging Platform for Writers";
  const pageDescription =
    "WriteYour❤️Out is your go-to platform for creating, editing, and managing blog posts. View posts from others, share your own, and connect with a community of writers.";
  const pageUrl = "https://writeyourheartout.vercel.app/";

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>
      <h1>{pageTitle}</h1>
      <p>
        {pageDescription}
        <br />
        Start exploring posts or unleash your creativity by sharing your stories
        with the world!
      </p>
    </div>
  );
}

export default Page;

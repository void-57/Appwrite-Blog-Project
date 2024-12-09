import React from "react";
import { Helmet } from "react-helmet";
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
        <meta property="og:image" content="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/724163_416084.png" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/724163_416084.png" />
      </Helmet>
    </div>
  );
}

export default Page;

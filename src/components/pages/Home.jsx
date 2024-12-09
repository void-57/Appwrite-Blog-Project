import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, PostCard } from "..";
import service from "../../appwrite/configuration";
import { Helmet } from "react-helmet";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authStatus) {
      service.getAllPosts().then((posts) => {
        if (posts) setPosts(posts.documents);
      });
    }
  }, [authStatus]);

  const pageTitle = "✍️ Your ❤️ Out - A Blogging Platform for Writers";
  const pageDescription =
    "WriteYour❤️Out is your go-to platform for creating, editing, and managing blog posts. View posts from others, share your own, and connect with a community of writers.";
  const pageUrl = "https://writeyourheartout.vercel.app/";
  const pageImage =
    "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/724163_416084.png";

  
  if (!authStatus) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:to-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:to-gray-500">
                No posts available
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <>
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

    <div className="py-8 w-full">
    
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div
              className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              key={post.$id}
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
    </>
  );
}

export default Home;

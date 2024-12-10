import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, PostCard } from "..";
import service from "../../appwrite/configuration";
import { useMediaQuery } from 'react-responsive';

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    if (authStatus) {
      service.getAllPosts().then((posts) => {
        if (posts) setPosts(posts.documents);
      });
    }
  }, [authStatus]);

  if (!authStatus) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full mb-28">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome</h1>
              <p className="text-lg text-gray-600  mt-8 mb-8">
                ✍️ Your ❤️ Out is your go-to platform for creating, editing, and managing blog posts. View posts from others, share your own, and connect with a community of writers.
              </p>
              { (
                <div className="mt-2 flex justify-center space-x-4">
                  <Link to="/login">
                    <button className="w-32 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="w-32 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-700 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                      Signup
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8 mt-4">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-full md:w-1/2 lg:w-1/3">
              <PostCard
                $id={post.$id}
                title={post.title}
                featuredImage={post.featuredImage}
                authorName={post.authorName}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
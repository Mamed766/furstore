import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const News = () => {
  const newsPosts = [
    {
      id: 1,
      date: "OCT 22, 2023",
      title: "PELLENSGUE NUNC CONDENTUM",
      description:
        "Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember. Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor...",
      image:
        "https://vinova-furstore.myshopify.com/cdn/shop/articles/blog-10_580x.jpg?v=1695010636",
    },
    {
      id: 2,
      date: "OCT 22, 2023",
      title: "ALIQUM VITAE MAXIMUS JUSTO",
      description:
        "Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember. Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor...",
      image:
        "https://vinova-furstore.myshopify.com/cdn/shop/articles/blog-9_580x.jpg?v=1695010612",
    },
    {
      id: 3,
      date: "SEP 18, 2023",
      title: "NULLAM CONSECTETUR LACUS NEC",
      description:
        "Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember. Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor...",
      image:
        "https://vinova-furstore.myshopify.com/cdn/shop/articles/blog-12_580x.jpg?v=1695010714",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsPosts.map((post) => (
          <div key={post.id} className="bg-white overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="pt-5">
              <p className="text-gray-500 text-sm">{post.date}</p>
              <h3 className="text-lg font-semibold my-2">{post.title}</h3>
              <p className="text-gray-600 text-[13px] mb-4">
                {post.description}
              </p>
              <Link className="text-black  flex items-center">
                Read more{" "}
                <span className="ml-2">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

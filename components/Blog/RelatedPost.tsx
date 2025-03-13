import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface RelatedPostItem {
  title: string;
  mainImage: string;
  link: string;
}

export interface RelatedPostProps {
  posts: RelatedPostItem[];
}

const RelatedPost = ({ posts }: RelatedPostProps) => {
  return (
    <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        Related Posts
      </h4>

      <div>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={index}
            >
              <div className="max-w-45 relative h-18 w-45">
                {post.mainImage ? (
                  <Image fill src={post.mainImage} alt={post.title} />
                ) : (
                  "No image"
                )}
              </div>
              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link href={post.link}>
                  {post.title.length > 40
                    ? post.title.slice(0, 40) + "..."
                    : post.title}
                </Link>
              </h5>
            </div>
          ))
        ) : (
          <p>No related posts available.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedPost;

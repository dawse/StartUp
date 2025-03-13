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
    <div className="rounded-md border border-stroke bg-white p-6 shadow-sm dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">
      Découvrez aussi nos autres services
      </h4>

      <div>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              className="mb-4 flex items-center gap-3 border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700"
              key={index}
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-md border border-gray-300 dark:border-gray-700">
                {post.mainImage ? (
                  <Image
                    fill
                    className="object-cover"
                    src={post.mainImage}
                    alt={post.title}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-500">
                    No image
                  </div>
                )}
              </div>
              <h5 className="text-sm font-medium text-black dark:text-white">
                <Link
                  href={post.link}
                  className="hover:underline dark:hover:text-primary"
                >
                  {post.title.length > 40
                    ? post.title.slice(0, 40) + "..."
                    : post.title}
                </Link>
              </h5>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            No related posts available.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedPost;

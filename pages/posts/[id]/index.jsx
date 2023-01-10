import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useStore } from "../../../context";
import Date from "../../../lib/date";

const Post = () => {
  const [posts] = useStore();
  const router = useRouter();
  const { id } = router.query;

  const post = posts?.posts?.find((posts) => posts?.id === Number(id));

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <div className="container mx-auto rounded overflow-hidden shadow-lg">
        <div className="flex items-center mt-2">
          <div
            onClick={() => router.back()}
            className="flex items-center cursor-pointer text-gray-700 px-2 py-1 space-x-0.5 hover:bg-gray-200 transition duration-100"
            title="Back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-bold">Back</span>
          </div>
        </div>
        <div className="px-6 py-4">
          <h1 href={`/posts/${post?.id}`} className="font-bold text-2xl mb-2">
            {post?.title}
          </h1>
          <Date dateString={post?.createdAt} />
          <div
            className="text-gray-700 text-base"
            dangerouslySetInnerHTML={{ __html: post?.body }}
          ></div>
        </div>
        <div className="px-2 pt-4 pb-2">
          {post?.tags?.map((tag) => (
            <span
              key={tag?.id}
              className="inline-block mx-auto bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2"
            >
              #{tag?.text}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;

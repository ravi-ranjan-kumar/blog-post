import React, { useState } from "react";
import CreatePostTags from "../../components/CreatePostTags";
import { useStore } from "../../context";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(
  () => import("../../components/RichTextEditor"),
  { ssr: false }
);

const AddPostForm = () => {
  const [post, setPost] = useState({
    id: new Date().getUTCMilliseconds(),
    title: "",
    body: "",
    tags: [],
    userId: 5,
  });
  
  const router = useRouter();

  const [, dispatch] = useStore();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_POSTS",
      post,
    });
  }

  return (
    <section className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex-1 px-2">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => router.back()}
                className="flex items-center cursor-pointer text-gray-700 px-2 py-1 space-x-0.5 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
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
              </button>
              <div className="flex items-center">
                <span className="bg-gray-300 h-6 w-[.5px] mx-3" />
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => router.back()}
                    className="flex items-center cursor-pointer text-gray-700 px-2 py-1 space-x-0.5 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                    title="Back"
                  >
                    <span className="text-sm font-bold">Publish</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <label htmlFor="title" className="block font-semibold text-xl mt-6">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="border w-full py-1 px-2 focus:outline-none rounded"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <label htmlFor="body" className="block font-semibold text-xl mt-6">
          Body
        </label>
        <RichTextEditor value={post?.body} setPost={setPost} post={post} />
        <label htmlFor="title" className="block font-semibold text-xl mt-6">
          Tags
        </label>
        <CreatePostTags post={post} setPost={setPost} />
      </form>
    </section>
  );
};

export default AddPostForm;

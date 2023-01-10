import Link from "next/link";
import React from "react";
import Date from "../lib/date";
import Social from "./Social";
import ToolTip from "./ToolTip";

const PostCard = ({ post, isEditable }) => {
  return (
    <>
      <div className="relative max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="data:image/jpeg;base64,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"
          alt="Sunset in the mountains"
        />
        <Social />
        {isEditable ? (
          <Link
            href={`/posts/${post?.id}/edit`}
            className="absolute top-0 ml-2 mt-1"
          >
            <ToolTip tooltip={"Edit"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 shadow-lg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </ToolTip>
          </Link>
        ) : null}
        <div className="px-3 py-2">
          <Link
            href={`/posts/${post?.id}`}
            className="font-bold text-xl mb-2 line-clamp-2 hover:underline transition-all"
          >
            {post?.title}
          </Link>
          <Date dateString={post?.createdAt} />
          <div
            className="text-gray-700 text-base line-clamp-2"
            dangerouslySetInnerHTML={{ __html: post?.body }}
          ></div>
        </div>
        <div className="px-2 pt-4 pb-2 line-clamp-2">
          {post?.tags?.map((tag, index) => (
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

export default PostCard;

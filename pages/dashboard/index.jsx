import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PostCard from "../../components/PostCard";
import { useStore } from "../../context";

const Dashboard = () => {
  const router = useRouter();
  const [posts] = useStore();
  return (
    <>
      <div className="relative w-full min-h-screen bg-white rounded-lg flex ">
        <div className="sticky top-0 w-64 h-screen px-4">
          <div className="h-16 flex items-center">
            <Link
              href="/posts/add"
              className="w-48 mx-auto bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span>Add Post</span>
            </Link>
          </div>
          <div className="px-2 pt-4 pb-8 border-r border-gray-300">
            <div>
              <Image
                src="data:image/png;base64,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"
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-full"
              />
              <p className="text-center mb-4">@username</p>
            </div>
            {/* <ul className="space-y-2">
              <li>
                <a className="bg-gray-500 bg-opacity-30 text-blue-600 flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    <span>Dashboard</span>
                  </span>
                  <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                    3
                  </span>
                </a>
              </li>
              <li>
                <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <span>Starred</span>
                </a>
              </li>
              <li>
                <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center justify-between text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>Drafts </span>
                  </span>
                  <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                    1
                  </span>
                </a>
              </li>
              <li>
                <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span>Setting</span>
                </a>
              </li>
              <li>
                <a className="hover:bg-gray-500 border-t hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                  <span>Log out</span>
                </a>
              </li>
            </ul> */}
          </div>
        </div>
        <div className="flex-1 px-2">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center">
              <div
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
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
            {posts?.posts?.map((post) => (
              <PostCard post={post} key={post?.id} isEditable={true} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

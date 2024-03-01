import {
  FaComment,
  FaDownload,
  FaHeart,
  FaRetweet,
  FaUpload,
} from "react-icons/fa";
import { Markup } from "react-render-markup";
import { Hash } from "./Hash";

type TweetProps = {
  name: string;
  date: string;
  username: string;
  tweet: string;
  image?: string;
};

export const Tweet = ({ name, username, date, tweet, image }: TweetProps) => {
  const replace = {
    hash: Hash,
  };
  return (
    <>
      <div className="flex flex-shrink-0 p-4 pb-0">
        <a href="#" className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 font-medium text-white">
                {name}

                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  {username}. {date}
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="pl-16">
        <p className="text-base width-auto font-medium text-white flex-shrink">
          <Markup markup={tweet} replace={replace} />
        </p>
        {image && (
          <div className="md:flex-shrink pr-6 pt-3">
            <img
              className="rounded-lg w-full h-64"
              src={image}
              alt="Woman paying for a purchase"
            />
          </div>
        )}
        <div className="flex">
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-1 text-center">
                <a
                  href="#"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <FaComment className="text-white" />
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="#"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <FaRetweet className="text-white" />
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="#"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <FaHeart className="text-white" />
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="#"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <FaUpload className="text-white" />
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="#"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <FaDownload className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-600" />
    </>
  );
};

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaComment,
  FaDownload,
  FaHeart,
  FaRetweet,
  FaUpload,
} from "react-icons/fa";
import { Markup } from "react-render-markup";
import { useLike } from "../hooks/useLike";
import { Hash } from "./Hash";
import { Tag } from "./Tag";

export type TweetProps = {
  id?: string;
  name?: string;
  date?: string;
  username?: string;
  tweet?: string;
  image?: string;
  profileImg?: string;
};

export const Tweet = ({
  id,
  name,
  username,
  date,
  tweet,
  image,
  profileImg,
}: TweetProps) => {
  const navigate = useNavigate();
  const { isLiked, like, unlike } = useLike(id);
  const likeToggle = useCallback(() => {
    if (isLiked) unlike();
    else like();
  }, [isLiked]);
  const replace = {
    hash: Hash,
    tag: Tag,
  };
  return (
    <>
      <div className="flex flex-shrink-0 p-4 pb-0">
        <a href="#" className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div onClick={() => navigate(`/profile/${username}`)}>
              <img
                className="inline-block h-10 w-10 rounded-full"
                src={profileImg}
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 font-medium text-white">
                {name}{" "}
                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @{username}. {date}
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="pl-16">
        <p className="text-base width-auto font-medium text-white flex-shrink">
          <Markup
            markup={
              tweet ||
              `Day 07 of the challenge
          <hash>#100DaysOfCode</hash> I was wondering
          what I can do with <hash>#tailwindcss</hash>
          , so just started building Twitter UI using Tailwind and so far it
          looks so promising. I will post my code after completion.
          <hash> #WomenWhoCode #CodeNewbie</hash>`
            }
            replace={replace}
          />
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
              <div className="flex-1 text-center py-2 m-2">
                <span
                  className={`w-8 mt-1 group flex items-center text-gray-500
                px-2 py-2 text-base leading-6 font-medium rounded-full
                hover:bg-blue-800 hover:text-blue-300 cursor-pointer ${
                  isLiked ? "bg-blue-800 text-red-600" : ""
                }`}
                >
                  <FaHeart
                    className={isLiked ? `text-red-600` : `text-white`}
                    onClick={likeToggle}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-600" />
    </>
  );
};

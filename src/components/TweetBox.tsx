import { useCallback, useState } from "react";
import { FaSmile } from "react-icons/fa";
import sanitizeHtml from "sanitize-html";
import { useTweet } from "../hooks/useTweet";
import { useUserContext } from "../contexts/UserContext";

export const TweetBox = () => {
  const user = useUserContext();
  const { create } = useTweet();
  const [tweet, setTweet] = useState("");
  const createTweet = useCallback(() => {
    let formattedTweet = tweet.replace(
      /([\#]+[A-Za-z0-9-_]+)/g,
      "<hash>$1</hash>"
    );
    formattedTweet = formattedTweet.replace(
      /([@]+[A-Za-z0-9-_]+)/g,
      "<tag>$1</tag>"
    );
    create({ tweet: formattedTweet });
    setTweet("");
  }, [create, tweet]);
  return (
    <>
      <div className="flex">
        <div className="flex-1 m-2">
          <h2 className="px-4 py-2 text-xl font-semibold text-white">Home</h2>
        </div>
        <div className="flex-1 px-4 py-2 m-2">
          <a
            href=""
            className=" text-2xl font-medium rounded-full text-white hover:bg-blue-800 hover:text-blue-300 float-right"
          ></a>
        </div>
      </div>

      <hr className="border-gray-600" />
      <div className="flex">
        <div className="m-2 w-10 py-1">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src={user.profileImg}
            alt=""
          />
        </div>
        <div className="flex-1 px-2 pt-2 mt-2">
          <textarea
            className=" bg-transparent text-white font-medium text-lg w-full"
            rows={2}
            cols={50}
            value={tweet}
            onChange={(val) => setTweet(sanitizeHtml(val.currentTarget.value))}
            placeholder="What's happening?"
          ></textarea>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <button
            className="bg-blue-400 mt-5 hover:bg-blue-600 text-white
          font-bold py-2 px-8 rounded-full mr-8 float-right"
            onClick={createTweet}
          >
            Tweet
          </button>
        </div>
      </div>
      <hr className="border-blue-800 border-4 mt-5" />
    </>
  );
};

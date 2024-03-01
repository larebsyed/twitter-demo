import { FaCalendar, FaLink } from "react-icons/fa";
import { Markup } from "react-render-markup";
import { Hash } from "./Hash";
import { Tag } from "./Tag";

type UserCardProps = {
  username: string;
  banner: string;
  name: string;
  profileImg: string;
  description: string;
  url: string;
  urlTitle: string;
  follower: number;
  following: number;
  joined: string;
};

export const UserCard = ({
  name,
  username,
  profileImg,
  banner,
  description,
  url,
  urlTitle,
  follower,
  following,
  joined,
}: UserCardProps) => {
  const replace = {
    hash: Hash,
    tag: Tag,
  };
  return (
    <>
      <div>
        <div
          className="w-full bg-cover bg-no-repeat bg-center h-[200px]"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <img className="opacity-0 w-full h-full" src={banner} alt="" />
        </div>
        <div className="p-4">
          <div className="relative flex w-full">
            <div className="flex flex-1">
              <div className="mt-[-6rem]">
                <div className="md rounded-full relative avatar h-[9rem] w-[9rem]">
                  <img
                    className="md rounded-full relative border-4
                          border-gray-900 h-[9rem] w-[9rem]"
                    src={profileImg}
                    alt=""
                  />
                  <div className="absolute"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-1 justify-center w-full mt-3 ml-3">
            <div>
              <h2 className="text-xl leading-6 font-bold text-white">{name}</h2>
              <p className="text-sm leading-5 font-medium text-gray-400">
                @{username}
              </p>
            </div>

            <div className="mt-3">
              <p className="text-white leading-tight mb-2">
                <Markup markup={description} replace={replace} />
              </p>
              <div className="text-gray-600 flex">
                <span className="flex mr-2">
                  <FaLink className="text-white" />
                  <a
                    href={url}
                    target="#"
                    className="leading-5 ml-1 text-blue-400"
                  >
                    {urlTitle}
                  </a>
                </span>
                <span className="flex mr-2">
                  <FaCalendar className="text-white" />
                  <span className="leading-5 ml-1 text-white">
                    Joined {joined}
                  </span>
                </span>
              </div>
            </div>
            <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
              <div className="text-center pr-3">
                <span className="font-bold text-white">{following}</span>
                <span className="text-gray-400"> Following</span>
              </div>
              <div className="text-center px-3">
                <span className="font-bold text-white">{follower}</span>
                <span className="text-gray-400"> Followers</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-800" />
      </div>
    </>
  );
};

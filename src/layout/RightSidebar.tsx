import { Link } from "react-router-dom";
export const RightSidebar = () => {
  return (
    <div className="w-2/5 h-12">
      <div className="max-w-sm rounded-lg bg-blue-800 overflow-hidden shadow-lg m-4 mr-20">
        <div className="flex">
          <div className="flex-1 m-2">
            <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
              Trends
            </h2>
          </div>
        </div>

        <hr className="border-gray-600" />
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
              1 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-white">#ChatGPT</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
              5,466 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href=""
              className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>
        <hr className="border-gray-600" />

        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
              2 . Technology . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-white">#Blockchain</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
              8,464 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href=""
              className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>
        <hr className="border-gray-600" />

        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
              3 . Economy . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-white">#Bitcoin</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
              5,586 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href=""
              className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>
        <hr className="border-gray-600" />

        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
              4 . Sports . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-white">#beckham</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
              9,416 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href=""
              className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>
        <hr className="border-gray-600" />

        <div className="flex">
          <div className="flex-1 p-4">
            <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">
              Show more
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-sm rounded-lg bg-blue-800 overflow-hidden shadow-lg m-4 mr-20">
        <div className="flex">
          <div className="flex-1 m-2">
            <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
              Who to follow
            </h2>
          </div>
        </div>

        <hr className="border-gray-600" />

        <div className="flex flex-shrink-0">
          <div className="flex-1 ">
            <div className="flex items-center w-48">
              <div>
                <img
                  className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div className="ml-3 mt-3">
                <p className="text-base leading-6 font-medium text-white">
                  LabXChange
                </p>
                <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @labXchange
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <Link to={`/profile/labxchange`} className=" float-right">
              <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                Profile
              </button>
            </Link>
          </div>
        </div>
        <hr className="border-gray-600" />

        <div className="flex flex-shrink-0">
          <div className="flex-1 ">
            <div className="flex items-center w-48">
              <div>
                <img
                  className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                  src="https://media.licdn.com/dms/image/C4E03AQHDT22T4Kh8qg/profile-displayphoto-shrink_200_200/0/1614101915275?e=2147483647&v=beta&t=nGuT5sT7MwZ5GDrPM1xjPItS_AkYj4GOmMM1gnr4f6s"
                  alt=""
                />
              </div>
              <div className="ml-3 mt-3">
                <p className="text-base leading-6 font-medium text-white">
                  Lareb Syed
                </p>
                <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @syntist
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <Link to="profile/syntist" className=" float-right">
              <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                Profile
              </button>
            </Link>
          </div>
        </div>

        <hr className="border-gray-600" />
      </div>

      <div className="flow-root m-6 inline">
        <div className="flex-1">
          <a href="#">
            <p className="text-sm leading-6 font-medium text-gray-500">
              MIT License Demo
            </p>
          </a>
        </div>
        <div className="flex-2">
          <p className="text-sm leading-6 font-medium text-gray-600">
            {" "}
            © 2023 Twitter, Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

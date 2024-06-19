const Shimmer = ({ classes }) => {
  return (
    <>
      <div
        role="status"
        className="w-60 border border-gray-200 rounded-2xl shadow animate-pulse dark:border-gray-700"
      >
        <div className="flex items-center justify-center mb-4 w-60 h-36 bg-gray-300 rounded-t-2xl dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          ></svg>
        </div>

        <div className="flex mt-1 px-2 flex-col">
          <div>
            <div className="flex flex-col mb-3">
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mb-2"></div>
            </div>
          </div>
          <div className="flex gap-4 mt-3">
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
          </div>
          <div className="flex justify-between my-4 items-center">
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
            <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-24 mb-2"></div>
          </div>
          <div className="flex justify-center">
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-36"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default Shimmer;

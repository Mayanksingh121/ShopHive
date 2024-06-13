
const Statistics = ({ stats }) => {
  return (
    <div className="flex border-2 border-gray-200 p-1 md:p-2 items-center">
      <div>
        <i className={`${stats.iconClass} text-3xl md:text-4xl text-red-500 `}></i>
      </div>
      <div className="flex flex-col mx-3 md:mx-5">
        <h3 className="text-gray-400 font-semibold">{stats.dataDetail}</h3>
        <p className="font-semibold text-lg md:text-xl">{stats.data}</p>
      </div>
    </div>
  );
};

export default Statistics;

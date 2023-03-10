export const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(20)
        .fill("")
        .map((e, index) => {
          return (
            <div key={index}>
              <div className="p-2 m-2 w-72 h-40 rounded-lg bg-slate-300 shadow-lg"></div>
              <div className="grid grid-flow-col">
                <div className="col-span-1 w-10 h-10 bg-slate-300 mb-1 rounded-full shadow-lg mr-1"></div>
                <div className="col-span-11">
                  <div className="w-[245px] h-5 bg-slate-300 mb-2 rounded-md shadow-lg"></div>
                  <div className="w-48 h-5 bg-slate-300 rounded-md shadow-lg"></div>
                </div>
              </div>

              {/* <div className="h-3 bg-slate-600"></div> */}
            </div>
          );
        })}
    </div>
  );
};

import React, { useEffect, useState } from "react";

const Debounce = () => {
  const [userInput, setUserInput] = useState("");
  // const [getApi, setGetApi] = useState(null);

  const [filterData, setFilterData] = useState(null);
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await data.json();
    console.log(json);
    setAllData(json);
    setFilterData(json);
  };

  const filterInputData = () => {
    console.log(allData);
    return allData.filter((item) => item.title.toLowerCase().includes(userInput.toLowerCase()));
  };

  if (!filterData) return null;

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let data = filterInputData();
          setFilterData(data);
        }}
      >
        Click Me
      </button>
      {filterData.map((item) =>
        (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <h3>{item.body}</h3>
          </div>
        )
      )}
    </div>
  );
};

export default Debounce;

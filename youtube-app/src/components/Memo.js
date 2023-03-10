import React, { useMemo, useState } from "react";
import { findPrime } from "../constants/constants";

const Memo = () => {
  const [text, setText] = useState(0);

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 border border-black " + (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div className="m-10 p-2 bg-green-200" onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle</div>
      <input
        className="border border-black w-72 px-2"
        type="number"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div>Prime: {prime}</div>
    </div>
  );
};

export default Memo;

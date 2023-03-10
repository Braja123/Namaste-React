import React from "react";
import Button from "./Button";

const lists = [
  "All",
  "Music",
  "Cricket",
  "Dance",
  "News",
  "Cooking",
  "Painting",
  "Soccer",
  "Valentines",
];

// Need to build scrollable
const ButtonList = () => {
  return (
    <>
      {lists.map((list, index) => (
        <Button key={index} name={list} />
      ))}
      {/* <Button name="All" />
      <Button name="Music" />
      <Button name="Cricket" />
      <Button name="Dance" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Painting" />
      <Button name="Soccer" />
      <Button name="Valentines" /> */}
    </>
  );
};

export default ButtonList;

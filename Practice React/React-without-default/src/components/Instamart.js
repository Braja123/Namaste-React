import React, { useState } from "react";

let styleComp = {
  border: "1px solid black",
  margin: "10px",
};

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div style={styleComp}>
      <h3>{title}</h3>
      {isVisible ? (
        <>
        <button onClick={() => setIsVisible(false)}>Hide</button>
        <p>{description}</p>
        </>
      ) : (
        <button onClick={() => setIsVisible("team")}>Show</button>
      )}

    </div>
  );
};

const Instamart = () => {
  const [isVisible, setIsVisible] = useState("team");

  // const getData = (bool) => {
  //   setIsVisible(bool);
  // }

  return (
    <div>
      <h1>Instamart</h1>
      <Section
        isVisible={isVisible === "about"}
        setIsVisible={() => setIsVisible("about")}
        title={"About Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      />
      <Section
        isVisible={isVisible === "team"}
        setIsVisible={() => setIsVisible("team")}
        title={"Team Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      />
      {/* <Section
        isVisible={isVisible === "career"}
        setIsVisible={() => setIsVisible("about")}
        title={"Career"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      /> */}
    </div>
  );
};

export default Instamart;

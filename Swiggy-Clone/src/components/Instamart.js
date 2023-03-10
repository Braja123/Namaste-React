import React, { useContext, useState } from "react";
import UserContext from "../util/UserContext";

const Section = ({ title, description, isVisible, setIsVisible }) => {

  return (
    <div className="border border-black p-2 m-2">
      <h3>{title}</h3>
      {isVisible ? <button onClick={() => setIsVisible(false)}>Hide</button> : <button onClick={() => setIsVisible(true)}>Show</button>}
      {/* {<button>Show</button>} */}
      
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const { user } = useContext(UserContext);

  const [visibleSection, setVisibleSection] = useState("team");

  const getData = (bool) => {
    setVisibleSection(bool)
  }

  return (
    <>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart {user.name} - {user.email}</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={getData}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"
        }
        isVisible={visibleSection === "team"}
        setIsVisible={getData}
      />
    </>
  );
};

export default Instamart;

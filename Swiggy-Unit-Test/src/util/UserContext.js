import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy name",
    email: "dummy@gmail.com"
}});

// Easy To get the context name in the React Dev Tools if we have more "Context".
UserContext.displayName = "SanuContext";

export default UserContext;
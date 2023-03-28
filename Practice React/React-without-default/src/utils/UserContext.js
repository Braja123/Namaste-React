// import { createContext } from "react";

import { createContext } from "react";

const UserContext = createContext(
  {
    user: {
      name: "Sanu Das",
      email: "gopal@gmail.com",
    },
  }
);

UserContext.displayName = "Sanu";

export default UserContext;

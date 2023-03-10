import { useContext } from "react";
import UserContext from "../util/UserContext";

const Footer = () => {
  const {user} = useContext(UserContext);
  return <>
  <h4>Footer</h4>
  <h3>{user.name}</h3>
  </>;
};

export default Footer;
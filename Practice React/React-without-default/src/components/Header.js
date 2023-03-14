import { Link } from "react-router-dom";

export const Title = () => (
  <img
    src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
    alt="food-villa"
    style={{ width: "100px", height: "100px" }}
  />
);

const HeaderComponent = () => {
  return (
    <>
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default HeaderComponent;

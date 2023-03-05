import { Link } from "react-router-dom";
import "./topbar.css"
function TopBar()
{
    const user = false;
  return (
    <div className="top">
      <div className="topleft">
        <i className="topicon fab fa-facebook-square"></i>
        <i className="topicon fab fa-instagram-square"></i>
        <i className="topicon fab fa-pinterest-square"></i>
        <i className="topicon fab fa-twitter-square"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="toplistitem">About</li>
          <li className="toplistitem">Contact</li>
          <li className="toplistitem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          {user && <li className="toplistitem">Logout</li>}
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <Link className="link" to="/setting">
            <img
              className="topimg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="toplist">
            <li className="toplistitem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="toplistitem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="topsearchicon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
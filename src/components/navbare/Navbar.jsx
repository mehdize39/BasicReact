import { Link, Links } from "react-router-dom";
import styled from "./navbar.module.css";
function Navbar(props) {
  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <div className={styled.header}>
          <h3>{props.title} </h3>
          <ul>
            <li>
              <Link to="/">لیست مقالات</Link>
            </li>
            <li>مقاله جدید</li>
            <li>
              <Link to="/about">درباره ما</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

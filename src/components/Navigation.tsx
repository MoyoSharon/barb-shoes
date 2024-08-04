import styles from "./Navigation.module.css";
import { TiThMenu } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

function Navigation() {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <nav className={`${styles.nav} d-flex p-3`}>
          <div className="dropdown">
            <button
              className={`${styles.dropdown} dropdown-toggle`}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <TiThMenu className={`${styles.icon}`} />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div className={`${styles.name}`}>Barb shoe stores</div>
          <div className={`${styles.iconGroup} d-flex flex-row`}>
            <a href="#" className={`${styles.icon}`}>
              {" "}
              <FaShoppingCart />
            </a>
            <FaRegUserCircle className={`${styles.icon}`} />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;

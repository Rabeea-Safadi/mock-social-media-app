import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NavBar({ links }) {
  const [current, setCurrent] = useState("Home");
  const navigate = useNavigate();

  return (
    <>
      <div className={styles["list-container"]}>
        {links.map((link) => (
          <a
            key={link.title + " goes to " + link.to}
            href={link.to}
            className={styles.link}
            id={current === link.title ? styles["current-active"] : ""}
            onClick={(e) => {
              e.preventDefault();
              navigate(link.to);
              setCurrent(link.title);
            }}
          >
            {link.title}
          </a>
        ))}
      </div>
      <hr />
    </>
  );
}

import styles from "./LoadingWindow.module.css";

export default function LoadingWindow() {
  return (
    <div className={styles["loading-container"]}>
      <img
        src={require("../../images/react-logo.png")}
        width="50"
        height="50"
        alt="logo"
      />
      <hr />
      <h1>Your info in on it's way!</h1>
    </div>
  );
}

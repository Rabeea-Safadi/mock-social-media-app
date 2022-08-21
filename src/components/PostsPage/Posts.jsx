import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import LoadingWindow from "../LoadingWindow/LoadingWindow";
import styles from "./posts.module.css";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const { users, posts, setPosts } = useContext(UserContext);

  function getPostOwner(userId) {
    const user = users.find((user) => user.id === userId);
    return user.name;
  }

  function createPost(post) {
    return (
      <div className={styles["post"]} key={post.id}>
        <span className={styles["post-title"]}>{post.title}</span>
        <hr />
        <p className={styles["post-owner"]}>
          Posted by
          <a href={`/profile/${post.userId}`}>{getPostOwner(post.userId)}</a>
        </p>
        <p className={styles["post-body"]}>{post.body}</p>
      </div>
    );
  }

  return posts.length > 0 ? (
    <div className={styles["post-container"]}>
      {posts.map((item) => createPost(item))}
    </div>
  ) : (
    <LoadingWindow />
  );
}

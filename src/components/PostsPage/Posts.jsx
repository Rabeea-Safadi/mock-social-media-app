import { useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import LoadingWindow from "../LoadingWindow/LoadingWindow";
import styles from "./posts.module.css";

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
          Posted by {getPostOwner(post.userId)}
        </p>
        <p className={styles["post-body"]}>{post.body}</p>
      </div>
    );
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();

      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return posts.length < 0 ? (
    <div className={styles["post-container"]}>
      {posts.map((item) => createPost(item))}
    </div>
  ) : (
    <LoadingWindow />
  );
}

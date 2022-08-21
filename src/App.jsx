import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import NavBar from "./components/NavBar/NavBar";
import Users from "./components/UsersPage/Users";
import Posts from "./components/PostsPage/Posts";
import UserProvider from "./components/Context/UserContext";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

export default function App(props) {
  const links = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/users",
      title: "Users",
    },
    {
      to: "/posts",
      title: "Posts",
    },
    {
      to: "/about",
      title: "About",
    },
  ];

  return (
    <UserProvider>
      <BrowserRouter>
        <NavBar links={links} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

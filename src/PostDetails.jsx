import { useParams } from "react-router-dom";
import { useContext } from "react";
import Posts from "./context/context";
export default function PostDetails({ title, desc }) {
  const Postse = useContext(Posts);
  const { postID } = useParams();
  const post = Postse.find((p) => {
    return p.id == postID;
  });
  // const para = useParams();
  return (
    <>
      <h1 className="text-blue-700 text-3xl">{post.title}</h1>
      <p className="text-violet-800 text-3xl">{post.desc}</p>
    </>
  );
}

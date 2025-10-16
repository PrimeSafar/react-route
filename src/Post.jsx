import { Link } from "react-router-dom";
import Posts from "./context/context";
import { useContext } from "react";
export default function Post(){
    const postContext = useContext(Posts)
    
    let postList = postContext.map((post)=>{
        return(
            <Link  key={post.id} to={`/postDetails/${post.id}`}>
            <div >
                <h1>{post.title}</h1>
            </div>
            </Link>
        )
    })
    return(
        <>
        {postList}
        </>
    );
}
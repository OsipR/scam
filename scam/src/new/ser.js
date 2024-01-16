import { useState, useEffect } from "react";
import { HttpNoData } from '../Core'

function Ser() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        async function Arrau() {
            const response = await HttpNoData('/api/posts/2004/2024', 'GET');
            setPost(response)
        }
        Arrau();
    }, []);

    function removePost (authorId) {
        const newPost = post.filter((l) => l.authorId !== authorId);
        setPost(newPost);
    }
    return (
        <>
            {post.map((item) => {
                const { author, authorId, date, text, isBlock } = item
                
                
                return (
                    <div key={authorId}>
                        <div>{author}</div>
                        <div>{date}</div>
                        <div>{text}</div>
                        <div>{isBlock.toString()}</div>
                        <button disabled = {isBlock} onClick={() => removePost(authorId)}>CLOSE</button>
                    </div>
                )
                
            })}
        </>
    )
}
export default Ser;
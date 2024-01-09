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
    return <div>{post.map(item => <div>{item.date}</div>)}</div>

};
export default Ser;
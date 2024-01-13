import { useState, useEffect } from "react";
import { HttpNoData } from '../Core';
import styles from './Ser.module.css';

function Ser() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        async function Arrau() {
            const response = await HttpNoData('/api/posts/2004/2024', 'GET');
            setPost(response)
        }
        Arrau();
    }, []);

    function removePost(authorId) {
        const newPost = post.filter((l) => l.authorId !== authorId);
        setPost(newPost);
    }
    return (
        <div className={styles.Ser}>
                {post.map((item) => {
                    const { author, authorId, date, text, isBlock, id } = item

                    return (

                        <div className={isBlock ? styles.SerTrue : styles.SerFalse} key={id}>
                            <div className={styles.author}>{author}</div>
                            <div className={styles.time}>{date}</div>
                            <div className={styles.text}>{text}</div>
                            {isBlock ? null :  <button className={styles.button} onClick={() => removePost(authorId)}>CLOSE</button>}
                        </div>

                    )

                })}
        </div>
    )
}
export default Ser;

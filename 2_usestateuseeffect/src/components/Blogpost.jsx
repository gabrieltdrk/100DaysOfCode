import { useEffect, useState } from 'react';

export default function Blogpost() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/posts/1")
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
    }, [])

  return (
    <article>
        <h1>2- Renderização condicional com fetch + loading</h1>
        {loading ? (
            "Loading..."
        ) : (
            <>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </>
        )}
    </article>
  )
}

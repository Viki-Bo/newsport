import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Post.css';

function Post() {
    let params = useParams()

    const [post, setPost] = useState({ comments: [], user: {} });
    useEffect(() => {
        getPost();
    }, []);

    const getPost = async () => {
        let postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
        let post = await postResponse.json();
        let commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`);
        let userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);

        setPost({
            user: await userResponse.json(),
            comments: await commentsResponse.json(),
            ...post
        });
    }

    return (
        <div className="Post-card">
            <h1>{post.title}</h1>
            <p>{post.user.name}</p>
            <p>{post.body}</p>
            <div>
                {post.comments.map(comment => {
                    return (
                        <div className="Com-body" key={comment.id}>
                            <h2>title: {comment.name}</h2>
                            <p>body: {comment.body}</p>
                            <p>by: {comment.email}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Post
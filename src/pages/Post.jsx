import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Post.scss';
import { FaRegUserCircle } from 'react-icons/fa';

function Post() {
    let params = useParams()

    const [post, setPost] = useState({
        comments: [], user: {}, photo: { urls: {} }, newComment: { body: '', email: '' }
    });

    useEffect(() => {
        getPost();
    }, []);

    const getPost = async () => {
        let postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
        let post = await postResponse.json();
        let commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`);
        let userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        let photoResponse = await fetch('https://api.unsplash.com/photos/random?client_id=dUegAyc2Ns6BB4YzllpdGTmUTx5w3MSEq5hBBX4qv0c&query=sport');

        setPost({
            user: await userResponse.json(),
            comments: await commentsResponse.json(),
            photo: await photoResponse.json(),
            newComment: {},
            ...post
        });
    }

    const addComment = async () => {
        let commentResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`, { method: 'POST', body: JSON.stringify([post.newComment]) })
        let comment = await commentResponse.json();

        let comments = [
            ...post.comments,
            {
                body: post.newComment.body,
                email: post.newComment.body,
                id: comment.id
            }
        ];

        setPost({
            ...post,
            comments: comments,
            newComment: { body: '', email: '' }
        });
    }

    return (
        <div className="Post-card">
            <div className='Post-body'>
                <h3>{post.title}</h3>
                <img src={post.photo.urls.small} />
                <h5><FaRegUserCircle size={20} style={{ fill: 'black', marginRight: '10px' }} />{post.user.name}</h5>
                <p>{post.body}</p>
            </div>
            <div className="Com-body">
                {post.comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <h4>
                                <span style={{ marginRight: '5px' }}><FaRegUserCircle size={20} style={{ fill: 'black' }} /></span>
                                {comment.email}
                            </h4>
                            <p>{comment.body}</p>
                        </div>
                    );
                })}
                <div>
                    <label>Email</label>
                    <input value={post.newComment.email} onChange={e => post.newComment.email = e.target.value} type="email" className="form-control" id="post" placeholder="name@example.com" />
                    <label>Comment</label>
                    <textarea value={post.newComment.body} onChange={e => post.newComment.body = e.target.value} className="form-control" id="post" rows="3"></textarea>
                    <button onClick={addComment}>Add new comment</button>
                </div>
            </div>

        </div>
    )
}

export default Post
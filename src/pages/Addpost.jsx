import { useEffect, useState } from "react";
import '../styles/Addpost.scss';
import '@splidejs/splide/dist/css/splide.min.css';

import React from 'react'

function Addpost() {
    const [state, setPost] = useState({
        newPost: {
            title: '',
            body: '',
            email: ''
        }
    });

    const addPost = async () => {
        let postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts`, { method: 'POST', body: JSON.stringify([state.newPost]) })

        setPost({
            newPost: {
                title: '',
                body: '',
                email: ''
            }
        });
    }

    return (
        <div className="Addpost">
            <div className="area">
                <input value={state.newPost.title} onChange={e => state.newPost.title = e.target.value} type="text" className="form-control" placeholder="Your name" aria-label="Username" aria-describedby="basic-addon1" />
                <input value={state.newPost.email} onChange={e => state.newPost.email = e.target.value} type="email" className="form-control" placeholder="name@example.com" />
                <textarea value={state.newPost.body} onChange={e => state.newPost.body = e.target.value} className="form-control" rows="3"></textarea>
                <button onClick={addPost}>Add new post</button>
            </div>
        </div>
    )
}

export default Addpost
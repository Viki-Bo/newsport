import { useEffect, useState } from "react";
import '../styles/Addpost.scss';
import '@splidejs/splide/dist/css/splide.min.css';

import React from 'react'

function Addpost() {
    const [newPost, setPost] = useState({
        title: '',
        body: '',
        email: ''
    });

    const addPost = async () => {
        let postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts`, { method: 'POST', body: JSON.stringify([newPost]) })

        setPost({
            title: '',
            body: '',
            email: ''
        });
    }

    const handleChange = e => {
        setPost({
            ...newPost,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="Addpost">
            <div className="area">
                <input name="title" value={newPost.title} onChange={handleChange} type="text" className="form-control" placeholder="Your name" aria-label="Username" aria-describedby="basic-addon1" />
                <input name="email" value={newPost.email} onChange={handleChange} type="email" className="form-control" placeholder="name@example.com" />
                <textarea name="body" value={newPost.body} onChange={handleChange} className="form-control" rows="3"></textarea>
                <button onClick={addPost}>Add new post</button>
            </div>
        </div>
    )
}

export default Addpost
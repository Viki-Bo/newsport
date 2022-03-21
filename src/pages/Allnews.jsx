import { useEffect, useState } from "react";
import '../styles/Allnews.scss';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom'

function Allnews() {

    const [news, setNews] = useState([]);
    useEffect(() => {
        getNews();
    }, []);

    const getNews = async () => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        var posts = await response.json();
        setNews(posts.slice(0, 100));
    }


    return (

        <div className="AllNews">
            {news.map((post) => {
                return (
                    <div className="card" key={post.id}>
                        <p>
                            <Link className="Link" to={`/post/${post.id}`}>{post.title}</Link>
                        </p>
                    </div>

                );
            })};


        </div>
    );

};


export default Allnews
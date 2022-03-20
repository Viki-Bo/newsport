import { useEffect, useState } from "react";
import '../styles/News.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom'


function News() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        getNews();
    }, []);

    const getNews = async () => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        var posts = await response.json();
        setNews(posts.slice(0, 16));
    }


    return (

        <div className="News">
            <Splide options={{ perPage: 6, arrows: false, pagination: false, drag: 'free', gap: '3rem' }}>
                {news.map((post) => {
                    return (
                        <SplideSlide>
                            <div className="card" key={post.id}>
                                <p>
                                    <Link className="Link" to={`/post/${post.id}`}>{post.title}</Link>
                                </p>
                            </div>
                        </SplideSlide>
                    );
                })};
            </Splide>
        </div>
    );

}

export default News
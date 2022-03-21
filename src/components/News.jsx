import { useEffect, useState } from "react";
import '../styles/News.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom'


function News() {
    const [state, setState] = useState({ news: [], photos: [] });
    useEffect(() => {
        getNews();
    }, []);

    const getNews = async () => {
        let postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        let photoResponse = await fetch('https://api.unsplash.com/search/photos?client_id=dUegAyc2Ns6BB4YzllpdGTmUTx5w3MSEq5hBBX4qv0c&query=sport&per_page=12');

        var posts = await postResponse.json();
        var photos = await photoResponse.json();

        setState({
            news: posts.slice(0, 12),
            photos: photos.results
        });
    }

    return (
        <div className="News">
            <h2>Popular Today</h2>
            <Splide options={{ perPage: 6, arrows: false, pagination: false, drag: 'free', gap: '3rem' }}>
                {state.news.map((post, index) => {
                    return (
                        <SplideSlide key={post.id}>
                            <div className="card">
                                <p className="Text">
                                    <Link className="Link" to={`/post/${post.id}`}>{post.title}</Link>
                                </p>
                                <img src={state.photos[index].urls.small} alt={post.title} />
                            </div>
                        </SplideSlide>
                    );
                })};
            </Splide>
        </div>
    );

}

export default News
import style from '~/style/youtubeSearch.module.scss';
import moment from 'moment';
import { useEffect, useState } from 'react';
import axios from 'axios';
function YoutubeSearch() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {}, []);
    const handleSearch = async () => {
        const res = await axios({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params: {
                part: 'snippet',
                maxResults: '5',
                type: 'video',
                key: 'AIzaSyCWGV8dYz8LFiPMiCFeGzkrLx7KDvkFi4M',
                q: `${search}`,
            },
        });
        console.log(res.data.data);

        if (res && res.data && res.data.items && res.data.items.length > 0) {
            let result = [];
            res.data.items.map((item) => {
                let object = {};
                object.id = item.id.videoId;
                object.title = item.snippet.title;
                object.createAt = item.snippet.publishedAt;
                object.author = item.snippet.channelTitle;
                object.description = item.snippet.description;
                result.push(object);
            });
            console.log(result);
            setData(result);
        }
    };

    return (
        <div className={style.content}>
            <h2>Search youtube</h2>
            <div className={style.search}>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Tìm Kiếm"
                    className="form-control form-control-lg"
                />
                <button onClick={handleSearch} className="btn btn-primary">
                    Search
                </button>
            </div>
            <div className={style.listSearch}>
                {data &&
                    data.length > 0 &&
                    data.map((item) => (
                        <div className={style.video} key={item.id}>
                            <iframe
                                className={style.videoYoutube}
                                src={`https://www.youtube.com/embed/${item.id}`}
                                title={`${data.title}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <div className={style.infro}>
                                <div className={style.title}>{item.title}</div>
                                <div className={style.channel}>Channel: {item.author}</div>
                                <div className={style.dayAndView}>
                                    {Math.floor(Math.random() * 10000000)} view
                                    {moment(`${item.createAt}`, 'YYYYMMDD').fromNow()}
                                </div>
                                <div className={style.des}>{item.description}</div>
                                <button className="btn btn-danger">Đăng kí</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default YoutubeSearch;

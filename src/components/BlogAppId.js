import axios from 'axios';
import { useEffect, useState } from 'react';
import { withRouter } from '~/router/withrouter';

function BlogAppId(props) {
    const [data, setData] = useState({});
    const id = props.router.params.id;
    useEffect(() => {
        const fetData = async () => {
            const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setData(data);
        };
        fetData();
    }, [id]);
    return (
        <div>
            {data && data.data && (
                <div>
                    <div>{data.data.id}</div>
                    <div>{data.data.title}</div>
                    <div>{data.data.body}</div>
                </div>
            )}
        </div>
    );
}

export default withRouter(BlogAppId);

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(url) {
    // const ourRequest = axios.CancelToken.source();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async function () {
            try {
                setLoading(true);
                // const response = await axios.get(url, {
                //     cancelToken: ourRequest.token,
                // });
                const response = await axios.get(url);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
        // return () => {
        //     if (data) {
        //         ourRequest.cancel();
        //     }
        // };
    }, [url]);
    return [data, loading, error];
}

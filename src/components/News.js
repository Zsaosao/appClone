import { useEffect, useState } from 'react';
import { Store } from 'react-notifications-component';
function News() {
    const [count, setCount] = useState(10);
    useEffect(() => {
        let id = setInterval(() => {
            setCount((prev) => prev - 1);
            console.log('vẫn chạy');
        }, 1000);
        return () => clearInterval(id);
    }, []);
    const handleBtn = () => {
        Store.addNotification({
            title: 'Wonderful!',
            message: 'Dev',
            type: 'warning',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animate__animated', 'animate__fadeIn'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
                duration: 5000,
                onScreen: true,
            },
        });
    };
    return (
        <div>
            <div>this is the page News</div>
            <h1>{count}</h1>
            <button onClick={handleBtn}>kick</button>
        </div>
    );
}

export default News;

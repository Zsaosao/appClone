import useFetch from '~/customHook/useFetch';
import style from '~/style/blogApp.module.scss';
import { withRouter } from '~/router/withrouter';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import MyModal from '~/components/Modal';
function BlogApp(props) {
    const [show, setShow] = useState(false);
    const [newBlogs, setNewBlogs] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dataBlogs, loading] = useFetch('https://jsonplaceholder.typicode.com/posts');
    // async because firts run dataBlogs delay but useEffec run dataBlog = undefined
    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            const newBlogsFirst = dataBlogs.slice(0, 12);
            setNewBlogs(newBlogsFirst);
        }
    }, [dataBlogs]);
    const handleAdd = (data) => {
        let prevdata = newBlogs;
        prevdata.unshift(data);
        setNewBlogs(prevdata);
        setShow(false);
    };
    const viewDetail = (user) => props.router.navigate(`/blogApp/${user.id}`);
    const deletPost = (dataDelete) => {
        let prevdata = newBlogs;
        prevdata = prevdata.filter((user) => user.title !== dataDelete.title);
        setNewBlogs(prevdata);
    };
    return (
        <div>
            <Button className={style.btn_boot} variant="primary" onClick={handleShow}>
                Đăng kí
            </Button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header>ADD POST</Modal.Header>
                <Modal.Footer>
                    <MyModal handleAdd={handleAdd} />
                </Modal.Footer>
            </Modal>
            <div className={style.wrapper}>
                {!loading && newBlogs && newBlogs.length > 0 ? (
                    newBlogs.map((dataBlog) => (
                        <div className={style.blog} key={Math.random()}>
                            <div className={style.header}>{dataBlog.title}</div>
                            <button onClick={() => deletPost(dataBlog)}>Delete</button>
                            <div>{dataBlog.body}</div>
                            <button onClick={() => viewDetail(dataBlog)}>View Detail</button>
                        </div>
                    ))
                ) : (
                    <div>loading...</div>
                )}
            </div>
        </div>
    );
}

export default withRouter(BlogApp);

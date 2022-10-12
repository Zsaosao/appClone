import axios from 'axios';
import { useId, useState } from 'react';
import style from '~/style/modal.module.scss';

function Modal(props) {
    const account = useId();
    const password = useId();

    const [acc, setAcc] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmid = async () => {
        if (acc && pass) {
            const data = {
                title: acc,
                body: pass,
                useId: 1,
            };

            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
            props.handleAdd(res.data);
        }
    };
    return (
        <div className={`${style.wrapper} ${style.hide}`}>
            <div className={style.wrapper__inner}>
                <label htmlFor={account}>Tài khoảng</label>
                <input value={acc} onChange={(e) => setAcc(e.target.value)} id={account} />
            </div>
            <div className={style.wrapper__inner}>
                <label htmlFor={password}>Mật khẩu</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id={password} />
            </div>
            <button onClick={handleSubmid}>Submid</button>
        </div>
    );
}

export default Modal;

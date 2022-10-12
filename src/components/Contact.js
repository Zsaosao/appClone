import axios from 'axios';
import { useEffect, useState } from 'react';
import { withRouter } from '~/router/withrouter';
function Contact(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const listData = await axios.get(`https://reqres.in/api/users?page=2`);
            setUsers(listData);
        };
        fetchData();
    }, []);

    const handleSeeInfor = (user) => {
        props.router.navigate(`/contact/${user.id}`);
    };

    return (
        <div>
            <div>this is the page Contact</div>
            {users &&
                users.data &&
                users.data.data &&
                users.data.data.map((users) => (
                    <div key={users.id}>
                        <span>
                            FirstName: {users.first_name} LastName:{users.last_name} Email: {users.email}
                        </span>
                        <button onClick={() => handleSeeInfor(users)}>See full information</button>
                    </div>
                ))}
        </div>
    );
}

export default withRouter(Contact);

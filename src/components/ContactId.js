import axios from 'axios';
import { useEffect, useState } from 'react';
import { withRouter } from '~/router/withrouter';
function ContactId(props) {
    const [user, setUser] = useState({});
    const id = props.router.params.id;
    useEffect(() => {
        const fetchData = async () => {
            const dataUser = await axios.get(`https://reqres.in/api/users/${id}`);
            setUser(dataUser);
        };
        fetchData();
    }, [id]);
    const handleBack = () => {
        props.router.navigate(`/contact`);
    };
    return (
        <div>
            {user && user.data && user.data.data && (
                <div>
                    <img src={user.data.data.avatar} alt={user.data.avatar} />
                    <span>
                        FirstName: {user.data.data.first_name} LastName:{user.data.data.last_name} Email:
                        {user.data.data.email}
                    </span>
                    <button onClick={handleBack}>Back</button>
                </div>
            )}
        </div>
    );
}

export default withRouter(ContactId);

import { useContactsQuery } from '../../redux/rtk query/contactsApi';
import './home.css';

const Home = () => {
    const contacts = useContactsQuery();
    console.log(contacts);
    return (
        <div>
            home
        </div>
    );
};

export default Home;
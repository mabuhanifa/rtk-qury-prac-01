import { useContactsQuery } from '../../redux/rtk query/contactsApi';
import './home.css';

const Home = () => {
    const {data,error,isLoading,} = useContactsQuery();
    console.log(data);
    return (
        <div>
            home
        </div>
    );
};

export default Home;
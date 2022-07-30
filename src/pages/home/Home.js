import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import {
  useContactsQuery,
  useDeleteContactMutation
} from "../../redux/rtk query/contactsApi";
import "./home.css";

const Home = () => {
  const { data, error, isLoading } = useContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      await deleteContact(id);
      alert("Deleted contact successfully");
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      {isLoading && <Spinner />}
      {error && <p>{error}</p>}
      <Link to={"/addContact"}>
        <button className="btn btn-add"> Add Contact</button>
      </Link>
      <br />
      <br />
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Number</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to={`/editContact/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>

                  <button
                    className="btn btn-delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>

                  <Link to={`/info/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

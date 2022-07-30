import React from "react";
import { Link } from "react-router-dom";
import { useGetAllTodosQuery } from "../../redux/rtk query/todoQuery";
import Spinner from "../spinner/Spinner";
import './todos.css';

const Todos = () => {
  const { data, isError, isFetching, isLoading, isSuccess } =
    useGetAllTodosQuery("/posts");

  return (
    <div>
      {isError && <h6>{isError}</h6>}
      {(isFetching || isLoading) && <Spinner />}
      <div className="main-content">
        {isSuccess && (
          <div className="container">
            {data.map((todo) => {
              return (
                <div key={todo.id} className="singlePost">
                  <h4>{todo.title}</h4>
                  <p>{todo.body}</p>
                  <Link to={`/${todo.id}`}><button className='btn'>View</button></Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Todos;

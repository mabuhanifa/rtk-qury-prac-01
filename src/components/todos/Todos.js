import React from "react";
import { useGetAllTodosQuery } from "../../redux/rtk query/todoQuery";
import Spinner from "../spinner/Spinner";

const Todos = () => {
  const { data, isError, isFetching, isLoading, isSuccess } =
    useGetAllTodosQuery("/todos");

  return (
    <div>
      {isError && <h6>{isError}</h6>}
      {(isFetching || isLoading) && <Spinner />}
      <div>
        {isSuccess && (
          <div>
            {data.map((todo) => {
              return (
                <div key={todo.id}>
                  <h4>{todo.title}</h4>
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

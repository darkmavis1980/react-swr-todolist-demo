import React from "react";
import useSWR, { useSWRConfig } from "swr";
import { axiosInstance } from '../lib/utils';

const fetcher = url => axiosInstance.get(url).then(({data}) => data);

const TodoList = () => {
  const { mutate } = useSWRConfig();
  const { data } = useSWR('/todo', fetcher, { suspense: true});

  const deletehandler = (task) => {
    return axiosInstance.delete(`/todo/${task}`).then(({data}) => data);
  }

  return (
    <div className="list">
      <ul>
        {data.todo.length === 0 && (<li>Add something above!</li>)}
        {data.todo.length > 0 && data.todo.map((item, index) => (
          <li key={`item-${index}`}>
            <span>{item}</span>
            <button type="button" onClick={() => {
              mutate('/todo', deletehandler(item))
            }}>&#x2716;</button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default TodoList;

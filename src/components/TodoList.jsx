import React from "react";
import useSWR, { useSWRConfig } from "swr";
import { axiosInstance } from '../lib/utils';

const fetcher = url => axiosInstance.get(url).then(({data}) => data);

const TodoList = () => {
  //const { mutate } = useSWRConfig();
  const { data } = useSWR('/todo', fetcher, { suspense: true});
  
  return (
    <ul>
      {data.todo.map((item, index) => <li key={`item-${index}`}>{item}</li>)}
    </ul>
  )
};

export default TodoList;

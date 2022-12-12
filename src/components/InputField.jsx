import React, { useState } from "react";
import { useSWRConfig } from "swr";
import { axiosInstance } from '../lib/utils';

const InputField = () => {
  const [task, setTask] = useState('');
  const { mutate } = useSWRConfig();

  const updateHandler = async (task) => {
    await axiosInstance.post('/todo', { task }).then(({data}) => data);
    setTask('');
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setTask(value);
  }

  return (
    <div className="input-field">
        <label htmlFor="task">Add task</label>
        <input type="text" id="task" value={task} onChange={handleChange} />
        <button type="button" onClick={() => {
          mutate('/todo', updateHandler(task));
        }}>Add</button>
    </div>
  )
}

export default InputField;

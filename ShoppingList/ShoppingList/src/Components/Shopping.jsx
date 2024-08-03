
import { useState } from "react";

import List from './List';
import InputBox from './InputBox';

function Shopping() {
  const [content, setContent] = useState('');
  const [task, setTask] = useState([]);

  const InputHandler = (e) => {
    setContent(e.target.value);
  };

  const DeleteHandler = (indexToDelete) => {
    setTask(task.filter((_, index) => index !== indexToDelete));
  };

  const AddItemHandler = () => {
    const newItem = content;
    const newArr = [...task];
    newArr.push(newItem);
    setTask(newArr);
    setContent('');
  };

  return (
    <div className='Shopping-List'>
      <InputBox 
        InputHandler={InputHandler}
        AddItemHandler={AddItemHandler}
        content={content}
      />
      <List 
        DeleteHandler={DeleteHandler}
        task={task}
      />
    </div>
  );
}

export default Shopping;

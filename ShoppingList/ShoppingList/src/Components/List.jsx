import React from 'react';

function List(props) {
  const { DeleteHandler, task } = props;

  return (
    <ul className='Add-item'>
      {task.map((item, index) => (
        <li key={index}>
          <span>{item}</span>
          <button onClick={() => DeleteHandler(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default List;

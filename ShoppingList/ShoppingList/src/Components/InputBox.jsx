

import React from 'react';

function InputBox(props) {
  const { InputHandler, AddItemHandler, content } = props;

  return (
    <>
      <input type="text" onChange={InputHandler} value={content} />
      <button onClick={AddItemHandler}>Add Item</button>
    </>
  );
}

export default InputBox;

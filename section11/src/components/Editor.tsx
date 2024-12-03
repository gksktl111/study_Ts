import React, { useState } from 'react';
import { useTodoDispatch } from '../App';

const Editor = () => {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState('');

  // 이벤트 객체의 타입은 해당하는 이벤트의 매개변수에 커서를 올려보면 타입이 나오므로 그걸 사용하면 된다
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText('');
  };

  return (
    <div>
      <input type='text' value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
};

export default Editor;

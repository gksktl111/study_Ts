import React from 'react';
import { Todo } from '../types';
import { useTodoDispatch } from '../App';

const TodoItem = (props: Todo) => {
  const dispatch = useTodoDispatch();

  const onClickDelete = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <div>
      <div key={props.id}>{props.content}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

export default TodoItem;

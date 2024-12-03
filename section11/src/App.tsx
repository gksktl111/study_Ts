import React, { useContext, useEffect, useReducer, useRef } from 'react';
import './App.css';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import { Todo } from './types';

// useReducer를 사용하는 주된 이유:
// 1. 여러 상태 업데이트 로직을 한 곳에서 관리
// 2. 복잡한 상태 로직을 reducer 함수로 분리하여 관리
// 3. 상태 업데이트의 일관성과 예측 가능성 향상
// 4. 상태 변화에 대한 디버깅이 용이
type Action =
  | {
      type: 'CREATE';
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: 'DELETE';
      id: number;
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.id);
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('TodoDispatchContext에 문제가 있다');
  return dispatch;
}

function App() {
  // useState는 타입 변수를 넘겨받기도 하지만 간단한 useState는 초기값을 설정해 추론하는것이 좋음
  const [todos, dispatch] = useReducer(reducer, []);

  // Ref를 이용해 id를 설정
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className='App'>
      <h1>Todo</h1>
      {/* Provider를 통해 todos 상태를 자식 컴포넌트들에게 공급 */}
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
          <Editor />
          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;

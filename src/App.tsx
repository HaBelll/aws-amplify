import { useState, useEffect } from 'react';
import type { Schema } from '../amplify/data/resource'; // 경로 확인
import { generateClient } from "aws-amplify/data";
import './App.css';

const client = generateClient<Schema>(); // 클라이언트 생성

export default function App() {
  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]); // Todo 타입 사용

  const fetchTodos = async () => {
    const { data: items, errors } = await client.models.Todo.list(); // Todo 리스트 가져오기
    if (!errors) {
      setTodos(items);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const createTodo = async () => {
    const content = window.prompt("Todo");
    if (content) {
      await client.models.Todo.create({ content }); // Todo 생성
      fetchTodos();
    }
  };

  return (
    <div className="container">
      <button className="button" onClick={createTodo}>Add new todo</button>
      <ul className="list">
        {todos.map(({ id, content }) => (
          <li className="list-item" key={id}>
            {content}
          </li>
        ))}
      </ul>
    </div>
  );
}

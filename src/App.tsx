<<<<<<< HEAD
import { useState, useEffect } from 'react';
import type { Schema } from '../amplify/data/resource';
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
=======
import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () =>{
      const response = await fetch('https://al3fbe8b17.execute-api.ap-northeast-2.amazonaws.com/Prod/hello');
      const data = await response.json();
      console.log(data);
      setMessage(data.message);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="message">{message}</div>
      </div>
    </div>
  );
}

export default App;
>>>>>>> bad443d615c959f33496d163ac12ac04a9d94283

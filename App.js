/* eslint-disable 소히*/
import React from "react";
import "./App.css";
import TodoList from "./components/pages/TodoList";

function App() {
  // 집으로 가져오기
  return (
    <div className="App">
      <p>안녕하세요 1조입니다.</p>
      <p>안녕하세요 호호호.</p>
      <TodoList></TodoList>
    </div>
  );
}

export default App;

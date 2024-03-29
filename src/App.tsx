import { useState } from "react";

type Todo = {
  value: string;
  readonly id: number;
};

export const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // Todosステートを更新する関数
  const handleSubmit = () => {
    // 何も入力されていなかったらリターン
    if (!text) return;

    // 新しいTodoを作成
    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
    };

    /**
     * 更新前の todos ステートを元に
     * スプレッド構文で展開した要素へ
     * newTodo を加えた新しい配列でステートを更新
     **/
    setTodos((todos) => [newTodo, ...todos]);
    setText('');
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type='text'
          value={text}
          onChange={(e) => handleChange(e)}
        />
        <input
          type='submit'
          value='追加'
          onSubmit={handleSubmit}
        />
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.value}</li>;
        })}
      </ul>
    </div>
  );
};

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import cuid from 'cuid';

// Local Dependencies
import { TodoItemType, todoListState } from 'src/features/TodoList/atoms';

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.length) {
      setTodoList((oldTodoList: TodoItemType[]) => [
        ...oldTodoList,
        {
          id: cuid(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setError('');
    } else {
      setError('Please type a todo item');
    }
    setInputValue('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={addItem} className="w-full">
        <div className="flex justify-between  my-4">
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-6"
            id="todo"
            type="text"
            value={inputValue}
            onChange={onChange}
          />
          <button
            className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add Todo
          </button>
        </div>
        {error ? <p className="text-red-500">{error}</p> : null}
      </form>
    </>
  );
};

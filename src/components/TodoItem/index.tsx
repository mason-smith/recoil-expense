import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

// Local Dependencies
import { TodoItemType, todoListState } from 'src/features/TodoList/atoms';
import { removeItemAtIndex } from 'src/utils/removeItemAtIndex';
import { replaceItemAtIndex } from 'src/utils/replaceItemAtIndex';

type TodoItemProps = {
  item: TodoItemType;
};

export const TodoItem = (props: TodoItemProps) => {
  const { item } = props;

  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (e: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div className="flex items-center border-b border-indigo-500 py-2">
      <input
        type="text"
        value={item.text}
        onChange={editItemText}
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        placeholder="Jane Doe"
        aria-label="Full name"
      />
      <label
        onChange={toggleItemCompletion}
        htmlFor="complete-toggle"
        className="flex text-gray-500 font-bold"
      >
        <input
          id="complete-toggle"
          className="mr-2 leading-tight"
          type="checkbox"
          checked={item.isComplete}
        />
        <span className="text-sm">Mark complete</span>
      </label>
      <button
        type="button"
        onClick={deleteItem}
        className="flex-shrink-0 border-transparent border-4 text-indigo-500 hover:text-indigo-800 text-sm py-1 px-2 rounded"
      >
        Delete
      </button>
    </div>
  );
};

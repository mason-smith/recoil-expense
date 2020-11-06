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
    <div className="flex items-center py-1">
      <input
        type="text"
        value={item.text}
        onChange={editItemText}
        className="appearance-none bg-transparent w-8/12 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none border-b border-indigo-500"
        aria-label="Full name"
      />
      <button
        type="button"
        onClick={toggleItemCompletion}
        className="mr-2 border border-indigo-500 text-indigo-500 transition duration-500
        ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline text-sm py-1 px-2 rounded w-2/12"
      >
        Complete
      </button>
      <button
        type="button"
        onClick={deleteItem}
        className="border border-indigo-500 text-indigo-500 transition duration-500
        ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline text-sm py-1 px-2 rounded w-2/12"
      >
        Delete
      </button>
    </div>
  );
};

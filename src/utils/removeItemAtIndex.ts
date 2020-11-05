import { TodoItemType } from 'src/features/TodoList/atoms';

export const removeItemAtIndex = (arr: TodoItemType[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

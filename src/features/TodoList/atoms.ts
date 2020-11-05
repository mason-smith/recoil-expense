import { atom, RecoilState } from 'recoil';

export type TodoItemType = {
  id: string;
  text: string;
  isComplete: boolean;
};

// @ts-ignore
export const todoListState: RecoilState<TodoItemType[]> = atom({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

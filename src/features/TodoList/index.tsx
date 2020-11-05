import React from 'react';
import { useRecoilValue } from 'recoil';

// Local Dependencies
import { Container } from 'src/components/Container';
import { TodoItemCreator } from 'src/components/TodoItemCreator';
import { TodoItem } from 'src/components/TodoItem';
import { TodoListStats } from 'src/components/TodoListStats';
import { TodoListFilters } from 'src/components/TodoListFilters';
import { filteredTodoListState } from './selectors';

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <Container>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </Container>
  );
};

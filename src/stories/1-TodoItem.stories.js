import React from 'react'
import {action} from '@storybook/addon-actions'
import TodoItem from '../components/TodoItem'

import 'todomvc-app-css/index.css'
import '../index.css'

export default {
  title: 'Todo Item',
  component: TodoItem,
}

export const NotCompleted = getItem({id: 'one', text: 'Hello Todo', completed: false})

export const Completed = getItem({id: 'two', text: 'Hello Todo', completed: true})

function getItem(todo) {
  return () => (
    <div className="todoapp">
      <div className="todo-list">
        <TodoItem
          todo={todo}
          editTodo={action('editTodo')}
          deleteTodo={action('deleteTodo')}
          completeTodo={action('completeTodo')}
        />
      </div>
    </div>
  )
}

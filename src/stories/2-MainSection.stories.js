import React from 'react'
import {action} from '@storybook/addon-actions'
import MainSection from '../components/MainSection'

import 'todomvc-app-css/index.css'
import '../index.css'

export default {
  title: 'Main Section',
  component: MainSection,
}

export const AllActive = getMainSection([
  {id: 'one', text: 'Item One', completed: false},
  {id: 'two', text: 'Item Two', completed: false},
])

export const SomeCompleted = getMainSection([
  {id: 'one', text: 'Item One', completed: false},
  {id: 'two', text: 'Item Two', completed: true},
])

export const AllCompleted = getMainSection([
  {id: 'one', text: 'Item One', completed: true},
  {id: 'two', text: 'Item Two', completed: true},
])

function getMainSection(todos) {
  return () => {
    const actions = {
      clearCompleted: action('clearCompleted'),
      completeAll: action('completeAll'),
    }

    return (
      <div className="todoapp">
        <MainSection todos={todos} actions={actions} />
      </div>
    )
  }
}

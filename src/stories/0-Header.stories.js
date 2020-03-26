import React from 'react'
import {action} from '@storybook/addon-actions'
import Header from '../components/Header'

import 'todomvc-app-css/index.css'
import '../index.css'

export default {
  title: 'Header',
  component: Header,
}

export const DefaultView = () => (
  <div className="todoapp">
    <Header addTodo={action('Add Todo')} />
  </div>
)

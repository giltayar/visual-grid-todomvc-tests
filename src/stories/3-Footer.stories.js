import React from 'react'
import {action} from '@storybook/addon-actions'
import Footer from '../components/Footer'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters'

import 'todomvc-app-css/index.css'
import '../index.css'

export default {
  title: 'Footer',
  component: Footer,
}

export const DefaultView = () => (
  <div className="todoapp">
    <Footer
      completedCount={10}
      activeCount={4}
      filter={SHOW_ALL}
      onClearCompleted={action('onClearCompleted')}
      onShow={action('onShow')}
    />
  </div>
)

export const ShowCompleted = () => (
  <div className="todoapp">
    <Footer
      completedCount={10}
      activeCount={4}
      filter={SHOW_COMPLETED}
      onClearCompleted={action('onClearCompleted')}
      onShow={action('onShow')}
    />
  </div>
)

export const ShowActive = () => (
  <div className="todoapp">
    <Footer
      completedCount={10}
      activeCount={4}
      filter={SHOW_ACTIVE}
      onClearCompleted={action('onClearCompleted')}
      onShow={action('onShow')}
    />
  </div>
)

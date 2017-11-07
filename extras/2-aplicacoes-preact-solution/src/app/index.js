import { Component, h } from 'preact'
import { Provider } from 'preact-redux'
import store from './store'
import Header from './components/header'
import Input from './components/input'
import TodoList from './components/todo-list'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Input />
          <TodoList />
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default App

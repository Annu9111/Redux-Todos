import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Redux Todo App
        </h1>

        {/* Add Todo */}
        <div className="flex justify-center">
          <AddTodo />
        </div>

        {/* Todos */}
        <div className="mt-12">
          <Todos />
        </div>

      </div>

    </div>
  )
}

export default App
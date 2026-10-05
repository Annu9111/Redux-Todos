import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    return (
        <div className="w-full max-w-2xl mx-auto mt-8">

            {/* Heading */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                    Your Todos
                </h2>

                <span className="text-sm text-gray-400">
                    {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
                </span>
            </div>

            {/* Todo List */}
            <ul className="space-y-3">
                {todos.length === 0 ? (
                    <li className="text-center py-10 rounded-2xl
                                   border border-dashed border-gray-700
                                   bg-gray-900/50 text-gray-500">
                        No todos yet. Add your first task!
                    </li>
                ) : (
                    todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="group flex items-center justify-between
                                       gap-4
                                       px-5 py-4
                                       rounded-2xl
                                       bg-gray-900/80
                                       border border-gray-800
                                       shadow-lg
                                       transition-all duration-300
                                       hover:border-gray-700
                                       hover:-translate-y-0.5"
                        >
                            {/* Todo text */}
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="w-2 h-2 rounded-full bg-indigo-500
                                                shrink-0" />

                                <span className="text-gray-100 text-base
                                                 break-words">
                                    {todo.text}
                                </span>
                            </div>

                            {/* Delete button */}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="shrink-0
                                           p-2.5
                                           rounded-xl
                                           text-gray-400
                                           bg-gray-800
                                           hover:bg-red-500
                                           hover:text-white
                                           transition-all duration-200
                                           active:scale-90"
                                title="Delete todo"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.8}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default Todos
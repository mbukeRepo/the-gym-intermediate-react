import { useRef, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { title: "cleaning the house", done: false },
  ]);

  const todoRef = useRef<any>();

  const handleClick = (event: any) => {
    event.preventDefault();
    const title = todoRef.current.value;
    if (title === "") return;
    setTodoList((prev) => [...prev, { title, done: false }]);
    todoRef.current.value = "";
  };

  return (
    <div className="w-full min-h-screen text-gray-700 h-full grid place-content-center">
      <div>
        <h3 className="text-center mb-6 text-4xl font-bold text-gray-400">
          todos
        </h3>
        <form
          action=""
          className="flex rounded-3xl items-center shadow-md py-2 px-4 bg-gray-100"
          style={{ display: "flex" }}
          onSubmit={handleClick}
        >
          <input
            className="outline-none bg-gray-100 text-gray-700"
            ref={todoRef}
          />
          <div>
            <button
              type="submit"
              className="bg-blue-600 rounded-full w-6 h-6 font-bold text-white text-xl grid place-content-center"
            >
              +
            </button>
          </div>
        </form>
      </div>

      <ul className="mt-10 flex flex-col gap-3">
        {todoList.map(({ title, done }, index) => (
          <li
            className="flex justify-between items-center py-2 px-3 bg-gray-100"
            key={index}
          >
            {" "}
            <span className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={done}
                onClick={(e) => {
                  const newTodoList = [...todoList];
                  const eventTarget = e.target as HTMLInputElement;
                  newTodoList[index].done = eventTarget.checked;
                  setTodoList(newTodoList);
                  console.log(todoList);
                }}
              />
              <span className={done ? `line-through` : ""}>{title}</span>
            </span>
            <span
              onClick={() => {
                const newTodoList = [...todoList];
                newTodoList.splice(index, 1);
                setTodoList(newTodoList);
              }}
              className="p-1 rounded-full grid place-content-center hover:bg-gray-400 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

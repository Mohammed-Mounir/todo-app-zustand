import { KeyboardEvent, useState } from 'react';

import iconMoon from './assets/images/icon-moon.svg';
import iconSun from './assets/images/icon-sun.svg';
import List from './components/List';
import { useTodosStore } from './store';
import { useTheme } from './hooks';

function App() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodosStore();
  const { theme, handleThemeSwitch } = useTheme();

  function handleAddTodo(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && todo.trim() !== '') {
      addTodo(todo);
      setTodo('');
    }
  }

  return (
    <div className="h-screen">
      <main className="bg-gray-200 dark:bg-very-dark-blue h-full py-11 px-6 flex justify-center bg-[length:100%] bg-no-repeat bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] sm:bg-[url('./assets/images/bg-desktop-light.jpg')] sm:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
        <div className="flex flex-col gap-4 w-full max-w-md">
          <div className="flex justify-between items-center">
            <h1 className="mb-5 text-white text-3xl font-bold uppercase tracking-[0.5rem]">
              Todo
            </h1>
            <button onClick={() => handleThemeSwitch()} className="mb-auto">
              <img
                className="w-6 h-6"
                src={theme === 'dark' ? iconSun : iconMoon}
              />
            </button>
          </div>
          <div className="flex gap-4 items-center bg-white dark:bg-very-dark-desaturated-blue w-full rounded py-3 px-4">
            <div className="w-5 h-5 rounded-full border border-gray-200 dark:border-very-dark-grayish-blue-dark" />
            <input
              className="grow outline-none text-very-dark-grayish-blue dark:text-light-grayish-blue-dark placeholder:text-dark-grayish-blue-dark dark:bg-very-dark-desaturated-blue"
              autoFocus
              onChange={(e) => setTodo(e.target.value)}
              onKeyUp={handleAddTodo}
              value={todo}
              type="text"
              placeholder="Create a new todo..."
            />
          </div>
          <List />
        </div>
      </main>
    </div>
  );
}

export default App;

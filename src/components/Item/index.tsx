import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import iconCheck from '../../assets/images/icon-check.svg';
import iconCross from '../../assets/images/icon-cross.svg';
import { useTodosStore } from '../../store';
import { ITodo } from '../../types';

interface IItemProps {
  todo: ITodo;
}

export default function Item({ todo }: IItemProps) {
  const { toggleTodo, deleteTodo } = useTodosStore();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center bg-white dark:bg-very-dark-desaturated-blue w-full py-4 px-5 gap-3 border-b dark:border-very-dark-grayish-blue-dark2"
    >
      <button
        className={`flex items-center justify-center w-5 h-5 rounded-full  ${
          todo.completed
            ? 'bg-gradient-to-br from-check-bg-blue to-check-bg-purple'
            : 'border border-very-dark-grayish-blue-dark'
        }`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.completed && (
          <img
            className="w-[0.65rem] h-[0.65rem] rounded-full"
            src={iconCheck}
          />
        )}
      </button>
      <p
        className={`${
          todo.completed
            ? 'line-through text-light-grayish-blue dark:text-very-dark-grayish-blue-dark'
            : 'text-very-dark-grayish-blue dark:text-light-grayish-blue-dark'
        }`}
      >
        {todo.text}
      </p>
      <button className="ms-auto" onClick={() => deleteTodo(todo.id)}>
        <img className="w-3 h-3" src={iconCross} />
      </button>
    </div>
  );
}

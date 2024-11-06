import { useMemo, useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

import Item from '../Item';
import { useTodosStore } from '../../store';
import Filters from '../Filters';

export default function List() {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const { todos, clearCompletedTodos, setTodos } = useTodosStore();
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const filteredTodos = useMemo(
    () =>
      filter === 'all'
        ? todos
        : filter === 'active'
        ? todos.filter((todo) => !todo.completed)
        : todos.filter((todo) => todo.completed),
    [filter, todos]
  );
  const numOfItemsLeft = useMemo(
    () => [todos.reduce((acc, curr) => (!curr.completed ? ++acc : acc), 0)],
    [todos]
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = todos.findIndex((todo) => todo.id === active.id);
      const newIndex = todos.findIndex((todo) => todo.id === over.id);
      const updatedTodos = arrayMove(todos, oldIndex, newIndex);
      setTodos(updatedTodos);
    }
  }

  return (
    <>
      <div className="overflow-y-auto rounded rounded-b-none flex flex-col overflow-hidden">
        <DndContext
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis]}
          sensors={sensors}
        >
          <SortableContext items={todos}>
            {filteredTodos.map((todo) => (
              <Item key={todo.id} todo={todo} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
      {!!todos.length && (
        <>
          <div className="flex items-center justify-between text-xs text-dark-grayish-blue dark:text-dark-grayish-blue-dark bg-white dark:bg-very-dark-desaturated-blue rounded rounded-t-none w-full py-4 px-5 -mt-4">
            <p>{numOfItemsLeft} items left</p>
            <div className="hidden md:flex justify-center gap-4">
              <Filters filter={filter} onFilter={setFilter} />
            </div>
            <button onClick={() => clearCompletedTodos()}>
              Clear Completed
            </button>
          </div>
          <div className="flex md:hidden justify-center gap-4 text-dark-grayish-blue dark:text-dark-grayish-blue-dark bg-white dark:bg-very-dark-desaturated-blue w-full rounded py-3 px-4">
            <Filters filter={filter} onFilter={setFilter} />
          </div>
        </>
      )}
    </>
  );
}

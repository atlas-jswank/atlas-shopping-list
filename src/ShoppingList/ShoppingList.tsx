import { useState } from "react";
import { AddItemForm } from "./AddItemForm";
import ClearButton from "./ClearButton";
import { ShoppingListItem } from "./ShoppingListItem";

const DEFAULT = [
  { id: "1", name: "Item 1", completed: false },
  { id: "2", name: "Item 2", completed: true },
];

export function ShoppingList() {
  const [items, setItems] = useState(DEFAULT);

  const addItem = (payload: { name: string }) => {
    const newItems = [...items];
    newItems.push({
      id: Date.now().toString(),
      name: payload.name,
      completed: false,
    });
    setItems(newItems);
  };

  const toggleCompleted = (id: string) => {
    const newItems = [...items];
    newItems.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });
    setItems(newItems);
  };

  const clearCompleted = () => {
    const newItems = items.filter((item) => !item.completed);
    setItems(newItems);
  };

  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Shopping List</h1>
        <AddItemForm addItem={addItem} />
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <ShoppingListItem
            key={index}
            id={item.id}
            completed={item.completed}
            name={item.name}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
      <ClearButton clearCompleted={clearCompleted} />
    </div>
  );
}

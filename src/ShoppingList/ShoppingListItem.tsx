import { Checkbox } from "../components/ui/checkbox";

type ShoppingListItemProps = {
  id: string;
  completed: boolean;
  name: string;
  toggleCompleted: (id: string) => void;
};

export function ShoppingListItem({
  id,
  completed,
  name,
  toggleCompleted,
}: ShoppingListItemProps) {
  const toggleItemCompletion = () => {
    toggleCompleted(id);
  };
  return (
    <li
      className={`flex items-center bg-muted rounded-md px-3 py-2 ${
        completed ? "opacity-50" : ""
      }`}
    >
      <Checkbox
        checked={completed}
        onCheckedChange={() => toggleItemCompletion()}
        className="mr-2"
      />
      <span className={`flex-1 ${completed ? "line-through" : ""}`}>
        {name}
      </span>
    </li>
  );
}

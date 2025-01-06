import { Button } from "../components/ui/button";

export default function ClearButton({
  clearCompleted,
}: {
  clearCompleted: () => void;
}) {
  const clear = () => {
    clearCompleted();
  };

  return (
    <div className="mt-4 flex justify-end">
      <Button onClick={clear} variant="ghost" className="text-muted-foreground">
        Clear Completed
      </Button>
    </div>
  );
}

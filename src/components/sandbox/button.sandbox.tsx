import { Button } from "@/components/elements/button.tsx";

export const ButtonSandbox = () => {
  return (
    <div className="inline-flex gap-2">
      <Button onClick={() => console.debug("clicked")}>Click Me</Button>
      <Button disabled>Disabled Button</Button>
    </div>
  );
};

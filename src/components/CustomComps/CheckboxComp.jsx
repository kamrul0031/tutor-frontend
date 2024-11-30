import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxComp({todos , className}) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox/>
      <Label className={`peer-data-[state=checked]:line-through ${className}`}>
        {todos}
      </Label>
    </div>
  );
}

import { FC } from "react";

interface Prop extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onValueChange?: (_: string) => void;
  onCheckedChange?: (_: boolean) => void;
  icon?: any;
}

export const FormField: FC<Prop> = ({
  label,
  icon,
  onValueChange,
  onCheckedChange,
  ...props
}) => {
  if (props.type === "checkbox") {
    return (
      <label
        htmlFor={props.id}
        className="flex cursor-pointer items-start gap-2"
      >
        <div className="flex items-center">
          &#8203;
          <input
            {...props}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onCheckedChange?.(e.target.checked)
            }
            className={`size-4 rounded border-gray-300 ${props.className}`}
          />
        </div>

        <div className="text-md">{label}</div>
      </label>
    );
  }
  if (props.type === "textarea") {
    return (
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor={props.id ?? label}
          className="text-sm font-normal cursor-pointer"
        >
          {label}
        </label>

        <div className="flex relative">
          <textarea
            id={props.id ?? label}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              onValueChange?.(e.target.value)
            }
            cols={33}
            rows={7}
            className="h-56 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder={props.placeholder}
          />
          {icon && (
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              {icon}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={props.id ?? label}
        className="text-sm font-normal cursor-pointer"
      >
        {label}
      </label>

      <div className="flex relative">
        <input
          {...props}
          id={props.id ?? label}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onValueChange?.(e.target.value)
          }
          className={`w-full rounded-md border-gray-200 px-4 py-2 pe-12 text-sm shadow-sm border ${props.className}`}
          placeholder={props.placeholder}
          autoComplete="off"
        />
        {icon && (
          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

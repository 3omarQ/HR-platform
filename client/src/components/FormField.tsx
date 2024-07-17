import { FC } from "react";

interface Prop extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onValueChange: (_: string) => void;
  icon?: any;
}

export const FormField: FC<Prop> = ({
  label,
  icon,
  onValueChange,
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
            className={`size-4 rounded border-gray-300 ${props.className}`}
          />
        </div>

        <div className="text-md">{label}</div>
      </label>
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
            onValueChange(e.target.value)
          }
          className={`w-full rounded-sm border-gray-200 px-4 py-2 pe-12 text-sm shadow-sm border ${props.className}`}
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

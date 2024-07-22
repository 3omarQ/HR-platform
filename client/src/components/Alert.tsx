import { FC } from "react";

interface Prop {
  type?: "error";
  title: string;
  description?: string;
}
export const Alert: FC<Prop> = ({ title, description, type }) => {
  const borderColor = type === "error" ? "border-red-500" : "border-green-500";
  const backgroundColor = type === "error" ? "bg-red-50" : "bg-green-50";
  const titleColor = type === "error" ? "text-red-800" : "text-green-800";
  const descriptionColor = type === "error" ? "text-red-700" : "text-green-700";
  return (
    <div
      role="alert"
      className={`rounded border-s-4 ${borderColor} ${backgroundColor} p-2`}
    >
      <div className={`flex items-center gap-2 ${titleColor}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clip-rule="evenodd"
          />
        </svg>

        <div className="block font-normal"> {title} </div>
      </div>

      {description && (
        <p className={`mt-1 font-thin text-sm ${descriptionColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};

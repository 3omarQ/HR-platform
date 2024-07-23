import { FC, ReactNode } from "react";

interface Prop extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  head?: string;
  body?: string;
  children?: ReactNode;
}

export const Card: FC<Prop> = ({ head, body, children, ...props }) => {
  return (
    <div
      className={`block px-5 py-4 bg-white border border-gray-200 rounded-md shadow ${props.className}`}
    >
      {head && (
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {head}
        </h5>
      )}
      {body && <p className="font-normal text-gray-700">{body}</p>}
      {children}
    </div>
  );
};

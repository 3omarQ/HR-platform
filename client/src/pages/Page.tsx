import { FC } from "react";

type Prop = {
  title: string;
  children?: React.ReactNode;
};
export const Page: FC<Prop> = ({ title, children }) => {
  return (
    <div className="px-6 py-6 flex flex-col gap-5 h-full w-full bg-slate-100">
      <div className="text-2xl font-bold capitalize">{title}</div>
      {children}
    </div>
  );
};

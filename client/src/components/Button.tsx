import { FC } from "react"
import { FaSpinner } from "react-icons/fa6";

interface Prop extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gradient" | "outline"
  loading?: boolean;
}

export const Button: FC<Prop> = ({ variant, loading, ...props }) => {
  const gradient = "bg-gradient-to-br from-[#4f16e0] via-[#8712b0] to-[#8f11a8] text-white hover:animate-pulse hover:bg-gradient-to-r"
  const outline = "border"
  const normal = "hover:shadow"

  const background = variant === "gradient" ? gradient : variant === "outline" ? outline : normal;
  const className = `${background} ${loading ? "animate-pulse" : ""}`

  return <button {...props} className={`transition-all duration-500 py-1 h-8 rounded-md font-medium uppercase border-collapse text-center ${className} ${props.className}`} type="submit" disabled={loading}>
    {
      loading
        ? <div className="flex justify-center"><FaSpinner className="animate-spin" /></div>
        : props.children
    }
  </button>
}
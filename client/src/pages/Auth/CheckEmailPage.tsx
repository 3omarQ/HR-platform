import { Button } from "../../components";

import { logo } from '../../assets'

import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function CheckEmailPage() {
  const navigate = useNavigate()
  return (
    <div className="w-svw h-svh mx-auto bg-zinc-50">
      <div className="h-full flex flex-col justify-center items-center gap-4">
        <div className="max-w-96 w-full flex flex-col gap-8">
          <img src={logo} alt="OK Studios" className="mx-auto max-w-56 w-full" />
          <form className="bg-transparent sm:bg-white sm:border rounded p-4 flex flex-col gap-4">
            <p className="text-gray-600 pb-4">Please enter your email address. You will receive a link to reset and update a new password via email.</p>
          </form>

          <Button onClick={() => navigate("/")} className="w-full">
            <div className="flex items-center justify-center gap-2 align-baseline"><FaArrowLeft /> <div>back to login</div></div>
          </Button>
        </div>
      </div>
    </div>
  );
}

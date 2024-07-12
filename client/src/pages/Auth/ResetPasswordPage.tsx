import { Button, FormField } from "../../components";
import { Alert } from "../../components/Alert";

import React, { useState } from "react";
import { FaArrowLeft, FaAt } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function ResetPasswordPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)

    setError("");
    await new Promise(res => setTimeout(res, 1500))
    navigate("/validate")
  };

  return (
    <div className="w-svw h-svh mx-auto bg-zinc-50">
      <div className="h-full flex flex-col justify-center items-center gap-4">
        <div className="max-w-96 w-full flex flex-col gap-8">
          <img src={"/logo.svg"} alt="OK Studios" className="mx-auto max-w-56 w-full" />
          <form className="bg-transparent sm:bg-white sm:border rounded p-4 flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
            <p className="text-gray-600 pb-4">Please enter your email address. You will receive a link to reset and update a new password via email.</p>
            <FormField label="Email" type="email" placeholder="Enter your email" icon={<FaAt color="gray" />} onValueChange={setEmail} disabled={loading} required />
            {error && <Alert title={error} description={error} type="error"></Alert>}
            <Button className="button" type="submit" variant="gradient" loading={loading}>
              reset password
            </Button>
          </form>

          <Button onClick={() => navigate("/")} className="w-full">
            <div className="flex items-center justify-center gap-2 align-baseline"><FaArrowLeft /> <div>back to login</div></div>
          </Button>
        </div>
      </div>
    </div>
  );
}

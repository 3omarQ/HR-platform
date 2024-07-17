import { Button, FormField } from "../../components";
import { Alert } from "../../components/Alert";
import { signIn } from "../../services/auth";

import { logo } from '../../assets'

import React, { useState } from "react";
import { FaAt, FaLock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true)

    await signIn(email, password)
    setLoading(false)

    window.location.reload()
  };

  return (
    <div className="w-svw h-svh mx-auto bg-zinc-50">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="max-w-96 w-full flex flex-col gap-8">
          <img src={logo} alt="OK Studios" className="mx-auto max-w-56 w-full" />
          <form className="bg-transparent sm:bg-white sm:border rounded p-4 flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
            <FormField label="Email" type="email" placeholder="Enter your email" icon={<FaAt color="gray" />} onValueChange={setEmail} disabled={loading} required />
            <FormField label="Password" type="password" placeholder="Enter your password" icon={<FaLock color="gray" />} onValueChange={setPassword} disabled={loading} required />
            <FormField label="Remember me" type="checkbox" onValueChange={setPassword} />
            {error && <Alert title={error} description={error} type="error"></Alert>}
            <Button className="button" type="submit" variant="gradient" loading={loading}>
              sign in
            </Button>
          </form>

          <Button onClick={() => navigate("/reset")} className="w-full">
            Forgot password?
          </Button>
        </div>
      </div>
    </div>
  );
}

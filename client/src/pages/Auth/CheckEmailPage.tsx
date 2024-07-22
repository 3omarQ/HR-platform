import { Button, FormField } from "../../components";

import { logo } from "../../assets";

import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRecovery } from "./RecoveryContext";
import { Alert } from "../../components/Alert";

export default function CheckEmailPage() {
  const navigate = useNavigate();
  const { OTP, setOTP } = useRecovery();
  const [inputOTP, setInputOTP] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputOTP === OTP) {
      navigate("/changepassword");
    } else {
      setError("Recovery code mismatch");
    }
  };
  return (
    <div className="w-svw h-svh mx-auto bg-zinc-50">
      <div className="h-full flex flex-col justify-center items-center gap-4">
        <div className="max-w-96 w-full flex flex-col gap-8">
          <img
            src={logo}
            alt="OK Studios"
            className="mx-auto max-w-56 w-full"
          />
          <form
            className="bg-transparent sm:bg-white sm:border rounded p-4 flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <p className="text-gray-600 pb-4">
              Enter the code sent to your email
            </p>
            <FormField
              label="Verification code"
              onValueChange={setInputOTP}
            ></FormField>
            {error && (
              <Alert title={error} description={error} type="error"></Alert>
            )}
            <Button type="submit" className="w-full" variant="gradient">
              <div className="flex items-center justify-center gap-2 align-baseline">
                <div>Change password</div>
              </div>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

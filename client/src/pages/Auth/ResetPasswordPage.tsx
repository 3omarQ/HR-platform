import { Button, FormField } from "../../components";
import { Alert } from "../../components/Alert";

import { logo } from "../../assets";

import React, { useState } from "react";
import { FaArrowLeft, FaAt } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { sendOTP, signIn } from "../../services/auth";
import { useRecovery } from "../../contexts/RecoveryContext";

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const { recoveryEmail, setRecoveryEmail } = useRecovery();
  const { OTP, setOTP } = useRecovery();

  const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    const OTP = generateOTP();
    setOTP(OTP);
    await sendOTP(recoveryEmail, OTP)
      .then(() => {
        setLoading(false);
        navigate("/validate");
      })
      .catch((error) => {
        setError(error.response?.data?.error || error.message);
        setLoading(false);
      });
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
            autoComplete="off"
          >
            <p className="text-gray-600 pb-4">
              Please enter your email address. You will receive a verification
              code to reset and update a new password.
            </p>
            <FormField
              label="Email"
              type="email"
              placeholder="Enter your email"
              icon={<FaAt color="gray" />}
              onValueChange={setRecoveryEmail}
              disabled={loading}
              required
            />
            {error && (
              <Alert title={error} description={error} type="error"></Alert>
            )}
            <Button
              className="button"
              type="submit"
              variant="gradient"
              loading={loading}
            >
              Send verification code
            </Button>
          </form>

          <Button onClick={() => navigate("/")} className="w-full">
            <div className="flex items-center justify-center gap-2 align-baseline">
              <FaArrowLeft /> <div>back to login</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

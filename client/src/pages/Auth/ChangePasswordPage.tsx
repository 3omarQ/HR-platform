import React, { useState } from "react";
import { Button, FormField } from "../../components";
import { logo } from "../../assets";
import { FaAt, FaLock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components/Alert";
import { useRecovery } from "../../contexts/RecoveryContext";
import { resetPassword } from "../../services/auth";

function ChangePasswordPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const { recoveryEmail, setRecoveryEmail } = useRecovery();
  const [passwordConfirmed, setPasswordConfirmed] = useState<string>("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (passwordConfirmed == password) {
      await resetPassword(recoveryEmail, password).then(() => {
        setSuccess("Password changed successfully, returning to login page..");
        setError("");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      });
    } else {
      setError("Passwords mismatch");
    }
  };

  return (
    <div>
      <div className="w-svw h-svh mx-auto bg-zinc-50">
        <div className="h-full flex flex-col justify-center items-center">
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
              <FormField
                label="New Password"
                type="password"
                placeholder="Your new password"
                icon={<FaAt color="gray" />}
                onValueChange={setPassword}
                disabled={loading}
                required
              />
              <FormField
                label="Confirm Password"
                type="password"
                placeholder="Confirm your new password"
                icon={<FaLock color="gray" />}
                onValueChange={setPasswordConfirmed}
                disabled={loading}
                required
              />

              {error && (
                <Alert title={error} description={error} type="error"></Alert>
              )}
              {success && <Alert title={success} description={success}></Alert>}
              <Button
                className="button"
                type="submit"
                variant="gradient"
                loading={loading}
              >
                Change password
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordPage;

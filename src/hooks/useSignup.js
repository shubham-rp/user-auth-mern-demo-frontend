import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [signupSuccessful, setSignupSuccessful] = useState(false);
  // const { dispatch } = useAuthContext();

  const signup = async (email, name, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_API_URL}/api/user/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setSignupSuccessful(false);
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setSignupSuccessful(true);
      //localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      //dispatch({ type: "LOGIN", payload: json });
      // update loading state
      setIsLoading(false);
    }
  };

  return { signup, signupSuccessful, isLoading, error };
};

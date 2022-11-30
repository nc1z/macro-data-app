import { beforeEach, describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Signup from "../../routes/Signup";
import { AuthContextProvider } from "../../context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import authMock from "../mockAuth";

describe("Signup", () => {
  // Mock States & Functions
  let emailState = "email";
  let passwordState = "password";

  const setEmail = vi.fn((email) => {
    emailState = email;
    return emailState;
  });
  const setPassword = vi.fn((password) => {
    passwordState = password;
    return passwordState;
  });

  const firebaseAuth = authMock;
  const handleSignUp = vi.fn((e) => {
    e.preventDefault();

    return firebaseAuth().createUserAndRetrieveDataWithEmailAndPassword(
      emailState,
      passwordState
    );
  });

  // TESTS
  beforeEach(() => {
    handleSignUp.mockClear();
    setEmail.mockClear();
    setPassword.mockClear();
  });
  render(
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Signup
                setEmail={setEmail}
                setPassword={setPassword}
                handleSubmit={handleSignUp}
              />
            }
          />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );

  it("setState triggers when input field onChange", async () => {
    expect(getEmail()).toHaveProperty("id", "email");
    expect(getPassword()).toHaveProperty("id", "password");

    await userEvent.type(getEmail(), "jim@test.com");
    await userEvent.type(getPassword(), "testing");
    await waitFor(() => {
      expect(setEmail).toHaveBeenCalledWith("jim@test.com");
      expect(setPassword).toHaveBeenCalledWith("testing");
    });
    // Input fields still contain input text
    expect(getEmail()).toHaveProperty("value", "jim@test.com");
    expect(getPassword()).toHaveProperty("value", "testing");
    // Mock State Updated
    expect(setEmail).toHaveReturnedWith("jim@test.com");
    expect(setPassword).toHaveReturnedWith("testing");
  });

  it("handleSignUp is called on Sign Up Button Clicked", async () => {
    userEvent.click(getLoginButton());

    await waitFor(() => {
      expect(
        firebaseAuth().createUserAndRetrieveDataWithEmailAndPassword
      ).toHaveBeenCalledWith("jim@test.com", "testing");
      expect(handleSignUp).toHaveBeenCalledTimes(1);
    });
    expect(handleSignUp).toHaveReturned();
  });
});

// Functions ------------------->

const getEmail = () =>
  screen.getByRole("textbox", {
    name: /email address/i,
  });
const getPassword = () => screen.getByLabelText(/password \*/i);

const getLoginButton = () =>
  screen.getByRole("button", {
    name: /sign up/i,
  });

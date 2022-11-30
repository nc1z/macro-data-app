import { beforeEach, describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../../routes/Login";
import { AuthContextProvider } from "../../context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import authMock from "../mockAuth";
import { act } from "react-dom/test-utils";

describe("Login", () => {
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
  const handleLogin = vi.fn((e) => {
    e.preventDefault();

    return firebaseAuth().signInAndRetrieveDataWithEmailAndPassword(
      emailState,
      passwordState
    );
  });

  // TESTS
  beforeEach(() => {
    handleLogin.mockClear();
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
              <Login
                setEmail={setEmail}
                setPassword={setPassword}
                handleSubmit={handleLogin}
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

    await userEvent.type(getEmail(), "test@test.com");
    await userEvent.type(getPassword(), "testing");

    await waitFor(() => {
      expect(setEmail).toHaveBeenCalledWith("test@test.com");
      expect(setPassword).toHaveBeenCalledWith("testing");
    });
    // Input fields still contain input text
    expect(getEmail()).toHaveProperty("value", "test@test.com");
    expect(getPassword()).toHaveProperty("value", "testing");
    // Mock State Updated
    expect(setEmail).toHaveReturnedWith("test@test.com");
    expect(setPassword).toHaveReturnedWith("testing");
  });

  it("handleLogin is called on Sign In Button Clicked", async () => {
    userEvent.click(getLoginButton());

    await waitFor(() => {
      expect(
        firebaseAuth().signInAndRetrieveDataWithEmailAndPassword
      ).toHaveBeenCalledWith("test@test.com", "testing");
      expect(handleLogin).toHaveBeenCalledTimes(1);
    });
    expect(handleLogin).toHaveReturned();
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
    name: /sign in/i,
  });

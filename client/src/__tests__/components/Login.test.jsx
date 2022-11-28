import { beforeEach, describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../../routes/Login";

describe(Login, () => {
  const onSubmit = vi.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    render(<Login onSubmit={onSubmit} />);
  });

  it("onSubmit is called when all fields pass validation", async () => {
    userEvent.type(getEmail(), "test@test.com");
    userEvent.type(getPassword(), "testing");
    userEvent.click(getLoginButton());

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    expect(onSubmit).toHaveBeenCalledWith({ lazy: true });
  });
});

// Functions ------------------->

const getEmail = () =>
  screen.getByRole("textbox", {
    name: /email address/i,
  });
const getPassword = () => container.querySelector("#password");

const getLoginButton = () =>
  screen.getByRole("button", {
    name: /sign in/i,
  });

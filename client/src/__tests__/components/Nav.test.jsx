import { beforeEach, describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "../../components/Nav";
import { AuthContextProvider } from "../../context/AuthContext";
import { BrowserRouter } from "react-router-dom";

describe("navbar", () => {
  let searchState = "searchText";

  const setSearch = vi.fn((text) => {
    searchState = text;
    return searchState;
  });

  beforeEach(() => {
    setSearch.mockClear();
  });

  render(
    <BrowserRouter>
      <AuthContextProvider>
        <Nav setSearch={setSearch} />
      </AuthContextProvider>
    </BrowserRouter>
  );

  it("Logout button exists", () => {
    expect(getLogoutButton()).not.toBeNull();
  });

  it("Account button exists", () => {
    expect(getAccountButton()).not.toBeNull();
  });

  it("Logo button exists", () => {
    expect(getLogo()).not.toBeNull();
  });

  it("setSearch triggers when input field onChange", async () => {
    expect(getSearchField()).toHaveProperty("type", "text");

    await userEvent.type(getSearchField(), "CPI");
    await userEvent.keyboard("[Enter]");

    await waitFor(() => {
      expect(setSearch).toHaveBeenCalledWith("CPI");
    });
    // Input fields still contain input text
    expect(getSearchField()).toHaveProperty("value", "CPI");
    // Mock State Updated
    expect(setSearch).toHaveReturnedWith("CPI");
  });
});

// Functions to get elements --------->

const getLogoutButton = () => screen.getByTestId("LogoutIcon");
const getAccountButton = () => screen.getByTestId("AccountCircleIcon");
const getLogo = () =>
  screen.getByRole("link", {
    name: /macrodata/i,
  });

const getSearchField = () =>
  screen.getByRole("textbox", {
    name: /search/i,
  });

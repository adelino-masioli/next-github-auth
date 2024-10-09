// Header.test.tsx
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import React from "react";
import Header from "./Header";

// Mock  useSession
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
  signOut: jest.fn(),
}));

// Mock  next/link
jest.mock("next/link", () => {
  const MockedLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => {
    return <a href={href}>{children}</a>;
  };
  MockedLink.displayName = "MockedLink";
  return MockedLink;
});

describe("Header", () => {
  it("renders the logo link", () => {
    (useSession as jest.Mock).mockReturnValue({ data: null });
    render(<Header />);
    const logoLink = screen.getByRole("link", { name: /my portfolio/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("renders the Projects link", () => {
    (useSession as jest.Mock).mockReturnValue({ data: null });
    render(<Header />);
    const projectsLink = screen.getByRole("link", { name: /projects/i });
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toHaveAttribute("href", "/projects");
  });

  it("renders Login button when not authenticated", () => {
    (useSession as jest.Mock).mockReturnValue({ data: null });
    render(<Header />);
    const loginButton = screen.getByRole("link", { name: /login/i });
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveAttribute("href", "/login");
  });

  it("renders Dashboard link and Logout button when authenticated", () => {
    (useSession as jest.Mock).mockReturnValue({ data: { user: {} } });
    render(<Header />);
    const dashboardLink = screen.getByRole("link", { name: /dashboard/i });
    expect(dashboardLink).toBeInTheDocument();
    expect(dashboardLink).toHaveAttribute("href", "/dashboard");

    const logoutButton = screen.getByRole("button", { name: /logout/i });
    expect(logoutButton).toBeInTheDocument();
  });
});

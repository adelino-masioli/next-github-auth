// Footer.test.tsx
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from "./Footer";

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

describe("Footer", () => {
  it("renders the copyright notice with the current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText((content) =>
      content.includes(`© ${currentYear} My Portfolio`)
    );
    expect(copyrightText).toBeInTheDocument();
  });

  it('renders the "About me" link', () => {
    render(<Footer />);
    const aboutLink = screen.getByRole("link", { name: /about me/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/about");
  });

  it('renders the "Contact" link', () => {
    render(<Footer />);
    const contactLink = screen.getByRole("link", { name: /contact/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contact");
  });

  it("applies the correct CSS classes", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toHaveClass("bg-gray-800", "text-white", "py-4");
  });
});

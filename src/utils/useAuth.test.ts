// useAuth.test.ts
import { renderHook } from "@testing-library/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAuth } from "./useAuth";

// Mocks
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("useAuth", () => {
  let mockPush: jest.Mock;

  beforeEach(() => {
    mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it("should not redirect when status is loading", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "loading",
    });

    renderHook(() => useAuth());

    expect(mockPush).not.toHaveBeenCalled();
  });

  it("should redirect to login when there is no session", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    renderHook(() => useAuth());

    expect(mockPush).toHaveBeenCalledWith("/login");
  });

  it("should not redirect when there is a valid session", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: {} },
      status: "authenticated",
    });

    renderHook(() => useAuth());

    expect(mockPush).not.toHaveBeenCalled();
  });

  it("should return session and status", () => {
    const mockSession = { user: { name: "Test User" } };
    (useSession as jest.Mock).mockReturnValue({
      data: mockSession,
      status: "authenticated",
    });

    const { result } = renderHook(() => useAuth());

    expect(result.current.session).toEqual(mockSession);
    expect(result.current.status).toBe("authenticated");
  });
});

"use client";

import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useAuth } from "@/utils/useAuth";

export default function DashboardClient() {
  const { session, status } = useAuth();

  if (status === "loading") {
    return <LoadingSpinner size="large" message="Loading dashboard..." />;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <p>Welcome, {session.user?.name ?? "Usuário"}!</p>
      <p>Your user ID is: {session.user?.id}</p>
      {session.accessToken && <p>You have a valid access token.</p>}
    </div>
  );
}

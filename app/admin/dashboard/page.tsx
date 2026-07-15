"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.replace("/admin/login");
        return;
      }

      setLoading(false);
    };

    checkSession();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-600 px-6 py-3 text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Link
            href="/admin/projects"
            className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold">📋 Manage Projects</h2>
            <p className="mt-3 text-gray-600">
              View, edit and delete projects.
            </p>
          </Link>

          <Link
            href="/admin/projects/add"
            className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold">➕ Add New Project</h2>
            <p className="mt-3 text-gray-600">
              Create a new real estate project.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
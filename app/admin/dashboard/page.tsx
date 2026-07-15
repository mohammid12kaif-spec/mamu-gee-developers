"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    async function checkSession() {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.replace("/admin/login");
      }
    }

    checkSession();
  }, [router]);

  async function handleLogout() {
    const confirmLogout = confirm("Are you sure you want to logout?");

    if (!confirmLogout) return;

    await supabase.auth.signOut();

    router.replace("/admin/login");
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <Link
            href="/admin/projects"
            className="rounded-xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 text-5xl">🏗️</div>

            <h2 className="text-2xl font-bold">
              Manage Projects
            </h2>

            <p className="mt-3 text-gray-600">
              Add, edit, delete projects and manage project galleries.
            </p>
          </Link>

          <Link
            href="/admin/inquiries"
            className="rounded-xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 text-5xl">📩</div>

            <h2 className="text-2xl font-bold">
              Customer Inquiries
            </h2>

            <p className="mt-3 text-gray-600">
              View all customer inquiries received from the website.
            </p>
          </Link>

          <div className="rounded-xl bg-white p-8 shadow-lg">
            <div className="mb-4 text-5xl">🏢</div>

            <h2 className="text-2xl font-bold">
              Welcome
            </h2>

            <p className="mt-3 text-gray-600">
              Mamu Gee Developers Admin Panel
            </p>

            <div className="mt-6 rounded-lg bg-yellow-100 p-4 text-sm text-yellow-900">
              You are successfully logged in as Administrator.
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
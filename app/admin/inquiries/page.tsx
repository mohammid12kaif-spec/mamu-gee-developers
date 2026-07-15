"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Inquiry = {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  project: string | null;
  message: string;
  created_at: string;
};

export default function InquiriesPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    async function load() {
      const { data: session } = await supabase.auth.getSession();

      if (!session.session) {
        router.replace("/admin/login");
        return;
      }

      const { data, error } = await supabase
        .from("inquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        alert(error.message);
        return;
      }

      setInquiries(data || []);
      setLoading(false);
    }

    load();
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold">Customer Inquiries</h1>

        <div className="overflow-x-auto rounded-xl bg-white shadow">
          <table className="w-full">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Project</th>
                <th className="p-4 text-left">Message</th>
              </tr>
            </thead>

            <tbody>
              {inquiries.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.phone}</td>
                  <td className="p-4">{item.email || "-"}</td>
                  <td className="p-4">{item.project || "-"}</td>
                  <td className="p-4">{item.message}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {inquiries.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No inquiries yet.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
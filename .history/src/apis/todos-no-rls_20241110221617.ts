"use client";

import { createSupabaseBrowserClient } from "@/lib/client/supabase";

export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();
};

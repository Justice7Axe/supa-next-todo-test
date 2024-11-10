"use client";

import { createSupabaseBrowserClient } from "@/lib/client/supabase";

// todo list 가져오기

export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();
};

import { Database } from "./../types/supabase";
("use client");

import { createSupabaseBrowserClient } from "@/lib/client/supabase";

// todolist 가져오기

export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();
  supabase.from("todos_no_rls").select("*").is("deleted_at", null);
  return result.Database;
};

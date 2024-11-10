"use client";

export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase.from("todos").select("*");
  if (error) throw error;
  return data;
};

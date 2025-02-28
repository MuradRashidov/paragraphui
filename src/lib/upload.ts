import { createClient } from "@supabase/supabase-js";

export async function uploadThumbnail(image: File) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY!;
  console.log({apiKey:supabaseKey,apiUrl:supabaseUrl});
  
  const supabase = createClient(supabaseUrl, supabaseKey);
  const res = await supabase.storage
    .from("thumbnails")
    .upload(`${image.name}_${Date.now()}`, image);
  if (!res.data?.path) throw new Error("Failed to upload image");
  const urlData = await supabase.storage
    .from("thumbnails")
    .getPublicUrl(res.data?.path);
    console.log({urlData});
    
  return urlData.data.publicUrl;
}

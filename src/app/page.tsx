import Hero from "@/components/Hero";
import Posts from "@/components/Posts";
import { fetchPosts } from "@/lib/actions/postAction";
import { API_URL, DEFAULT_PAGE_SIZE } from "@/lib/constants";
import { getSession } from "@/lib/session";
import { Post } from "@/lib/types/modelTypes";
import Image from "next/image";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export default async function Home({ searchParams }: Props) {
  setTimeout(async() => {
   await fetch(API_URL)
  }, 180000);
  const { page } = await searchParams;
  let postss :Post[]= [];
  let totalPostss = 0;
  try {
    const { posts, totalPosts } = await fetchPosts({ page: page ? +page : undefined });
    postss = posts;
    totalPostss = totalPosts;

  } catch (error) {
    console.log(error);
    
  }
  //const session = await getSession();
  //console.log(session);

  return (
    <div className="bg-gradient-to-br text-white">
      <Hero />
      {
        !!postss ? (
          <Posts posts={postss || []} currentPage={page ? +page : 1}
        totalPages={Math.ceil(totalPostss / DEFAULT_PAGE_SIZE)} />
        ):(
          <div className="flex justify-center items-center h-12">
            <p className="font-semibold text-2xl">
              Render.com free plan issue
            </p>
            <p className="font-light text-xl">
              Your free instance will spin down with inactivity, which can delay requests by 50 seconds or more.
            </p>
          </div>
        )

      }
      
    </div>
  );
}

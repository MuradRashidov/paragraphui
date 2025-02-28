import Hero from "@/components/Hero";
import Posts from "@/components/Posts";
import { fetchPosts } from "@/lib/actions/postAction";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants";
import { getSession } from "@/lib/session";
import Image from "next/image";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;
  const { posts, totalPosts } = await fetchPosts({ page: page ? +page : undefined });
  //const session = await getSession();
  //console.log(session);

  return (
    <div className="bg-gradient-to-br text-white">
      <Hero />
      <Posts posts={posts || []} currentPage={page ? +page : 1}
        totalPages={Math.ceil(totalPosts / DEFAULT_PAGE_SIZE)} />
    </div>
  );
}

import { fetchPostById } from '@/lib/actions/postAction';
import { NextPage } from 'next'; // Next.js'in kendi türünü kullan
import React from 'react';
import SanitizeComponent from './_components/SanitizeComponent';
import Comments from './_components/Comments';
import { getSession } from '@/lib/session';
import Like from './_components/Like';

type Props = {
  params: Promise<{ id: string }>
}

const Page = async ({params}:Props) => {
  const {id} = await params;
  const { post } = await fetchPostById(Number(id));
  const session = await getSession();

  return (
    <main className="md:mt-24 mt-4">
      <div className="container max-w-[70%] mx-auto">
        <h2 className="font-semibold text-2xl tracking-tight text-center">{post.title}</h2>
        <div className="flex flex-col md:flex-row w-full h-[70vh] mt-5">
          <div className="w-full md:w-[60%] h-full flex flex-col justify-center p-5">
            <div className="flex justify-between items-center">
              <div className="flex flex-col bg-gray-200 shadow-md rounded-md p-2">
                <p className="text-lg font-bold">Published By: </p>
                <p className="text-sm font-semibold">{post.author.name}</p>
              </div>
              <span>
                <img className="w-50 h-10 rounded-full" src={post.author.avatar ?? ""} alt="author" />
              </span>
            </div>
            <SanitizeComponent content={post.content} />
            <span className="text-xs flex-grow items-end font-light flex w-full justify-end px-2">
              {new Date(post.createdAt).toLocaleString()}
            </span>
          </div>
          <div className="mb-48 w-full h-full md:w-[40%] flex group justify-end relative">
            <div className="font-bold items-center text-orange-700 text-3xl justify-center absolute top-0 left-0 z-30 w-full h-full hidden group-hover:flex bg-black cursor-pointer opacity-50 transition-all duration-200">
              Post Image
            </div>
            <img className="w-[100%] h-full object-cover" src={post.thumbnail || ""} alt="post" />
          </div>
        </div>
      </div>
      <div className="mt-96 md:mt-0">
      <Like postId={post.id} user={session?.user}/>
      <Comments postId={post.id} user={session?.user} />
      </div>
    </main>
  );
};

export default Page;

import { fetchUserPosts } from '@/lib/actions/postAction';
import { DEFAULT_PAGE_SIZE } from '@/lib/constants';
import React from 'react'
import NoPost from './_components/NoPost';
import PostList from './_components/PostList';
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
const UserPostPage = async ({ searchParams }: Props) => {
  const { page } = await searchParams;
  const { posts, totalPosts } = await fetchUserPosts({
    page: page ? +page : 1,
    pageSize: DEFAULT_PAGE_SIZE
  })
  return (
    <div className="mt-4 w-full md:mt-24">
      {(!posts || !posts.length) ? <NoPost /> : <PostList posts={posts} totalPages={DEFAULT_PAGE_SIZE / totalPosts} currentPage={page ? +page : 1} />}
    </div>
  )
}

export default UserPostPage
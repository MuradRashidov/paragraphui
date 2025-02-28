"use server"
import { print } from "graphql";

import { authFetchGraphql } from "../fetchGraphql";
import { POST_LIKES } from "../gqlQueries";
import { LIKE_POST_MUTATION, UNLIKE_POST_MUTATION } from "../gqlMutations";

export const getPostLikeData = async (postId: number) => {
  let data;
  try {
     data = await authFetchGraphql(print(POST_LIKES), {
      postId,
    });
    //console.log("Successs");
    
  } catch (error) {
    //console.log("Error:::",error);
    
  }

  return {
    likeCount: data.getPostLikesCount,
    userLikedPost: data.userLikedPost,
  };
};

export const likePost = async (postId:number) => {
    const data = await authFetchGraphql(print(LIKE_POST_MUTATION),{postId});
    //return data.likePost
}
export const unlikePost = async (postId:number) => {
  const data = await authFetchGraphql(print(UNLIKE_POST_MUTATION),{postId});
  //return data.unlikePost
}



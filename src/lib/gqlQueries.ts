import gql from "graphql-tag";
export const GET_POSTS = gql`
  query posts($skip: Float, $take: Float) {
    posts(skip: $skip, take: $take) {
      id
      title
      content
      thumbnail
      createdAt
      slug
    }
    postCount
  }
`;

export const GET_POST_BY_ID = gql`
  query getPostById($id: Int!) {
    getPostById(id: $id) {
      id
      title
      content
      thumbnail
      createdAt
      slug
      author {
        name
        avatar
      }
      tags{
      id
      name
    }
    }
  }
`;

export const POST_LIKES = gql`
  query postLikeData($postId:Int!){
     getPostLikesCount(postId:$postId)
     userLikedPost(postId:$postId)
}
`
export const GET_USER_POSTS = gql`
  query GetUserPosts($skip: Int, $take: Int) {
    getUserPosts(skip: $skip, take: $take) {
      id
      title
      slug
      thumbnail
      published
      createdAt
      content
      _count {
        likes
        comments
      }
    }
    userPostCount
  }
`;
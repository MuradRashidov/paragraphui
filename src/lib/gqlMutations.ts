import gql from "graphql-tag";

export const CREATE_USER_MUTATION = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(createUserInput: $input) {
      id
      name
      email
    }
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation signIn($signInInput: SignInInput!) {
    signIn(signInInput: $signInInput) {
      id
      name
      avatar
      token
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query getPostComments($postId: Int!, $skip: Int, $take: Int) {
    getPostComments(postId: $postId, skip: $skip, take: $take) {
      id

      content

      author {
        name
        avatar
      }
      createdAt
    }
    getCommentCount(postId: $postId)
  }
`;

export const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      id
      content
      createdAt
    }
  }
`;

export const LIKE_POST_MUTATION = gql`
  mutation likePost($postId: Int!) {
    likePost(postId: $postId)
  }
`;
export const UNLIKE_POST_MUTATION = gql`
  mutation unlikePost($postId: Int!) {
    unlikePost(postId: $postId)
  }
`;
export const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(createPostInput: $input) {
      id
    }
  }
`;

export const UPDATE_POST_MUTATION = gql`
  mutation updatePostMutation($updatePostInput: UpdatePostInput!) {
    updatePost(updatePostInput: $updatePostInput) {
      id
    }
  }
`;

export const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: Int!) {
    deletePost(postId: $postId)
  }
`;

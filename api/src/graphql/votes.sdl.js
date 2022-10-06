export const schema = gql`
  type Vote {
    id: Int!
    upvote: Boolean!
    downvote: Boolean!
    totalUpVotes: Int!
    totalDownVotes: Int!
    superVotes: Int!
    totalVotes: Int!
    responseVote: Response!
    userTotal: User!
    responseId: Int!
    postId: Int!
    userId: Int!
    Post: Post!
  }

  type Query {
    votes: [Vote!]! @requireAuth
    vote(id: Int!): Vote @requireAuth
  }

  input CreateVoteInput {
    upvote: Boolean!
    downvote: Boolean!
    totalUpVotes: Int!
    totalDownVotes: Int!
    superVotes: Int!
    totalVotes: Int!
    responseId: Int!
    postId: Int!
    userId: Int!
  }

  input UpdateVoteInput {
    upvote: Boolean
    downvote: Boolean
    totalUpVotes: Int
    totalDownVotes: Int
    superVotes: Int
    totalVotes: Int
    responseId: Int
    postId: Int
    userId: Int
  }

  type Mutation {
    createVote(input: CreateVoteInput!): Vote! @requireAuth
    updateVote(id: Int!, input: UpdateVoteInput!): Vote! @requireAuth
    deleteVote(id: Int!): Vote! @requireAuth
  }
`

export const typeDefs = `#graphql
    type Game {
        id: ID!,
        name: String!,
        description: String,
        platforms: [String!]!,
        reviews: [Review!],
    }
    type Review {
        id: ID!,
        gameId: ID!,
        authorId: ID!,
        text: String!,
        rating: Int!,
        game: Game!,
        author: Author!,
    }
    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!,
        reviews: [Review!]
    }
    type Query {
        games: [Game],
        game(id: ID!): Game,
        reviews: [Review],
        review(id: ID!): Review,
        authors: [Author],
        author(id: ID!): Author,
    }
    type Mutation {
        addGame(game: AddGameInput): Game,
        addReview(gameId: ID!, authorId: ID!, text: String!, rating: Int!): Review,
        addAuthor(name: String!, verified: Boolean!): Author,
        deleteGame(id: ID!): [Game],
        deleteReview(id: ID!): [Review],
        deleteAuthor(id: ID!): [Author],
        updateReview(id: ID!, reviewEdit: UpdateReviewInput): Review
    }
    input AddGameInput {
        name: String!,
        description: String,
        platforms: [String!]!
    }
    input UpdateReviewInput {
        text: String,
        rating: Int
    }
`;
export const typeDefs = `#graphql
    type Game {
        id: ID!,
        name: String!,
        description: String,
        platforms: [String!]!,
    }
    type Review {
        id: ID!,
        gameId: ID!,
        text: String!,
        rating: Int!,
        author: Author!,
    }
    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!,
    }
    type Query {
        games: [Game!]!,
        reviews: [Review!]!
    }
`;
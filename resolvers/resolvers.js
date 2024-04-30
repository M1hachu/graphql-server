import db from '../database/_db.js';
export const resolvers = {
    Query: {
      games: () => {
        return db.games;
      },
      game: (parent, args, context) => {
        return db.games.find(game => game.id === args.id);
      },
      reviews: () => {
        return db.reviews;
      },
      review: (parent, args, context) =>{
        return db.reviews.find(review => review.id === args.id);
      },
      authors: () => {
        return db.author;
      },
      author: (parent, args, context) => {
        return db.author.find(author => author.id === args.id);
      }
    },
    Game: {
      reviews: (parent, args, context) => {
        return db.reviews.filter(review => review.gameId === parent.id);
      }
    },
    Review: {
      game: (parent, args, context) => {
        return db.games.find(game => game.id === parent.gameId);
      },
      author: (parent, args, context) => {
        return db.author.find(author => author.id === parent.authorId);
      }
    },
    Author: {
      reviews: (parent, args, context) => {
        return db.reviews.filter(review => review.authorId === parent.id);
      }
    },
    Mutation: {
      addGame: (parent, args, context) => {
        const game = {
          id: db.games.length + 1,
          name: args.name,
          description: args.description,
          platforms: args.platforms
        };
        db.games.push(game);
        return game;
      },
      addReview: (parent, args, context) => {
        const review = {
          id: db.reviews.length + 1,
          gameId: args.gameId,
          authorId: args.authorId,
          text: args.text,
          rating: args.rating
        };
        db.reviews.push(review);
        return review;
      },
      addAuthor: (parent, args, context) => {
        const author = {
          id: db.author.length + 1,
          name: args.name,
          verified: args.verified
        };
        db.author.push(author);
        return author;
      },
      deleteAuthor: (parent, args, context) => {
        db.author = db.author.filter(author => author.id !== args.id);
        return db.author;
      },
      deleteGame: (parent, args, context) => {
        db.games = db.games.filter(game => game.id !== args.id);
        return db.games;
      },
      deleteReview: (parent, args, context) => {
        db.reviews = db.reviews.filter(review => review.id !== args.id);
        return db.reviews;
      },
      updateReview: (parent, args, context) => {
        let review = db.reviews.find(review => review.id === args.id);
        try {
          if(review){
            console.log(args);
            review.text = args.reviewEdit.text;
            review.rating = args.reviewEdit.rating;
          }
        } catch (error) {
          console.log(error);
        }
        return review;
      }
    }
  };
  
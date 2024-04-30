const games = [
  {
    id: "1",
    name: "Super Mario Bros",
    description: "Classic Nintendo platformer game",
    platforms: ["NES", "SNES", "Switch"],
  },
  {
    id: "2",
    name: "The Legend of Zelda: Breath of the Wild",
    description: "Open world action-adventure game",
    platforms: ["Switch", "Wii U"],
  },
  {
    id: "3",
    name: "Grand Theft Auto V",
    description: "Open world action-adventure game",
    platforms: ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"],
  },
];

const reviews = [
  {
    id: "1",
    gameId: "1",
    authorId: "1",
    text: "This game is an absolute classic!",
    rating: 5
  },
  {
    id: "4",
    gameId: "1",
    authorId: "2",
    text: "classic!",
    rating: 4
  },
  {
    id: "2",
    gameId: "2",
    authorId: "2",
    text: "Breath of the Wild is such an immersive open world game.",
    rating: 4
  },
  {
    id: "3",
    gameId: "3",
    authorId: "3",
    text: "GTA V is really fun but also super violent.",
    rating: 3
  },
];

const author = [
  {
    id: "1",
    name: "MarioFan123",
    verified: true,
  },
  {
    id: "2",
    name: "LinkLover456",
    verified: false,
  },
  {
    id: "3",
    name: "GameReviewer9000",
    verified: true,
  }
];

export default { games, reviews, author };
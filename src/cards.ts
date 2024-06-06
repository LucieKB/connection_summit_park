export type Card = {
  id: number;
  groupId: number;
  front: string;
};

export const cards: [
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card
] = [
  {
    id: 1,
    groupId: 1,
    front: "Mrs. Riggs",
  },
  {
    id: 2,
    groupId: 1,
    front: " Ms. Roberts",
  },
  {
    id: 3,
    groupId: 1,
    front: "Mrs. Riordan",
  },
  {
    id: 4,
    groupId: 1,
    front: "Mrs. Rasch",
  },
  {
    id: 5,
    groupId: 2,
    front: "M. Kuennen",
  },
  {
    id: 6,
    groupId: 2,
    front: "M. Gilotti",
  },
  {
    id: 7,
    groupId: 2,
    front: "M. Call",
  },
  {
    id: 8,
    groupId: 2,
    front: "M. Footer",
  },
  {
    id: 9,
    groupId: 3,
    front: "Surfing",
  },
  {
    id: 10,
    groupId: 3,
    front: "Soccer",
  },
  {
    id: 11,
    groupId: 3,
    front: "Wind Surfing",
  },
  {
    id: 12,
    groupId: 3,
    front: "Rugby",
  },
  {
    id: 13,
    groupId: 4,
    front: "Football",
  },
  {
    id: 14,
    groupId: 4,
    front: "Ultimate Freesbee",
  },
  {
    id: 15,
    groupId: 4,
    front: "Baseball",
  },
  {
    id: 16,
    groupId: 4,
    front: "Kite Surfing",
  },
];

export const clues: [string, string, string, string] = [
  "1. We are animals.",
  "2. We are mammals.",
  "3. We are taller than humans.",
  "4. We are the only animals in the Olympics.",
];

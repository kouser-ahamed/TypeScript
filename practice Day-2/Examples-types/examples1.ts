type Point = [number, number];

const location1: Point = [10, 20];

const dhakalocation: Point = [30, 40];


console.log(dhakalocation);

// type alias for a tuple representing a player with name, country, and jersey number               


type Player = [ string, string, number];

const players: Player[] = [
    ["Messi", "Argentina", 10],
    ["Cristiano Ronaldo", "Portugal", 7],
    ["Neymar", "Brazil", 10],
    ["Mbappe", "France", 10]
]

console.log(players);

type OrderItem = readonly [ number, number];

const item: OrderItem = [ 1, 2];
//item.push(3); // This will work because tuples in TypeScript are arrays and can have elements pushed to them, but it may not be type-safe.
console.log(item);
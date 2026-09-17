const pirates =[
    {
        name1: "Nguyet",
        bounty: 10000,
        strength: 300
    },
    {
        name1: "Cuong",
        bounty: 20000,
        strength: 400
    },
    {
        name1: "Lua",
        bounty: 20000,
        strength: 200
    }
    
];

const awakenedPirates= pirates.map((pirates) => 
    (

{
    name2 : pirates.name1.toUpperCase(),
    bounty1 : pirates.bounty*2,
    strength1 : pirates.strength *1.5
}
    )
);

const monsterTrioCandidates = awakenedPirates.filter(strength => strength.strength1 > 500);

console.log (awakenedPirates);
console.log (monsterTrioCandidates);

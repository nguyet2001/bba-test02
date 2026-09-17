const crewList =[
    {
        name: "Zozo",
        bounty: 1000
    },
    {
        name: "Zizi",
        bounty: 200000000
    },
    {
        name: "Zaza",
        bounty: 1022222200
    },
    {
        name: "Zuzu",
        bounty: 10222444400
    },
    {
        name: "Zezo",
        bounty: 1022200
    }

]

crewList.sort((a,b) => - a.bounty + b.bounty);

for (let i =0; i < crewList.length; i++){
   //    console.log (crewList[i].name + " - " +crewList[i].bounty); 

let icon = " ";
    if (i==0)
    {
        console.log ("🥇" + crewList[0].name + " - " +crewList[0].bounty);

    }

    else if ( i==1 )
    {
        console.log ("🥈" + crewList[1].name + " - " +crewList[1].bounty);

    }
    else if (i==2)  
    {
        console.log ("🥉" + crewList[i].name + " - " +crewList[i].bounty);
    }

    else 
        
        console.log (crewList[i].name + " - " +crewList[i].bounty); 
}
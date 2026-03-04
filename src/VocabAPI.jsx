const vocabwords =[

   //Schemes 

    {word:"West Coast Offense", description:"A pass-heavy scheme emphasizing short, quick routes and timing patterns.", side:"offense",
       type:"scheme", related:""
    },
    {word:"Power/Gap",description:"'Man to man'; ", side:"offense",
       type:"scheme", related:""
    },
    {word:"Air Coryell",description:"Deep dropbacks + Vertical routes", giveaways:"",  side:"offense",
        type:"scheme", related:""
        },
    {word:"Spread/Air Raid",description:"An offensive scheme that uses multiple receivers and spread formations to create space.",  side:"offense",
       type:"scheme", related:["Shotgun", "RPO", "10 personnel", "11 personnel"]
    }, 
    {word:"Wide Zone",description:"Plays rely on a possible running backplay fake;", side:"offense", type:"scheme",
            related:["21 personnel", "Under Center", "Outside Zone"]},

//Personnels/Formations

    {word:"12 Personnel", description:"A formation with 12 players on the field, typically including 2 running backs and 10 receivers.", 
      side:"offense", type:"formation",
        related:["21 Personnel","11 Personnel"]},
        {word:"21 Personnel", description:"A formation with 21 players on the field, typically including 2 running backs and 1 tight end.", 
      side:"offense", type:"formation",
        related:["12 Personnel","11 Personnel"]}, 
        {word:"11 Personnel", description:"A formation with 11 players on the field, typically including 1 running back and 1 tight end.", 
      side:"offense", type:"formation",
        related:["12 Personnel","21 Personnel"]},

        
         {word:"Cover 2", description:"", side:"defense", type:"formation",
        related:["Cover 3"]},

        {word:"Cover 3", description:"", side:"defense", type:"formation",
        related:["Cover 2"]},
      
//Player alignments
   {word:"Under Center", description:"The quarterback lines up directly behind the center.", side:"offense", type:"alignment",
        related:""},

   {word:"Shotgun", description:"", side:"offense", type:"alignment",
        related:""}, 



         /*   {word:"", description:"", side:"", type:"",
        related:""}, */
];


export default vocabwords;

//The formation/detail keys should be arrays of objects that have the formation name and description, and the detail name and description, respectively. This way we can easily map through them on the frontend.
    

/*{schemename:"I-Formation", description:"An offensive formation that emphasizes power running and blocking schemes."},
    {schemename:"Spread Offense", description:"An offensive scheme that uses multiple receivers and spread formations to create space."}*/
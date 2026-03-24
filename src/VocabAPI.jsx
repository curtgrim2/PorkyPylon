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
        related:["21 Personnel","11 Personnel","00 Personnel"]},
        {word:"21 Personnel", description:"A formation with 21 players on the field, typically including 2 running backs and 1 tight end.", 
      side:"offense", type:"formation",
        related:["12 Personnel","11 Personnel","00 Personnel"]}, 
        {word:"11 Personnel", description:"A formation with 11 players on the field, typically including 1 running back and 1 tight end.", 
      side:"offense", type:"formation",
        related:["12 Personnel","21 Personnel","00 Personnel"]},
        {word:"00 Personnel", description:"Also known as 'Empty'.", side:"offense", type:"formation",
        related:["12 Personnel","21 Personnel","11 Personnel"]},

        {word:"Cover 1", description:"", side:"defense", type:"formation",
        related:["Cover 2","Cover 3"]},

         {word:"Cover 2", description:"", side:"defense", type:"formation",
        related:["Cover 1","Cover 3"]},

        {word:"Cover 3", description:"", side:"defense", type:"formation",
        related:["Cover 1","Cover 2"]},

        {word:"4-3 Over", description:"(Also known as 4-3 base)", side:"", type:"",
        related:""},

        {word:"4-3 Attack", description:"", side:"defense", type:"",
        related:""},
      
//Player alignments
   {word:"Under Center", description:"The quarterback lines up directly behind the center.", side:"offense", type:"alignment",
        related:""},
   {word:"Shotgun", description:"Quarterback lines up 5-7 yards behind center lineman. Also of note, the running back is lined up next to the quarterback.", side:"offense", type:"alignment",
        related:["Pistol"]}, 
   {word:"Pistol", description:"Quarterback lines up 3-4 yards behind center lineman. Also of note, the running back is lined up directly behind the quarterback.", side:"offense", type:"alignment",
        related:["Shotgun"]}, 
  
   {word:"3 Technique", description:"Defensive Lineman who lines up in the B Gap", side:"defense", type:"alignment",
        related:"Gaps"},

//Player Positions
{word:"Y Tight End", description:"", side:"offense", type:"position",
        related:["Inline Tight End"]},
{word:"Inline Tight End", description:"", side:"offense", type:"position",
        related:["Y Tight End"]},
{word:"X Wide Receiver", description:"", side:"offense", type:"position",
        related:["Z Wide Receiver"]},
{word:"Z Wide Receiver", description:"", side:"offense", type:"position",
        related:["X Wide Receiver"]},
{word:"Nickel Cornerback", description:"", side:"defense", type:"position",
        related:""},
{word:"Strong Safety", description:"", side:"defense", type:"position",
        related:["Free Safety"]},
{word:"Free Safety", description:"", side:"defense", type:"position",
      related:["Strong Safety"]},

{word:"Middle Linebacker(Mike)", description:"", side:"defense", type:"position",
        related:["Weakside Linebacker(Will)","Strongside Linebacker(Sam)"]},
{word:"Weakside Linebacker(Will)", description:"", side:"defense", type:"position",
        related:["Middle Linebacker(Mike)","Strongside Linebacker(Sam)"]},
{word:"Strongside Linebacker(Sam)", description:"", side:"defense", type:"position",
        related:["Middle Linebacker(Mike)","Weakside Linebacker(Will)"]},

/* {word:"", description:"", side:"", type:"",
        related:""}, */

];


export default vocabwords;

//The formation/detail keys should be arrays of objects that have the formation name and description, and the detail name and description, respectively. This way we can easily map through them on the frontend.
    

/*{schemename:"I-Formation", description:"An offensive formation that emphasizes power running and blocking schemes."},
    {schemename:"Spread Offense", description:"An offensive scheme that uses multiple receivers and spread formations to create space."}*/
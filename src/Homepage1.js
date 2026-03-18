import VocabAPI from "./VocabAPI";

export function todaysConcept(){
    var test = 1;
    var today = new Date().toLocaleDateString('en-CA');
    var seed = today.replace(/-/g, '');
    
    let x = Math.sin(seed) * 10000;
    var randomseed = x - Math.floor(x);

    var array =[];

    const count = VocabAPI.length;

    const whichconcept = Math.floor(randomseed * count);
    return whichconcept;
    //console.log("Today's concept is: " +today.getDate());
}

export default todaysConcept
//console.log("f2");
var tableau : string[]  = [];
tableau.push("javascript");
tableau.push("angular");
tableau.push("typescript");
for(let s of tableau){
    let S = s.toUpperCase();
    let msg = `${s} - ${S}`; 
    console.log(msg)
}
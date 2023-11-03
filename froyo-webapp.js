/* 
    users prompted by HTML button for input
    user input is strings separated by commas

//  function that takes in a string as an argument
    //  variable for object to hold a count for each flavor
    //  loop to iterate thro array and add count to object
        //  if a count doesnt exist, add it to object and count 1
        //  if it does exist, increment the count of existing flavor
    //  print to console + return the object
*/

function flavorCount(string) {
    //  prompt user for input
    let froyoChoices = prompt("Please enter a flavor of froyo for each order:");

    //  edge case if user cancels prompt input
    if(froyoChoices === null) {
        console.log("But.. froyo?");
        return 0;
    }
    
    //  split the input string into an array
    let eachFlavor = froyoChoices.split(",");

    //  declare an empty object for the froyo flavor count
    const froyoCount = {};
    
    //  loop thro the split array and send a count to empty object
    for(let i = 0; i < eachFlavor.length; i++) {
        //  check if the key exists already in the object
        if(typeof froyoCount[eachFlavor[i]] === "undefined") {
            froyoCount[eachFlavor[i]] = 1;
        } else {froyoCount[eachFlavor[i]]++}
    }

    console.log(froyoCount);
    return froyoCount;
}
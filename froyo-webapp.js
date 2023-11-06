/** 
*  an HTML button prompts a user to start an order
*  user input consists of flavor names separated by commas
*  function takes in the input string and returns an object
*/

function flavorCount(string) {
    //  prompt user for input and split flavors into an array
    let froyoFlavors = prompt("Please enter a flavor of froyo for each order:").split(",");

    //  declare an empty object for the froyo flavor count
    const froyoCount = {};
    
    //  loop thro the split array and send a count to empty object
    for(let i = 0; i < froyoFlavors.length; i++) {
        //  check if the key exists already in the object
        if(typeof froyoCount[froyoFlavors[i]] === "undefined") {
            froyoCount[froyoFlavors[i]] = 1;
        } else {froyoCount[froyoFlavors[i]]++}
    }

    console.log(froyoCount);
    return froyoCount;
}
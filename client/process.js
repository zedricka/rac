// gets the element via jQuery
var getHTMLElement = $('#result_strip').html();
console.log(getHTMLElement);

//global variable to store loop value
var getPrice =[];

// splits the string
var split = getHTMLElement.split('');

// the function
function loopy(){
// sets up the loop
    for (var i =0; i < split.length; i++) {
        let isNum = Number(split[i]) || split[i] === '0';
        //checks if there are numbers
        if (isNum) {
            //if they are numbers, store in the global variable.
            getPrice.push(split[i]);
        }
    }
}
//invoke function
loopy();

console.log ('final >>>', parseInt(getPrice.join('')));

parseInt(getPrice.join())
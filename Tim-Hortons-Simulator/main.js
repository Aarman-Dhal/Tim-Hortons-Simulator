// Tim Hortons Simulator
'use strict';

//Global Variables
let numRetry = 0;
let numCoffee = 0;
let numDonut = 0;
let numPrize = 0;

//Event Listener
document.getElementById('search').addEventListener('click', provinceSearch);
document.getElementById('once').addEventListener('click', rollRim);
document.getElementById('plusfive').addEventListener('click', roll5Times);
document.getElementById('untilGrandPrize').addEventListener('click', rollGrandPrize);
document.getElementById('until500donuts').addEventListener('click', roll500donuts);



//Event Function
function provinceSearch(){

    //Get Input Value (which province to look for)
      let province = document.getElementById('province-name').value;

    //Test Input Variable and Update the page
    if (province == 'ALBERTA'){
        //Update page to Alberta
          document.getElementById('mainImg').src = 'images/Alberta-flag.gif';

    } else if (province == 'SASKATCHEWAN'){
        //Update page to Saskatchewan
          document.getElementById('mainImg').src = 'images/Saskatchewan.gif';

    } else if (province == 'BRITISH COLUMBIA'){
        //Update page to British Columbia
          document.getElementById('mainImg').src = 'images/British-Columbian-Flag.jpeg';

    } else {
        //Update page to Error
          document.getElementById('mainImg').src = 'images/Question-mark.jpg';
          document.getElementById('instructions').innerHTML = 'The province you have entered can not be found.  Please check to see that you have only used capital letters and have spelled the province correctly.';
          document.getElementById('instructions').style.fontSize = '30px';
    }
    
}

function rollRim(){
    //Simulate result of rolling ONE RIM

    //Generate a Random Number
    let randNum = Math.random(); //Random decimal from 0 up to 1

    //Get Input Value (which province to look for)
    let province = document.getElementById('province-name').value;

    //Simulate Results
    if(province == 'ALBERTA'){
        
        if(randNum < 0.15){
            console.log('TryAgain');
            numRetry = numRetry + 1;
            document.getElementById('retry').innerHTML = numRetry;
            document.getElementById('results').innerHTML += ' <img src="images/retry.jpg">';
        } else if(randNum < 0.55){
            console.log('FreeCoffee');
            numCoffee = numCoffee + 1;
            document.getElementById('coffee').innerHTML = numCoffee;
            document.getElementById('results').innerHTML += ' <img src="images/Coffee.jpg">';
        } else if(randNum < 0.95){
            console.log('FreeDonut');
            numDonut = numDonut + 1;
            document.getElementById('donut').innerHTML = numDonut;
            document.getElementById('results').innerHTML += ' <img src="images/donuts.png">';
        } else{
            console.log('GrandPrize');
            numPrize = numPrize + 1;
            document.getElementById('prize').innerHTML = numPrize;
            document.getElementById('results').innerHTML += ' <img src="images/grandprize.jpg">';
        }


    }else if(province == 'SASKATCHEWAN'){
        
        if(randNum < 0.70){
            console.log('TryAgain');
            numRetry = numRetry + 1;
            document.getElementById('retry').innerHTML = numRetry;
            document.getElementById('results').innerHTML += ' <img src="images/retry.jpg">';
        } else if(randNum < 0.71){
            console.log('FreeCoffee');
            numCoffee = numCoffee + 1;
            document.getElementById('coffee').innerHTML = numCoffee;
            document.getElementById('results').innerHTML += ' <img src="images/Coffee.jpg">';
        } else if(randNum < 0.72){
            console.log('FreeDonut');
            numDonut = numDonut + 1;
            document.getElementById('donut').innerHTML = numDonut;
            document.getElementById('results').innerHTML += ' <img src="images/donuts.png">';
        } else{
            console.log('GrandPrize');
            numPrize = numPrize + 1;
            document.getElementById('prize').innerHTML = numPrize;
            document.getElementById('results').innerHTML += ' <img src="images/grandprize.jpg">';
       }

    }else if(province == 'BRITISH COLUMBIA'){
        
        if(randNum < 0.70){
            console.log('TryAgain');
            numRetry = numRetry + 1;
            document.getElementById('retry').innerHTML = numRetry;
            document.getElementById('results').innerHTML += ' <img src="images/retry.jpg">';
        } else if(randNum < 0.80){
            console.log('FreeCoffee');
            numCoffee = numCoffee + 1;
            document.getElementById('coffee').innerHTML = numCoffee;
            document.getElementById('results').innerHTML += ' <img src="images/Coffee.jpg">';
        } else if(randNum < 0.90){
            console.log('FreeDonut');
            numDonut = numDonut + 1;
            document.getElementById('donut').innerHTML = numDonut;
            document.getElementById('results').innerHTML += ' <img src="images/donuts.png">';
        } else{
            console.log('GrandPrize');
            numPrize = numPrize + 1;
            document.getElementById('prize').innerHTML = numPrize;
            document.getElementById('results').innerHTML += ' <img src="images/grandprize.jpg">';
        }

    }else{
        
    }

}

function roll5Times(){
    for(let n = 0; n < 5; n++){
    rollRim();
    }
}

function rollGrandPrize(){
    while (numPrize < 1){
    rollRim();
    }
}

function roll500donuts(){
    while(numDonut < 500){
    roll5Times();
    }

}
$(function(){
    var lunghezza = 5;
    numeriSimon = [];
    
    for (i=0; i<lunghezza ; i++ ){
        
        var numero = numRandom(1,50);
        if(!inArray(numero,numeriSimon)){
            numeriSimon.push(numero);
            $('h3').append(numeriSimon[i] + ' ');
        }
        else {
            i--;
        }
        
    }


    
    var secondi = 30;
    var intervallo = setInterval(function() {
        document.getElementById('timer').innerHTML = secondi;
        if(secondi == 0) {
            clearInterval(intervallo);
        }
        else {
            secondi --;
        }
    }, 1000);
});

setTimeout(function() {
    $('h3').hide();

}, (30000+1000));
var numeriUtente = [];
var uguali = [];
setTimeout(function() {
    for(i=0; i<numeriSimon.length; i++){
        var prova = prompt('Inserisci un numero:');
        if(!isNaN(prova) && !inArray(prova,numeriUtente)){
            numeriUtente.push(parseInt(prova));
        } else {
            i--;
        }
    }

for(i=0; i<numeriUtente.length ; i++){
    if(inArray(numeriUtente[i], numeriSimon)){
        uguali.push(numeriUtente[i]);
    }
}
if (uguali.length != 0){
    $('body').append('<h1>I numeri che hai indovinato sono: ' + uguali.length + ' e sono: ' + uguali + '</h1>');
}
else {
    $('body').append('<h1> MI DISPIACE NON NE HAI INDOVINATO NEMMENO UNO</h1>');
}
}, (30000+2000));




function numRandom (min , max) {
    var numero = Math.floor(Math.random()* (max - min + 1)) + min;
    return numero;
};

function inArray (numero , array){
    for(i=0; i<array.length; i++){
        if(numero == array[i]){
            return true;
        }
    }
    return false;
}




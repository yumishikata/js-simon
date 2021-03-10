$(function(){
    //AL CLICK DEL TASTO INVIA PARTE TUTTO 
    $('#invia').click(function(){

        var lunghezza,secondi;
        // DIFFICOLTA'
        if($('#difficolta').val() == 'easy'){
            lunghezza = 5;
            secondi = 30;
        }
        else if ($('#difficolta').val() == 'medium'){
            lunghezza = 10;
            secondi = 30;
        } else {
            lunghezza = 10;
            secondi = 15;
        }
        
        $('#regole').append('Hai ' + secondi + ' secondi per ricordarti i ' + lunghezza + ' numeri qua sotto');
        var numeriSimon = [];
        var tempo = secondi * 1000;
        //GENERAZIONE E INSERIMENTO ARRAY DI NUMERI RANDOM
        var i=0;
        while (i<lunghezza){
            var numero = numRandom(1,50);
            if(!inArray(numero,numeriSimon)){
                numeriSimon.push(numero);
                $('h3').append(numeriSimon[i] + ' ');
                i++;
            }
        }
        console.log(numeriSimon);
        //PARTENZA TIMER
        var intervallo = setInterval(function() {
            document.getElementById('timer').innerHTML = secondi;
            if(secondi == 0) {
                clearInterval(intervallo);
            }
            else {
                secondi --;
            }
        }, 1000);
        //DOPO ALLA FINE DEL TIMER SCOMPARE L'ARRAY DI NUMERI
        setTimeout(function() {
            $('h3').hide();
        
        }, tempo +1000); //HO AGGIUNTO SECONDI PERCHE' IL TIMER PARTE UN PO' DOPO

        var numeriUtente = [];
        //PARTENZA DEI PROMPT CON I NUMERI DA INSERIRE
        setTimeout(function() {
            var i=0;
            while(i<numeriSimon.length){
                var prova;
                prova = prompt('Inserisci il numero ' + (i+1));
                if(!isNaN(prova) && !inArray(prova,numeriUtente)){
                    numeriUtente.push(parseInt(prova));
                    i++;
                } 
            }

        var uguali = [];
        //CONTROLLO DEI NUMERI INDOVINATI 
        for(i=0; i<numeriUtente.length ; i++){
            if(inArray(numeriUtente[i], numeriSimon)){
                uguali.push(numeriUtente[i]);
            }
        }
        var k = (coloraUguali(numeriSimon,uguali)).length;

        if (k != 0){
            document.getElementById('indovinato').innerHTML = 'I numeri che hai indovinato sono: ' + k + '</h1>';
        }
        else {
            $('body').append('<h1> MI DISPIACE NON NE HAI INDOVINATO NEMMENO UNO</h1>');
        }
        }, tempo + 2000);
    });

    //SU ANNULLA RICARICA LA PAGINA
    $('#annulla').click(function(){
        location.reload();
    });
});




// FUNZIONI 
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
};

function coloraUguali (arrayBase , arrayUguali) {
    var j=0;
    var i=0;
    var k = []; //array con gli indici dei numeri uguali
    while (j<arrayUguali.length){
        for(i=0; i<arrayBase.length; i++){
            if (arrayUguali[j] == arrayBase[i]){
                k.push(i);
                j++;
                break;
            }
        }
    }
    i=0;
    while(i<arrayBase.length){
        var array = arrayBase[i];
        for(y=0; y<k.length;y++){
            if(i==k[y]){
                document.getElementById('lista').innerHTML += '<li class="green">' + array + '</li>';
                i++;
                break;
            }
        }
        if(y==k.length){
        document.getElementById('lista').innerHTML += '<li class="red">' + array + '</li>';
        i++;
        }
    }
    return k;
};







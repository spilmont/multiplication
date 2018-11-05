

function nAlea() {

    var nAlea1 = Math.random() * 10;
    nAlea1 = Math.round(nAlea1);

    var nAlea2 = Math.random() * 10;
    nAlea2 = Math.round(nAlea2);


    nResultat = nAlea1 * nAlea2;
    document.getElementById("nombres").innerHTML = nAlea1 + "X" + nAlea2;

}

nAlea();



document.getElementById("ok").addEventListener("click", function(){

    var nUser=document.getElementById("text").value;

    if(nResultat == nUser ){

        document.getElementById("resultat").innerHTML="Bravo, vous avez trouvé le résultat";
        document.getElementById("resultat").style.animation ="textV 1s infinite";
        document.getElementById("text").value ="";
        document.getElementById("text").style.backgroundColor ="white";

        nAlea();
    }
    else if(nResultat !== nUser){

        document.getElementById("resultat").innerHTML=" Perdu Réesseyer";
        document.getElementById("resultat").style.animation ="textR 1s infinite";
        document.getElementById("text").style.backgroundColor ="red";
    }

});

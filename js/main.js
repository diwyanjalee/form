


function submitBday() {

    var Q4A = " ";

    var Bdate = document.getElementById('bday').value;

    var Bday = +new Date(Bdate);
    
    Q4A += Bdate + " Your Age: " + ~~ ((Date.now() - Bday) / (31557600000));
    var theBday = document.getElementById('resultBday');
    theBday.innerHTML = Q4A;
}


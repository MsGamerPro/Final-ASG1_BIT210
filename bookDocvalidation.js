function validateFName() 
{
    var FName = document.getElementById("reg-FName").value;
    var input = /[A-Za-z]{2,20}/;

    if (input.test(FName))
    {
        document.getElementById("FNamePrompt").style.color="green";
        document.getElementById("FNamePrompt").innerHTML = "valid";
        return true;

    }

    else
    {
        document.getElementById("FNamePrompt").style.color="red";
        document.getElementById("FNamePrompt").innerHTML ="error";
        return false;
    }
}

function validateName()
{
    var N = document.getElementById("SearchName").value;
    var input = /[A-Za-z]{2,20}/;

    if(input.test(N)) {
        document.getElementById("SearchNamePrompt").style.color="green";
        document.getElementById("SearchNamePrompt").innerHTML="valid";
        return true;
    }
    else{
        document.getElementById("SearchNamePrompt").style.color="red";
        document.getElementById("SearchNamePrompt").innerHTML="invalid";
        return false;
    }
}

function validateAddress() 
{
    var A = document.getElementById("SearchAddress").value;
    var input = /[A-Za-z]{5,50}/;

    if(input.test(A)) {
        document.getElementById("SearchAddressPrompt").style.color="lightgreen";
        document.getElementById("SearchAddressPrompt").innerHTML="valid";
        return true;
    }
    else{
      document.getElementById("SearchAddressPrompt").style.color="red";
      document.getElementById("SearchAddressPrompt").innerHTML="invalid";
      return false;
    }
}
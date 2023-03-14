function show_inscription()
{
    document.getElementById("inscription_popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  
}

function hideInscription()
{
    document.getElementById("inscription_popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

document.getElementById("overlay").addEventListener("click", hideInscription);
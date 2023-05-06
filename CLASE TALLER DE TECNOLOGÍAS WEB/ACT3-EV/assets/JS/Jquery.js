var regex = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;

//JQuery
$("#telefono").keyup(function(){
   if($("#telefono").val() == ""){
       $("#telefono").val("02")
   }
   $("#telefono").val($("#telefono").val().replace(regex, ""))
});

//Javascript

var numTel = document.getElementById("celular");

numTel.addEventListener("keyup", function(){
    if (numTel.value == ""){
       numTel.value = "+56 9";
    }
    numTel.value = numTel.value.replace(regex,"");
})


function PrimeraMayus(str) {
    const valores = document.getElementsByClassName("CNAME")
    return str.charAt(0).toUpperCase() + str.slice(1);
};

$( function() {
    var availableTags = [
      "Hombre",
      "Mujer",
      "Indefinido",
    ];
    $( "#sexo" ).autocomplete({
      source: availableTags
    });
  } );

  $(function(){
    $nombre = document.querySelector("#nombre");
    $nombre.focus();
  });
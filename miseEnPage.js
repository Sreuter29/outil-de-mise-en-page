$(function(){
  $('#couleur-fond').change(function() {
  var cf = $('#couleur-fond option:selected').val();
  $('#contenu').css('background-color', cf);
});

$('#texte').change(function() {
  var te = $('#texte option:selected').val();
  if (te == 'Gras') $('#contenu p').css('font-weight', 'bold');
  if (te == 'Italique') $('#contenu p').css('font-style', 'italic');
  if (te == 'Souligne') $('#contenu p').css('text-decoration', 'underline');
  if (te == 'Normal') {
    $('#contenu p').css('font-weight', 'normal');
    $('#contenu p').css('font-style', 'normal');
    $('#contenu p').css('text-decoration', 'none');
  }
});

$('#police').change(function() {
  var ff = '"' + $('#police option:selected').val() + '"';
  $('#contenu p').css('font-family', ff);
});

$('#police-prem-phrase').change(function() {
  var ppp = $('#police-prem-phrase option:selected').val();
  $('#contenu p:first').css('font-family', ppp);
});

$('#prem-car-phrases').change(function() {
  var pcp = $('#prem-car-phrases option:selected').val();
  if (pcp == 'Gras') {
    $('p').each(function() {
      var tableau = $(this).text().split('. ');
      if (tableau.length == 0) {}
      else {
        var tableau2 = $.map(tableau, function(el, ind) {
          if (el[0] != null) return '<b>' + (el[0]) + '</b>' + el.substring(1) + '. ';
        });
        $(this).html(tableau2.join(''));
      }
    });
  }

  if (pcp == 'Normal') {
    $('p').each(function() {
      var unPar = $(this).html();
      if (unPar.indexOf('<img') == -1)
        $(this).text($(this).text());
    });
  }
});

$('#couleurMot').click(function() {
  var mot = $('#mot').val();
  var tableau = $('p:first').text().split(' ');
  var tableau2 = $.map(tableau, function(el, ind) {
    if (ind+1 == mot) return ('<font color="red">' + el + '</font>')
    else return(el);
    });
    $('p:first').html(tableau2.join(' '));
});

$('#bordure-images').change(function() {
  var bi = $('#bordure-images option:selected').val();
  if (bi == 'Rien') $('img').css('border', '2px solid white');
  if (bi == 'Simple') $('img').css('border', '2px solid red');
  if (bi == 'Double') $('img').css('border', '5px double red');
});

$('#raz').click(function() {
  //Rafraichit la page
  location.reload();
});
})
// Clic droit personnalisé
const menuPerso = document.querySelector(".menu-perso");
const btn1 = document.querySelector(".b1");
const btn2 = document.querySelector(".b2");

document.addEventListener('contextmenu', (e)=> {
  e.preventDefault();
  menuPerso.style.display = "block";
  menuPerso.style.top = `${e.clientY}px`;
  menuPerso.style.left = `${e.clientX}px`;
})
document.addEventListener('click', ()=> {
    menuPerso.style.display = "none";
})
btn1.addEventListener('click', ()=> {
  document.body.style.background = "orange";
})
btn2.addEventListener('click', ()=> {
  document.body.style.background = "lightgreen";

})

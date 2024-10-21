var artmodal = document.getElementById("ArtWorks");
var cartmodal = document.getElementById("cart");
var checkout = document.getElementById("shipping");
var final = document.getElementById("final");

function cart()
{
  $(cartmodal).modal();
}

function paintingCase()
{

  document.getElementById("datetitle").innerHTML = 'Data';
  document.getElementById("typetitle").innerHTML = 'Tipul';
  document.getElementById("dimensionstitle").innerHTML = 'Dimensiunea';
  document.getElementById("locationtitle").innerHTML = 'Locatia';
  document.getElementById("artisttitle").innerHTML = 'Autor';
  document.getElementById("pricetitle").innerHTML = 'Pretul';
  document.getElementById("genretitle").innerHTML = 'Genul';
}
function museumCase()
{
  document.getElementById("datetitle").innerHTML = 'Data înființării';
  document.getElementById("typetitle").innerHTML = 'Locație și Adresă';
  document.getElementById("dimensionstitle").innerHTML = 'Arhitecti';
  document.getElementById("locationtitle").innerHTML = 'Istoria';
  document.getElementById("artisttitle").innerHTML = 'Opere de artă celebre';
  document.getElementById("pricetitle").innerHTML = '';
  document.getElementById("genretitle").innerHTML = '';
  document.getElementById("price").innerHTML = '';
  document.getElementById("genre").innerHTML = '';
}
function artistCase()
{

  document.getElementById("datetitle").innerHTML = 'Data nasterii';
  document.getElementById("typetitle").innerHTML = 'Data de deces';
  document.getElementById("dimensionstitle").innerHTML = 'Locul de trai';
  document.getElementById("locationtitle").innerHTML = 'Genul de pictură';
  document.getElementById("artisttitle").innerHTML = 'Piese celebre';
  document.getElementById("pricetitle").innerHTML = '';
  document.getElementById("genretitle").innerHTML = '';
  document.getElementById("price").innerHTML = '';
  document.getElementById("genre").innerHTML = '';
}

function grantWood()
{
  artistCase();
  document.getElementById("modalHeader").innerHTML = "Grant Wood";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/Artists/GrantWood.jpg\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = 'Februarie 13, 1891';
  document.getElementById("type").innerHTML = 'Februarie 12, 1942';
  document.getElementById("dimension").innerHTML = 'America';
  document.getElementById("location").innerHTML = 'Gotic';
  document.getElementById("artist").innerHTML = 'American Gothic, Woman with Plants, Young Corn';
  $(artmodal).modal();
}

function leonardo()
{
  artistCase();
  document.getElementById("modalHeader").innerHTML = "Leonardo da Vinci";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/Artists/LeonardodaVinci.jpg\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = 'Aprilie 15, 1452';
  document.getElementById("type").innerHTML = 'Mai 2, 1519';
  document.getElementById("dimension").innerHTML = 'Anchiano, Italy';
  document.getElementById("location").innerHTML = 'Renaştere';
  document.getElementById("artist").innerHTML = 'Mona Lisa, The Last Supper, Vitruian Man';
  $(artmodal).modal();
}

function vincent()
{
  artistCase();
  document.getElementById("modalHeader").innerHTML = "Vincent Van Gogh";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/Artists/VincentvanGogh.jpg\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = 'Martie 30, 1853';
  document.getElementById("type").innerHTML = 'Iulie 29, 1890';
  document.getElementById("dimension").innerHTML = 'France';
  document.getElementById("location").innerHTML = 'Arta occidentală';
  document.getElementById("artist").innerHTML = 'The Starry Night, Irises, The Potato Eaters';
  $(artmodal).modal();
}

function dali()
{
  artistCase();
  document.getElementById("modalHeader").innerHTML = "Salvador Dali";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/Artists/SalvadorDali.jpg\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = ' Mai 11, 1904';
  document.getElementById("type").innerHTML = 'Ianuarie 23, 1989';
  document.getElementById("dimension").innerHTML = 'Figueres, Spain';
  document.getElementById("location").innerHTML = 'Suprarealism, cubism, artă modernă';
  document.getElementById("artist").innerHTML = 'The Persistence of Memory, The Burning Giraffe, The Great Masturbator';
  $(artmodal).modal();
}

function picasso()
{
  artistCase();
  document.getElementById("modalHeader").innerHTML = "Pablo Picasso";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/Artists/PabloPicasso.jpg\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = ' Octombrie 25, 1881';
  document.getElementById("type").innerHTML = 'Aprilie 8, 1973';
  document.getElementById("dimension").innerHTML = 'Málaga, Spain';
  document.getElementById("location").innerHTML = 'Suprarealism, cubism, artă modernă';
  document.getElementById("artist").innerHTML = 'Guernica, The Old Guitarist, Chicago Picasso';
  $(artmodal).modal();
}

function monaLisa()
{
  paintingCase();
  document.getElementById("modalHeader").innerHTML = "Mona Lisa";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/ArtWork/monalisa.jpg\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = '1503';
  document.getElementById("type").innerHTML = 'Ulei';
  document.getElementById("dimension").innerHTML = '77 X 53 cm';
  document.getElementById("location").innerHTML = 'The Louvre';
  document.getElementById("artist").innerHTML = 'Leonardo da Vinci';
  document.getElementById("price").innerHTML = '225.00';
  document.getElementById("genre").innerHTML = 'Portret';
  $(artmodal).modal();
}

function americangothic()
{
  paintingCase();
  document.getElementById("modalHeader").innerHTML = "American Gothic";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/ArtWork/americangothic.jpg\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = '1930';
  document.getElementById("type").innerHTML = 'Ulei';
  document.getElementById("dimension").innerHTML = '74 X 62 cm';
  document.getElementById("location").innerHTML = 'Royal Academy of Arts';
  document.getElementById("artist").innerHTML = 'Grant Wood';
  document.getElementById("price").innerHTML = '125.00';
  document.getElementById("genre").innerHTML = 'Portret';
  $(artmodal).modal();
}

function starrynight()
{
  paintingCase();
  document.getElementById("modalHeader").innerHTML = "Starry Night";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/ArtWork/starrynight.jpg\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = '1889';
  document.getElementById("type").innerHTML = 'Ulei';
  document.getElementById("dimension").innerHTML = '74 X 92 cm';
  document.getElementById("location").innerHTML = 'Museum of Modern Art';
  document.getElementById("artist").innerHTML = 'Vincent van Gogh';
  document.getElementById("price").innerHTML = '200.00';
  document.getElementById("genre").innerHTML = 'Modern';
  $(artmodal).modal();
}

function thepersistenceofmemory()
{
  paintingCase();
  document.getElementById("modalHeader").innerHTML = "The Persistence Of Memory";
  document.getElementById("modalBody").innerHTML =
  '<img src=\'Images/ArtWork/thepersistenceofmemory.png\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = '1931';
  document.getElementById("type").innerHTML = 'Ulei';
  document.getElementById("dimension").innerHTML = '24 X 33 cm';
  document.getElementById("location").innerHTML = 'Museum of Modern Art';
  document.getElementById("artist").innerHTML = 'Salvador Dali';
  document.getElementById("price").innerHTML = '150.00';
  document.getElementById("genre").innerHTML = 'Surrealism';
  $(artmodal).modal();
}

function guernica()
{
  paintingCase();
  document.getElementById("modalHeader").innerHTML = "Guernica";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/ArtWork/guernica.jpg\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = '1937';
  document.getElementById("type").innerHTML = 'Ulei';
  document.getElementById("dimension").innerHTML = '3.49 X 7.7 m';
  document.getElementById("location").innerHTML = 'Paris';
  document.getElementById("artist").innerHTML = 'Pablo Picasso';
  document.getElementById("price").innerHTML = '100.00';
  document.getElementById("genre").innerHTML = 'Surrealism';
  $(artmodal).modal();
}

function smithsonian()
{
  museumCase();
  document.getElementById("modalHeader").innerHTML = "Smithsonian American Art Museum";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/Museums/smithsonian.jpg\' height=\'200\' width=\'300\'/>';
  document.getElementById("date").innerHTML = '1829';
  document.getElementById("type").innerHTML = 'F St NW & 8th St NW, Washington, DC 20004, USA';
  document.getElementById("dimension").innerHTML = 'James Renwick Jr';
  document.getElementById("location").innerHTML = 'Institutul Smithsonian are astăzi 19 muzee și galerii, nouă facilități de cercetare și Parcul Zoologic Național, ceea ce îl face cel mai mare muzeu și centru de cercetare din lume.';
  document.getElementById("artist").innerHTML = 'Aurora Borealis, Elizabeth Winthrop Chanler (Mrs. John Jay Chapman), Stevenson Memorial';
  $(artmodal).modal();
}

function louvre()
{
  museumCase();
  document.getElementById("modalHeader").innerHTML = "The Louvre";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/Museums/thelouvre.jpg\' height=\'200\' width=\'300\'/>';
  document.getElementById("date").innerHTML = 'August 10, 1793';
  document.getElementById("type").innerHTML = 'Rue de Rivoli, 75001 Paris, France';
  document.getElementById("dimension").innerHTML = 'Pierre Lescot, Hector Lefuel, Louis Visconti, Louis Le Vau';
  document.getElementById("location").innerHTML = 'Luvru a fost construit în 1190 ca o apărare împotriva raidurilor vikingilor.';
  document.getElementById("artist").innerHTML = 'Mona Lisa, Venus de Milo, Winged Victory of Samothrace';
  $(artmodal).modal();
}

function acropolis()
{
  museumCase();
  document.getElementById("modalHeader").innerHTML = "Old Acropolis Museum";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/Museums/acropolis.jpg\' height=\'200\' width=\'300\'/>';
  document.getElementById("date").innerHTML = '1865';
  document.getElementById("type").innerHTML = 'Ethniki Odos 1 9, Athina 106 74, Greece';
  document.getElementById("dimension").innerHTML = 'Panagis Kalkos';
  document.getElementById("location").innerHTML = 'Muzeul a găzduit multe dintre relicvele antice ale lumii grecești găsite în și în jurul Acropolei din Atena de când au început săpăturile. A fost proiectat de arhitectul Panagis Kalkos și a fost construit între 1865 și 1874. A fost extins în anii 1950 la un design modern executat de Patroklos Karantinos, un arhitect modernist grec.';
  document.getElementById("artist").innerHTML = 'Kritios Boy, Moscophoros, Caryatids';
  $(artmodal).modal();
}

function museonacional()
{
  museumCase();
  document.getElementById("modalHeader").innerHTML = "Museo Nacional Centro de Arte Reina Sofía";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/Museums/museonacionalcentro.jpg\' height=\'200\' width=\'300\'/>';
  document.getElementById("date").innerHTML = 'September 10, 1992';
  document.getElementById("type").innerHTML = 'Calle de Santa Isabel, 52, 28012 Madrid, Spain';
  document.getElementById("dimension").innerHTML = 'Jean Nouvel, Francesco Sabatini, José de Hermosilla';
  document.getElementById("location").innerHTML = 'Clădirea a funcționat ca Centro del Arte (Centrul de Artă) din 1986 până când a fost înființat ca Museo Nacional Centro de Arte Reina Sofia în 1988.';
  document.getElementById("artist").innerHTML = 'Guernica, Portrait of Josette Gris, The Bottle of Anís del Mono';
  $(artmodal).modal();
}

function prado()
{
  museumCase();
  document.getElementById("modalHeader").innerHTML = "Museo del Prado";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/Museums/prado.jpg\' height=\'200\' width=\'300\'/>';
  document.getElementById("date").innerHTML = '1819';
  document.getElementById("type").innerHTML = 'Paseo del Prado, s/n, 28014 Madrid, Spain';
  document.getElementById("dimension").innerHTML = 'Rafael Moneo, Juan de Villanueva';
  document.getElementById("location").innerHTML = 'În 1981, a lui Pablo Picasso (1937) a fost adăugat la colecția Prado.';
  document.getElementById("artist").innerHTML = 'Las Meninas, The Garden of Earthly Delights, The Third of May 1808';
  $(artmodal).modal();
}

$('.minus-btn1').on('click', function(e) {
    		e.preventDefault();
    		var $this = $(this);
    		var $input = $this.closest('div').find('input');
    		var value = parseInt($input.val());
        var $price = $this.closest('div').find("span[class='total-price']");
        //var $price = $("span[name='price']");
        var pri = parseInt($price.attr("value"));
        //alert(pri);
    		if (value > 1) {
    			value = value - 1;
    		} else {
    			value = 0;
    		}
        $input.val(value);
        $price.html("$"+(value*pri));

    	});

    	$('.plus-btn1').on('click', function(e) {
    		e.preventDefault();
    		var $this = $(this);
    		var $input = $this.closest('div').find("input[name='name']");
    		var value = parseInt($input.val());
        var $price = $this.closest("div").find("span[name='cartp']");
        var pri = parseInt($price.attr("value"));
    		if (value < 100) {
      		value = value + 1;
    		} else {
    			value =100;
    		}
    		$input.val(value);
        $price.html("$"+(value*pri));
    	});

      $('.like-btn').on('click', function() {
        $(this).toggleClass('is-active');
      });

$('.check').on('click', function(e) {
  e.preventDefault();
  $(cartmodal).modal("hide");
  $(checkout).modal();
});

$(document).ready(function() {
  $("form").submit(function() {

    return false;
  })
});
$('.invoice').on('click', function(e) {
  var total = 0;
  var tax = 0;
$('span[name="cartp"]').each(function(index,item){
  var temp = parseInt($(item).html().substring(1));
  total += temp;
});
var beforeTax = total;
tax = (total*0.13).toFixed(2);
total = (total*1.13).toFixed(2);
$('span[id="total"]').html("$"+beforeTax);
$('span[id="tax"]').html("$"+tax);
$('span[id="sub"]').html("$"+total);
  e.preventDefault();
  $(checkout).modal("hide");
  $(final).modal();
});

$(document).ready(function(){

   $("#finalinvoice").click(function(e){
    e.preventDefault();
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var address = $("#address").val();
    var postal = $("#postalc").val();
   var city = $("#city").val();
   var email = $("#email").val();
   var phone = $("#phone").val();


        $("#showfname").text(fname);
        $("#showlname").text(lname);
        $("#showaddress").text(address);
	$("#showpostal").text(postal);
        $("#showcity").text(city);
        $("#showemail").text(email);
        $("#showphone").text(phone);
        $("#final").modal("show");
   });

});

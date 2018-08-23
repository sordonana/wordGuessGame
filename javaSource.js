var artistas = ["Adele", "JustinBieber", "OneDirection", "Drake", "EdSheeran", "TaylorSwift", "SelenaGomez", "Eminem", "Beyonce", "Maroon5", "KatyPerry", "EllieGoulding", "MileyCyrus", "MichaelJackson", "BritneySpears", "LadyAntebellum", "Shakira", "DixieChicks", "ShaniaTwain", "EnriqueIglesias", "LanaDelRey", "FreddieMercury", "MariahCarey", "JenniferLopez", "LinkinPark", "Jewel", "Madonna", "Coldplay", "FallOutBoy", "CalvinHarris", "Westlife", "FooFighters", "FloRida", "WhitneyHouston", "ImagineDragons", "KellyClarkson", "Metallica", "RodStewart", "MarcAnthony", "AndreaBocelli", "RedHotChiliPeppers", "Pitbull", "Nickelback", "SpiceGirls", "Paramore", "Nirvana", "JulioIglesias", "MyChemicalRomance", "RickyMartin", "BobMarley", "BonJovi", "MeatLoaf", "TheChainsmokers", "DavidBowie", "PinkFloyd", "Queen"];
var letrasValidas = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M',];
var leArt = Math.floor(Math.random() * artistas.length);
var adivina = artistas[leArt].toLocaleLowerCase();
var keyPressed;
var emptyArr = new Array();
var ingresos = new Array();
var ingresosSTR = "";
var continuar = false;
var letras = new Array();
var respuesta = new Array();
var emptystr = "";
var indice = 0;
respuesta = adivina.split("");
var ganaste = false;
var juegosGanados = 0;
var termino = false;
var check = 1;
var emptyArr2 = "-";
var respuesta2 = " ";
var oportunidades=10;




function reset() {
    leArt = Math.floor(Math.random() * artistas.length);
    adivina = artistas[leArt].toLocaleLowerCase();
    respuesta = adivina.split("");
    emptyArr = [" "];
    ingresos = [];
    continuar = false;
    letras = [""];
    indice = 0;
    ganaste = false;
    check = 1;
    keyPressed = "-";
    var tre = 0;
    oportunidades=10;

    $("#opor").html(oportunidades);
    $(".anuncios").html("");
    $(".anuncios2").html("");





    for (d = 0; d < adivina.length; d++) {
        emptyArr[d] = " _ "

    }

    emptystr = emptyArr.toString();

    $(".w3").html(emptyArr);
}


    $(document).on("keydown", function (event) {
        keyPressed = event.key;


        if (letras.includes(keyPressed)) {
            $(".anuncios").html("The character that you entered is repeated");

        }
        else if (letrasValidas.includes(keyPressed) == false) {
            $(".anuncios").html("The character that you entered is not valid");
        }

        else {
            $(".anuncios").html("");

        }
        //variable continuar
        if (ingresos.includes(keyPressed)) {
            continuar = false;

        }
        else {
            continuar = true
        }
        //variable continuar

        console.log(keyPressed);

        ingresos = ingresos.concat(keyPressed);
        ingresosSTR = ingresos.toString();

        if (letrasValidas.includes(keyPressed) && continuar == true) {

            $(".anuncios").html("");
            console.log("entrada al programa");

            letras.push(keyPressed);
            $(".letras").html(" <h2> " + letras + " </h2 ");

            //controlador de Empty Array
            if (adivina.includes(keyPressed)) {
                for (z = 0; z < adivina.length; z++) {
                    if (adivina.charAt(z) == keyPressed) {
                        emptyArr[z] = keyPressed;

                    }
                }
                
                $(".w3").html(emptyArr);
                emptyArr2 = emptyArr.toString();
                respuesta2 = respuesta.toString();

            }
            else{
                oportunidades-=1;
                $("#opor").html(oportunidades);
            }
            //controlador de Empty Array

            if (oportunidades<=0){
                juegosGanados=0;
                oportunidades=0;
                $("#opor").html(oportunidades);
                $("#jugan").html(juegosGanados);
                $(".letras").html(" <h2>  </h2 ");
                newGame();
            }

           

            function newGame (){
                juegosGanados=0;
                $(".anuncios2").html("<p style=color:red;font-size:60px>GAME OVER</p>");
                var tr= confirm("GAME OVER, DO YOU WANT TO START A NEW GAME?");
                if (tr){
                        reset();
                    }
                    else{

                        $(".anuncios").html("You decided you don´t want to play anymore, if you want to play again press the NEW GAME Button");
                        return 0;
                        
                    }

                }

            

            if (emptyArr2 === respuesta2) {
                console.log("Ganaste");
                juegosGanados += 1;
                console.log(juegosGanados);
                emptyArr2 = "-";
                respuesta2 = "";
                keyPressed = null;
                emptyArr = ["-"];
                $("#jugan").html(juegosGanados);
                $(".letras").html(" <h2>  </h2 ");
                $("#wGuessed").html(adivina);

                switch (adivina){
                 
                 case 'adele': $('#video').html('<iframe src=https://player.vimeo.com/video/147541413?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;

                 case 'justinbieber': $('#video').html('<iframe src=https://player.vimeo.com/video/146728460?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'onedirection': $('#video').html('<iframe src=https://player.vimeo.com/video/51900091?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'drake': $('#video').html('<iframe src=https://player.vimeo.com/video/282963852?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'edsheeran': $('#video').html('<iframe src=https://player.vimeo.com/video/245755316?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'taylorswift': $('#video').html('<iframe src=https://player.vimeo.com/video/278872536?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'selenagomez': $('#video').html('<iframe src=https://player.vimeo.com/video/37326223?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'eminem': $('#video').html('<iframe src=https://player.vimeo.com/video/73016797?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'beyonce': $('#video').html('<iframe src=https://player.vimeo.com/video/55097700?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'maroon5': $('#video').html('<iframe src=https://player.vimeo.com/video/255573040?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'katyperry': $('#video').html('<iframe src=https://player.vimeo.com/video/196938045?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'elliegoulding': $('#video').html('<iframe src=https://player.vimeo.com/video/32097293?autoplay=1&title=0&byline=0&portrait=0 width=640 height=307 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'mileycyrus': $('#video').html('<iframe src=https://player.vimeo.com/video/127902028?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'michaeljackson': $('#video').html('<iframe src=https://player.vimeo.com/video/5628364?autoplay=1&title=0&byline=0&portrait=0 width=640 height=491 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'britneyspears': $('#video').html('<iframe src=https://player.vimeo.com/video/256840803?autoplay=1&title=0&byline=0&portrait=0 width=640 height=327 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'ladyantebellum': $('#video').html('<iframe src=https://player.vimeo.com/video/27659189?autoplay=1&title=0&byline=0&portrait=0 width=640 height=480 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'shakira': $('#video').html('<iframe src=https://player.vimeo.com/video/5925613?autoplay=1&title=0&byline=0&portrait=0 width=640 height=336 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'dixiechicks': $('#video').html('<iframe src=https://player.vimeo.com/video/8571127?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'shaniatwain': $('#video').html('<iframe src=https://player.vimeo.com/video/28374574?autoplay=1&title=0&byline=0&portrait=0 width=640 height=480 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'enriqueiglesias': $('#video').html('<iframe src=https://player.vimeo.com/video/27104426?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'lanadelrey': $('#video').html('<iframe src=https://player.vimeo.com/video/33423232?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'freddiemercury': $('#video').html('<iframe src=https://player.vimeo.com/video/8073545?autoplay=1&title=0&byline=0&portrait=0 width=640 height=480 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'mariahcarey': $('#video').html('<iframe src=https://player.vimeo.com/video/202965025?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'jenniferlopez': $('#video').html('<iframe src=https://player.vimeo.com/video/221533741?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'linkinpark': $('#video').html('<iframe src=https://player.vimeo.com/video/13807938?autoplay=1&title=0&byline=0&portrait=0 width=640 height=480 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'jewel': $('#video').html('<iframe src=https://player.vimeo.com/video/23871954?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'madonna': $('#video').html('<iframe src=https://player.vimeo.com/video/44003277?autoplay=1&title=0&byline=0&portrait=0 width=640 height=480 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'coldplay': $('#video').html('<iframe src=https://player.vimeo.com/video/45556174?autoplay=1&title=0&byline=0&portrait=0 width=640 height=366 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'falloutboy': $('#video').html('<iframe src=https://player.vimeo.com/video/195303?autoplay=1&title=0&byline=0&portrait=0 width=640 height=480 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'calvinharris': $('#video').html('<iframe src=https://player.vimeo.com/video/26748949?autoplay=1&color=ffffff&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'westlife': $('#video').html('<iframe src=https://player.vimeo.com/video/73584992?autoplay=1&color=ffffff&title=0&byline=0&portrait=0 width=640 height=359 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'foofighters': $('#video').html('<iframe src=https://player.vimeo.com/video/231765632?autoplay=1&color=ffffff&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'florida': $('#video').html('<iframe src=https://player.vimeo.com/video/31294039?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=424 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'whitneyhouston': $('#video').html('<iframe src=https://player.vimeo.com/video/37869114?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'imaginedragons': $('#video').html('<iframe src=https://player.vimeo.com/video/211687991?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'kellyclarkson': $('#video').html('<iframe src=https://player.vimeo.com/video/21873290?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=480 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'metallica': $('#video').html('<iframe src=https://player.vimeo.com/video/9153533?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'rodstewart': $('#video').html('<iframe src=https://player.vimeo.com/video/158796225?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'marcanthony': $('#video').html('<iframe src=https://player.vimeo.com/video/64923564?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'andreabocelli': $('#video').html('<iframe src=https://player.vimeo.com/video/19345436?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=480 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'redhotchilipeppers': $('#video').html('<iframe src=https://player.vimeo.com/video/5868518?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=524 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'pitbull': $('#video').html('<iframe src=https://player.vimeo.com/video/46835688?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'nickelback': $('#video').html('<iframe src=https://player.vimeo.com/video/11903791?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'spicegirls': $('#video').html('<iframe src=https://player.vimeo.com/video/63218569?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=351 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'paramore': $('#video').html('<iframe src=https://player.vimeo.com/video/6814784?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=352 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'nirvana': $('#video').html('<iframe src=https://player.vimeo.com/video/15504161?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=480 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'julioiglesias': $('#video').html('<iframe src=https://player.vimeo.com/video/95818272?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'mychemicalromance': $('#video').html('<iframe src=https://player.vimeo.com/video/26914354?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=480 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'rickymartin': $('#video').html('<iframe src=https://player.vimeo.com/video/259748820?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'bobmarley': $('#video').html('<iframe src=https://player.vimeo.com/video/41658615?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=512 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'bonjovi': $('#video').html('<iframe src=https://player.vimeo.com/video/17402945?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'meatloaf': $('#video').html('<iframe src=https://player.vimeo.com/video/104461671?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=400 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'thechainsmokers': $('#video').html('<iframe src=https://player.vimeo.com/video/135504847?autoplay=1&color=404242&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'queen': $('#video').html('<iframe src=https://player.vimeo.com/video/13416084?autoplay=1&title=0&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'davidbowie': $('#video').html('<iframe src=https://player.vimeo.com/video/23067495?autoplay=1&byline=0&portrait=0 width=640 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                 case 'pinkfloyd': $('#video').html('<iframe src=https://player.vimeo.com/video/9058605?autoplay=1&byline=0&portrait=0 width=640 height=432 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') 
                 break;
                    
                         
                         


                    default:
                    $("#video").html("NO VIDEO")
                    break;
                }



                reset();
            }

        

    }
});

whurl = "https://discord.com/api/webhooks/1339289918689644637/CS1C9hciAdtbBAJu6SL2PGc0qWc1LAjXJi9xkSz_B4SwUDrwfEwdNrj0HtsyXc0-WmnX"

var name= "";
var discord_tag= "";
var eta= "";
var tempo_gioco= "";
var modalita= "";
var ore_online= "";
var staff_exp= "";
var insulti_staff="";
var razzismo="";
var why_staff="";
var more_than_others="";
var telegram_tag="";
var str= "";

function f1(){
    name = "Canditatura star Web";

    //strpuzzle
    discord_tag = document.getElementById("DsTag").value;
    eta = document.getElementById("Eta").value;
    tempo_gioco = document.getElementById("PlayedTime").value;
    modalita = document.getElementById("Modalita").value;
    ore_online = document.getElementById("TimeOnline").value;
    staff_exp = document.getElementById("StaffExp").value;
    insulti_staff = document.getElementById("InsultiStaff").value;
    razzismo = document.getElementById("Razzismo").value;
    why_staff = document.getElementById("WhyStaff").value;
    more_than_others = document.getElementById("OtherApplier").value;
    telegram_tag = document.getElementById("TelegramTag").value;


    //strfinal

    str = "```Tag Discord:" + "\r\n" + discord_tag + "\r\n" + "Edad:" + "\r\n" + eta + "\r\n" + "Tiempo jugado en el servidor:" + "\r\n" + tempo_gioco + "\r\n" + "Designado:" + "\r\n" + modalita + "\r\n" + "Tiempo disponible en línea:" + "\r\n" + ore_online + "\r\n" + "Experiencias como personal:" + "\r\n" + staff_exp + "\r\n" + "¿Qué harías si los usuarios te insulten?:" + "\r\n" + insulti_staff + "\r\n" + "¿Qué harías si los usuarios asumen el comportamiento racista?:" + "\r\n" + razzismo + "\r\n" + "Porque quieres ingresar al personal:" + "\r\n" + why_staff + "\r\n" + "¿Qué crees que tienes más que otros candidatos?:" + "\r\n" + more_than_others + "\r\n" + "@correo:" + "\r\n" + telegram_tag + "```" ;
    console.log(document.getElementById("DsTag").value);
}

function Send(){
    f1();
    const msg = {
        "content": str,
        "username": name
    };
    console.log(msg)
    if(str == ""){
        document.getElementById("Message1").style.opacity = 1;
        setTimeout(function(){
            document.getElementById("Message1").style.opacity = 0;
        }, 4000)
        console.log("ERROR")
        return;
    }
    try{
        fetch(whurl + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)});
        document.getElementById("InputField").value = "";
        document.getElementById("MessageSent").style.opacity = 1;
        setTimeout(function(){
            document.getElementById("MessageSent").style.opacity = 0;
        }, 4000)

    } catch(e){
        document.getElementById("MessageFailed").style.opacity = 1;

        setTimeout(function(){
            document.getElementById("MessageFailed").style.opacity = 0;
        }, 4000)
    }
  }

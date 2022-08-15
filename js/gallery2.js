let picCurrent = 0
function showPicture(picID) {
    let pic = document.getElementById(picID);
    let pics = document.getElementsByClassName("pic");
    console.log(pics);
    /* Проходим по каждому слайду в цикле for */
    for (let pic of pics) {
        pic.style.borderWidth = "1px";
        pic.style.borderColor = "black";
    }
    pic.style.borderWidth = "3px";
    pic.style.borderColor = "blue";
    let bigPic = document.getElementById("bigPicture");
    bigPic.style.visibility = "visible";
    bigPic.src = pic.src;
    let text = document.getElementById("txt");
    let ref = document.getElementById("reference");
    ref.setAttribute("href",bigPic.src);
    ref.style.pointerEvents = "auto";
    switch(picID){
        case "1":
            text.textContent = "1981 г.   Школа";
            break;
        case "2":
            text.textContent = "1984 г.   Армия";
            break;
        case "3":
            text.textContent = "1986 г.   Cтройотряд в Смоленской области";
            break;
        case "4":
            text.textContent = "1986 г.   Cтройотряд в Смоленской области";
            break;
        case "5":
            text.textContent = "1987 г.   Стройотряд на БАМе";
            break;
        case "6":
            text.textContent = "1987 г.   Стройотряд на БАМе";
            break;
        case "7":
            text.textContent = "1987 г.   Стройотряд на БАМе";
            break;
        case "8":
            text.textContent = "1988 г.   Поход на остров Кижи";
            break;
        case "9":
            text.textContent = "1988 г.   Поход на остров Кижи";
            break;
        case "10":
            text.textContent = "1991 г.   Поход по реке Чусовая";
            break;
        case "11":
            text.textContent = "1991 г.   Поход по реке Чусовая";
            break;
        case "12":
            text.textContent = "1991 г.   Поход по реке Чусовая";
            break;
        case "13":
            text.textContent = "1991 г.   Поход по реке Чусовая";
            break
        case "14":
            text.textContent = "1992 г.   Поход по реке Ваймуга";
            break;
        case "15":
            text.textContent = "1992 г.   Поход по реке Ваймуга";
            break;
        case "16":
            text.textContent = "1995 г.   Свадьба";
            break;
        case "17":
            text.textContent = "2010 г.   Головинка Сочи";
            break;
        case "18":
            text.textContent = "2011 г.   усадьба Коломенское";
            break;
        case "19":
            text.textContent = "2011 г.   Бутовский лес";
            break;
        case "20":
            text.textContent = "2012 г.   усадьба Архангельское";
            break;
        case "21":
            text.textContent = "2012 г.   Барселона Испания";
            break;
        case "22":
            text.textContent = "2012 г.   Барселона Испания";
            break;
        case "23":
            text.textContent = "2012 г.   Салоу Испания";
            break;
        case "24":
            text.textContent = "2012 г.   гора Монсеррат Испания";
            break;
        case "25":
            text.textContent = "2013 г.   Апатиты";
            break;
        case "26":
            text.textContent = "2013 г.   Апатиты";
            break;
        case "27":
            text.textContent = "2013 г.  Апатиты";
            break;
        case "28":
            text.textContent = "2015 г.   Санкт-Петербург";
            break;
        case "29":
            text.textContent = "2015 г.   Санкт-Петербург";
            break;
        case "30":
            text.textContent = "2016 г.   Казань";
            break;
        case "31":
            text.textContent = "2016 г.   Казань";
            break;
        case "32":
            text.textContent = "2017 г.   Прага Чехия";
            break;
        case "33":
            text.textContent = "2017 г.   Прага Чехия";
            break;
        case "34":
            text.textContent = "2017 г.   Чешский Крумлов Чехия";
            break;
        case "35":
            text.textContent = "2018 г.   Стамбул Турция";
            break;
        case "36":
            text.textContent = "2018 г.   Стамбул Турция";
            break;
        case "37":
            text.textContent = "2018 г.   Стамбул Турция";
            break;
        case "38":
            text.textContent = "2018 г.   Стамбул Турция";
            break;
        case "39":
            text.textContent = "2019 г.   Париж Франция";
            break;
        case "40":
            text.textContent = "2019 г.   замок Амбуаз Франция";
            break;
        case "41":
            text.textContent = "2019 г.   замок Амбуаз Франция";
            break;
        case "42":
            text.textContent = "2019 г.   замок Шенонсо Франция";
            break;
        case "43":
            text.textContent = "2019 г.   замок Шамбор Франция";
            break;
        case "44":
            text.textContent = "2019 г.   Версаль Франция";
            break;
        case "45":
            text.textContent = "2019 г.   Париж Франция";
            break;
        case "46":
            text.textContent = "2019 г.   Руан Франция";
            break;
        default:
            text.textContent = "";
    }     
}
function getAniPic(){
    let picID = event.target.id; 
    showPicture(picID);
    picCurrent = Number(picID);
}
function getNextPic(){
    let picID;
    let bigPic = document.getElementById("bigPicture");
    let pics = document.getElementsByClassName("pic");
    var text = document.getElementById("txt");
    if(picCurrent < pics.length+1){
        picCurrent++;
        if(picCurrent == pics.length+1){
            bigPic.style.visibility = "hidden";
            text.style.visibility = "hidden";
        }
        else {
            bigPic.style.visibility = "visible";
            text.style.visibility = "visible";    
        }
    }
    picID = String(picCurrent);
    showPicture(picID);
}
function getPrevPic(){
    let picID;
    let bigPic = document.getElementById("bigPicture");
    let text = document.getElementById("txt");
    if(picCurrent > 0){
        picCurrent--;
        if(picCurrent == 0){
            bigPic.style.visibility = "hidden";
            text.style.visibility = "hidden";
        }
        else {
            bigPic.style.visibility = "visible";
            text.style.visibility = "visible"; 
        }
    }
    picID = String(picCurrent);
    showPicture(picID);
}
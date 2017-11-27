//document.getElementById('s2').style.width = '60%';
var gekliktHeid = Math.ceil(9*Math.random());
var uitSlag = gekliktHeid*Math.random()*5;
var exportA = document.getElementById('aantalSterren');
var exportW = document.getElementById('waarderingsSterren');
var allStars = document.querySelectorAll('.niks');

function sterInkleuren(Ster_Cijfer, procent) {
    var sterNaam = 's' + Ster_Cijfer;
    procent = Math.min(procent, 100);
    document.getElementById(sterNaam).style.width = procent+'%';
}

function kleurallStars(waarderingsSterren) {
    for(var i=1; i<6; i++) {
        sterInkleuren(i, waarderingsSterren*100);
        waarderingsSterren --;
    }
}

function uitvoeren() {
    exportA.innerHTML = gekliktHeid;
    exportW.innerHTML = Math.ceil(10*uitSlag/gekliktHeid)/10;
    kleurallStars(Math.ceil(10*uitSlag/gekliktHeid)/10);
}

uitvoeren();

function kliks_Verwerken() {
    gekliktHeid ++;
    var Nums = this.getAttribute('data-role');
    uitSlag += parseInt(Nums);
    uitvoeren();
}
for(var i=0; i<allStars.length; i++) {
    allStars[i].addEventListener('click', kliks_Verwerken);
}

// Number 2

var gekliktHeid2 = Math.ceil(9*Math.random());
var uitSlag2 = gekliktHeid2*Math.random()*5;
var exportA2 = document.getElementById('aantalSterren2');
var exportW2 = document.getElementById('waarderingsSterren2');
var allStars2 = document.querySelectorAll('.niks2');

function sterInkleuren2(Ster_Cijfer2, procent2) {
    var sterNaam2 = 'q' + Ster_Cijfer2;
    procent2 = Math.min(procent2, 100);
    document.getElementById(sterNaam2).style.width = procent2+'%';
}

function kleurallStars2(waarderingsSterren2) {
    for(var i=1; i<6; i++) {
        sterInkleuren2(i, waarderingsSterren2*100);
        waarderingsSterren2 --;
    }
}

function uitvoeren2() {
    exportA2.innerHTML = gekliktHeid2;
    exportW2.innerHTML = Math.ceil(10*uitSlag2/gekliktHeid2)/10;
    kleurallStars2(Math.ceil(10*uitSlag2/gekliktHeid2)/10);
}

uitvoeren2();

function kliks_Verwerken2() {
    gekliktHeid2 ++;
    var Nums2 = this.getAttribute('data-role');
    uitSlag2 += parseInt(Nums2);
    uitvoeren2();
}
for(var i=0; i<allStars2.length; i++) {
    allStars2[i].addEventListener('click', kliks_Verwerken2);
}

// Number 3

var gekliktHeid3 = Math.ceil(9*Math.random());
var uitSlag3 = gekliktHeid3*Math.random()*5;
var exportA3 = document.getElementById('aantalSterren3');
var exportW3 = document.getElementById('waarderingsSterren3');
var allStars3 = document.querySelectorAll('.niks3');

function sterInkleuren3(Ster_Cijfer3, procent3) {
    var sterNaam3 = 'w' + Ster_Cijfer3;
    procent3 = Math.min(procent3, 100);
    document.getElementById(sterNaam3).style.width = procent3+'%';
}

function kleurallStars3(waarderingsSterren3) {
    for(var i=1; i<6; i++) {
        sterInkleuren3(i, waarderingsSterren3*100);
        waarderingsSterren3 --;
    }
}

function uitvoeren3() {
    exportA3.innerHTML = gekliktHeid3;
    exportW3.innerHTML = Math.ceil(10*uitSlag3/gekliktHeid3)/10;
    kleurallStars3(Math.ceil(10*uitSlag3/gekliktHeid3)/10);
}

uitvoeren3();

function kliks_Verwerken3() {
    gekliktHeid3 ++;
    var Nums3 = this.getAttribute('data-role');
    uitSlag3 += parseInt(Nums3);
    uitvoeren3();
}
for(var i=0; i<allStars3.length; i++) {
    allStars3[i].addEventListener('click', kliks_Verwerken3);
}

// Number 4

var gekliktHeid4 = Math.ceil(9*Math.random());
var uitSlag4 = gekliktHeid4*Math.random()*5;
var exportA4 = document.getElementById('aantalSterren4');
var exportW4 = document.getElementById('waarderingsSterren4');
var allStars4 = document.querySelectorAll('.niks4');

function sterInkleuren4(Ster_Cijfer4, procent4) {
    var sterNaam4 = 'e' + Ster_Cijfer4;
    procent4 = Math.min(procent4, 100);
    document.getElementById(sterNaam4).style.width = procent4+'%';
}

function kleurallStars4(waarderingsSterren4) {
    for(var i=1; i<6; i++) {
        sterInkleuren4(i, waarderingsSterren4*100);
        waarderingsSterren4 --;
    }
}

function uitvoeren4() {
    exportA4.innerHTML = gekliktHeid4;
    exportW4.innerHTML = Math.ceil(10*uitSlag4/gekliktHeid4)/10;
    kleurallStars4(Math.ceil(10*uitSlag4/gekliktHeid4)/10);
}

uitvoeren4();

function kliks_Verwerken4() {
    gekliktHeid4 ++;
    var Nums4 = this.getAttribute('data-role');
    uitSlag4 += parseInt(Nums4);
    uitvoeren4();
}
for(var i=0; i<allStars4.length; i++) {
    allStars4[i].addEventListener('click', kliks_Verwerken4);
}

// Number 5

var gekliktHeid5 = Math.ceil(9*Math.random());
var uitSlag5 = gekliktHeid5*Math.random()*5;
var exportA5 = document.getElementById('aantalSterren5');
var exportW5 = document.getElementById('waarderingsSterren5');
var allStars5 = document.querySelectorAll('.niks5');

function sterInkleuren5(Ster_Cijfer5, procent5) {
    var sterNaam5 = 'r' + Ster_Cijfer5;
    procent5 = Math.min(procent5, 100);
    document.getElementById(sterNaam5).style.width = procent5+'%';
}

function kleurallStars5(waarderingsSterren5) {
    for(var i=1; i<6; i++) {
        sterInkleuren5(i, waarderingsSterren5*100);
        waarderingsSterren5 --;
    }
}

function uitvoeren5() {
    exportA5.innerHTML = gekliktHeid5;
    exportW5.innerHTML = Math.ceil(10*uitSlag5/gekliktHeid5)/10;
    kleurallStars5(Math.ceil(10*uitSlag5/gekliktHeid5)/10);
}

uitvoeren5();

function kliks_Verwerken5() {
    gekliktHeid5 ++;
    var Nums5 = this.getAttribute('data-role');
    uitSlag5 += parseInt(Nums5);
    uitvoeren5();
}
for(var i=0; i<allStars5.length; i++) {
    allStars5[i].addEventListener('click', kliks_Verwerken5);
}

// Number 6

var gekliktHeid6 = Math.ceil(9*Math.random());
var uitSlag6 = gekliktHeid6*Math.random()*5;
var exportA6 = document.getElementById('aantalSterren6');
var exportW6 = document.getElementById('waarderingsSterren6');
var allStars6 = document.querySelectorAll('.niks6');

function sterInkleuren6(Ster_Cijfer6, procent6) {
    var sterNaam6 = 't' + Ster_Cijfer6;
    procent6 = Math.min(procent6, 100);
    document.getElementById(sterNaam6).style.width = procent6+'%';
}

function kleurallStars6(waarderingsSterren6) {
    for(var i=1; i<6; i++) {
        sterInkleuren6(i, waarderingsSterren6*100);
        waarderingsSterren6 --;
    }
}

function uitvoeren6() {
    exportA6.innerHTML = gekliktHeid6;
    exportW6.innerHTML = Math.ceil(10*uitSlag6/gekliktHeid6)/10;
    kleurallStars6(Math.ceil(10*uitSlag6/gekliktHeid6)/10);
}

uitvoeren6();

function kliks_Verwerken6() {
    gekliktHeid6 ++;
    var Nums6 = this.getAttribute('data-role');
    uitSlag6 += parseInt(Nums6);
    uitvoeren6();
}
for(var i=0; i<allStars6.length; i++) {
    allStars6[i].addEventListener('click', kliks_Verwerken6);
}

// Number 7

var gekliktHeid7 = Math.ceil(9*Math.random());
var uitSlag7 = gekliktHeid7*Math.random()*5;
var exportA7 = document.getElementById('aantalSterren7');
var exportW7 = document.getElementById('waarderingsSterren7');
var allStars7 = document.querySelectorAll('.niks7');

function sterInkleuren7(Ster_Cijfer7, procent7) {
    var sterNaam7 = 'y' + Ster_Cijfer7;
    procent7 = Math.min(procent7, 100);
    document.getElementById(sterNaam7).style.width = procent7+'%';
}

function kleurallStars7(waarderingsSterren7) {
    for(var i=1; i<6; i++) {
        sterInkleuren7(i, waarderingsSterren7*100);
        waarderingsSterren7 --;
    }
}

function uitvoeren7() {
    exportA7.innerHTML = gekliktHeid7;
    exportW7.innerHTML = Math.ceil(10*uitSlag7/gekliktHeid7)/10;
    kleurallStars7(Math.ceil(10*uitSlag7/gekliktHeid7)/10);
}

uitvoeren7();

function kliks_Verwerken7() {
    gekliktHeid7 ++;
    var Nums7 = this.getAttribute('data-role');
    uitSlag7 += parseInt(Nums7);
    uitvoeren7();
}
for(var i=0; i<allStars7.length; i++) {
    allStars7[i].addEventListener('click', kliks_Verwerken7);
}

// Number 8

var gekliktHeid8 = Math.ceil(9*Math.random());
var uitSlag8 = gekliktHeid8*Math.random()*5;
var exportA8 = document.getElementById('aantalSterren8');
var exportW8 = document.getElementById('waarderingsSterren8');
var allStars8 = document.querySelectorAll('.niks8');

function sterInkleuren8(Ster_Cijfer8, procent8) {
    var sterNaam8 = 'u' + Ster_Cijfer8;
    procent8 = Math.min(procent8, 100);
    document.getElementById(sterNaam8).style.width = procent8+'%';
}

function kleurallStars8(waarderingsSterren8) {
    for(var i=1; i<6; i++) {
        sterInkleuren8(i, waarderingsSterren8*100);
        waarderingsSterren8 --;
    }
}

function uitvoeren8() {
    exportA8.innerHTML = gekliktHeid8;
    exportW8.innerHTML = Math.ceil(10*uitSlag8/gekliktHeid8)/10;
    kleurallStars8(Math.ceil(10*uitSlag8/gekliktHeid8)/10);
}

uitvoeren8();

function kliks_Verwerken8() {
    gekliktHeid8 ++;
    var Nums8 = this.getAttribute('data-role');
    uitSlag8 += parseInt(Nums8);
    uitvoeren8();
}
for(var i=0; i<allStars8.length; i++) {
    allStars8[i].addEventListener('click', kliks_Verwerken8);
}

// Number 9

var gekliktHeid9 = Math.ceil(9*Math.random());
var uitSlag9 = gekliktHeid9*Math.random()*5;
var exportA9 = document.getElementById('aantalSterren9');
var exportW9 = document.getElementById('waarderingsSterren9');
var allStars9 = document.querySelectorAll('.niks9');

function sterInkleuren9(Ster_Cijfer9, procent9) {
    var sterNaam9 = 'i' + Ster_Cijfer9;
    procent9 = Math.min(procent9, 100);
    document.getElementById(sterNaam9).style.width = procent9+'%';
}

function kleurallStars9(waarderingsSterren9) {
    for(var i=1; i<6; i++) {
        sterInkleuren9(i, waarderingsSterren9*100);
        waarderingsSterren9 --;
    }
}

function uitvoeren9() {
    exportA9.innerHTML = gekliktHeid9;
    exportW9.innerHTML = Math.ceil(10*uitSlag9/gekliktHeid9)/10;
    kleurallStars9(Math.ceil(10*uitSlag9/gekliktHeid9)/10);
}

uitvoeren9();

function kliks_Verwerken9() {
    gekliktHeid9 ++;
    var Nums9 = this.getAttribute('data-role');
    uitSlag9 += parseInt(Nums9);
    uitvoeren9();
}
for(var i=0; i<allStars9.length; i++) {
    allStars9[i].addEventListener('click', kliks_Verwerken9);
}

// Number 10

var gekliktHeid10 = Math.ceil(9*Math.random());
var uitSlag10 = gekliktHeid10*Math.random()*5;
var exportA10 = document.getElementById('aantalSterren10');
var exportW10 = document.getElementById('waarderingsSterren10');
var allStars10 = document.querySelectorAll('.niks10');

function sterInkleuren10(Ster_Cijfer10, procent10) {
    var sterNaam10 = 'o' + Ster_Cijfer10;
    procent10 = Math.min(procent10, 100);
    document.getElementById(sterNaam10).style.width = procent10+'%';
}

function kleurallStars10(waarderingsSterren10) {
    for(var i=1; i<6; i++) {
        sterInkleuren10(i, waarderingsSterren10*100);
        waarderingsSterren10 --;
    }
}

function uitvoeren10() {
    exportA10.innerHTML = gekliktHeid10;
    exportW10.innerHTML = Math.ceil(10*uitSlag10/gekliktHeid10)/10;
    kleurallStars10(Math.ceil(10*uitSlag10/gekliktHeid10)/10);
}

uitvoeren10();

function kliks_Verwerken10() {
    gekliktHeid10 ++;
    var Nums10 = this.getAttribute('data-role');
    uitSlag10 += parseInt(Nums10);
    uitvoeren10();
}
for(var i=0; i<allStars10.length; i++) {
    allStars10[i].addEventListener('click', kliks_Verwerken10);
}

// Number 11

var gekliktHeid11 = Math.ceil(9*Math.random());
var uitSlag11 = gekliktHeid3*Math.random()*5;
var exportA11 = document.getElementById('aantalSterren11');
var exportW11 = document.getElementById('waarderingsSterren11');
var allStars11 = document.querySelectorAll('.niks11');

function sterInkleuren11(Ster_Cijfer11, procent11) {
    var sterNaam11 = 'p' + Ster_Cijfer11;
    procent11 = Math.min(procent11, 100);
    document.getElementById(sterNaam11).style.width = procent11+'%';
}

function kleurallStars11(waarderingsSterren11) {
    for(var i=1; i<6; i++) {
        sterInkleuren11(i, waarderingsSterren11*100);
        waarderingsSterren11 --;
    }
}

function uitvoeren11() {
    exportA11.innerHTML = gekliktHeid11;
    exportW11.innerHTML = Math.ceil(10*uitSlag11/gekliktHeid11)/10;
    kleurallStars11(Math.ceil(10*uitSlag11/gekliktHeid11)/10);
}

uitvoeren11();

function kliks_Verwerken11() {
    gekliktHeid11 ++;
    var Nums11 = this.getAttribute('data-role');
    uitSlag11 += parseInt(Nums11);
    uitvoeren11();
}
for(var i=0; i<allStars11.length; i++) {
    allStars11[i].addEventListener('click', kliks_Verwerken11);
}

// Number 12

var gekliktHeid12 = Math.ceil(9*Math.random());
var uitSlag12 = gekliktHeid12*Math.random()*5;
var exportA12 = document.getElementById('aantalSterren12');
var exportW12 = document.getElementById('waarderingsSterren12');
var allStars12 = document.querySelectorAll('.niks12');

function sterInkleuren12(Ster_Cijfer12, procent12) {
    var sterNaam12 = 'a' + Ster_Cijfer12;
    procent12 = Math.min(procent12, 100);
    document.getElementById(sterNaam12).style.width = procent12+'%';
}

function kleurallStars12(waarderingsSterren12) {
    for(var i=1; i<6; i++) {
        sterInkleuren12(i, waarderingsSterren12*100);
        waarderingsSterren12 --;
    }
}

function uitvoeren12() {
    exportA12.innerHTML = gekliktHeid12;
    exportW12.innerHTML = Math.ceil(10*uitSlag12/gekliktHeid12)/10;
    kleurallStars12(Math.ceil(10*uitSlag12/gekliktHeid12)/10);
}

uitvoeren12();

function kliks_Verwerken12() {
    gekliktHeid12 ++;
    var Nums12 = this.getAttribute('data-role');
    uitSlag12 += parseInt(Nums12);
    uitvoeren12();
}
for(var i=0; i<allStars12.length; i++) {
    allStars12[i].addEventListener('click', kliks_Verwerken12);
}

// Number 13

var gekliktHeid13 = Math.ceil(9*Math.random());
var uitSlag13 = gekliktHeid13*Math.random()*5;
var exportA13 = document.getElementById('aantalSterren13');
var exportW13 = document.getElementById('waarderingsSterren13');
var allStars13 = document.querySelectorAll('.niks13');

function sterInkleuren13(Ster_Cijfer13, procent13) {
    var sterNaam13 = 'd' + Ster_Cijfer13;
    procent13 = Math.min(procent13, 100);
    document.getElementById(sterNaam13).style.width = procent13+'%';
}

function kleurallStars13(waarderingsSterren13) {
    for(var i=1; i<6; i++) {
        sterInkleuren13(i, waarderingsSterren13*100);
        waarderingsSterren13 --;
    }
}

function uitvoeren13() {
    exportA13.innerHTML = gekliktHeid13;
    exportW13.innerHTML = Math.ceil(10*uitSlag13/gekliktHeid13)/10;
    kleurallStars13(Math.ceil(10*uitSlag13/gekliktHeid13)/10);
}

uitvoeren13();

function kliks_Verwerken13() {
    gekliktHeid13 ++;
    var Nums13 = this.getAttribute('data-role');
    uitSlag13 += parseInt(Nums13);
    uitvoeren13();
}
for(var i=0; i<allStars13.length; i++) {
    allStars13[i].addEventListener('click', kliks_Verwerken13);
}

// Number 14

var gekliktHeid14 = Math.ceil(9*Math.random());
var uitSlag14 = gekliktHeid14*Math.random()*5;
var exportA14 = document.getElementById('aantalSterren14');
var exportW14 = document.getElementById('waarderingsSterren14');
var allStars14 = document.querySelectorAll('.niks14');

function sterInkleuren14(Ster_Cijfer14, procent14) {
    var sterNaam14 = 'f' + Ster_Cijfer14;
    procent14 = Math.min(procent14, 100);
    document.getElementById(sterNaam14).style.width = procent14+'%';
}

function kleurallStars14(waarderingsSterren14) {
    for(var i=1; i<6; i++) {
        sterInkleuren14(i, waarderingsSterren14*100);
        waarderingsSterren14 --;
    }
}

function uitvoeren14() {
    exportA14.innerHTML = gekliktHeid14;
    exportW14.innerHTML = Math.ceil(10*uitSlag14/gekliktHeid14)/10;
    kleurallStars14(Math.ceil(10*uitSlag14/gekliktHeid14)/10);
}

uitvoeren14();

function kliks_Verwerken14() {
    gekliktHeid14 ++;
    var Nums14 = this.getAttribute('data-role');
    uitSlag14 += parseInt(Nums14);
    uitvoeren14();
}
for(var i=0; i<allStars14.length; i++) {
    allStars14[i].addEventListener('click', kliks_Verwerken14);
}

// Number 15

var gekliktHeid15 = Math.ceil(9*Math.random());
var uitSlag15 = gekliktHeid15*Math.random()*5;
var exportA15 = document.getElementById('aantalSterren15');
var exportW15 = document.getElementById('waarderingsSterren15');
var allStars15 = document.querySelectorAll('.niks15');

function sterInkleuren15(Ster_Cijfer15, procent15) {
    var sterNaam15 = 'g' + Ster_Cijfer15;
    procent15 = Math.min(procent15, 100);
    document.getElementById(sterNaam15).style.width = procent15+'%';
}

function kleurallStars15(waarderingsSterren15) {
    for(var i=1; i<6; i++) {
        sterInkleuren15(i, waarderingsSterren15*100);
        waarderingsSterren15 --;
    }
}

function uitvoeren15() {
    exportA15.innerHTML = gekliktHeid15;
    exportW15.innerHTML = Math.ceil(10*uitSlag15/gekliktHeid15)/10;
    kleurallStars15(Math.ceil(10*uitSlag15/gekliktHeid15)/10);
}

uitvoeren15();

function kliks_Verwerken15() {
    gekliktHeid15 ++;
    var Nums15 = this.getAttribute('data-role');
    uitSlag15 += parseInt(Nums15);
    uitvoeren15();
}
for(var i=0; i<allStars15.length; i++) {
    allStars15[i].addEventListener('click', kliks_Verwerken15);
}

// Number 16

var gekliktHeid16 = Math.ceil(9*Math.random());
var uitSlag16 = gekliktHeid16*Math.random()*5;
var exportA16 = document.getElementById('aantalSterren16');
var exportW16 = document.getElementById('waarderingsSterren16');
var allStars16 = document.querySelectorAll('.niks16');

function sterInkleuren16(Ster_Cijfer16, procent16) {
    var sterNaam16 = 'h' + Ster_Cijfer16;
    procent16 = Math.min(procent16, 100);
    document.getElementById(sterNaam16).style.width = procent16+'%';
}

function kleurallStars16(waarderingsSterren16) {
    for(var i=1; i<6; i++) {
        sterInkleuren16(i, waarderingsSterren16*100);
        waarderingsSterren16 --;
    }
}

function uitvoeren16() {
    exportA16.innerHTML = gekliktHeid16;
    exportW16.innerHTML = Math.ceil(10*uitSlag16/gekliktHeid16)/10;
    kleurallStars16(Math.ceil(10*uitSlag16/gekliktHeid16)/10);
}

uitvoeren16();

function kliks_Verwerken16() {
    gekliktHeid16 ++;
    var Nums16 = this.getAttribute('data-role');
    uitSlag16 += parseInt(Nums16);
    uitvoeren16();
}
for(var i=0; i<allStars16.length; i++) {
    allStars16[i].addEventListener('click', kliks_Verwerken16);
}

// Number 17

var gekliktHeid17 = Math.ceil(9*Math.random());
var uitSlag17 = gekliktHeid17*Math.random()*5;
var exportA17 = document.getElementById('aantalSterren17');
var exportW17 = document.getElementById('waarderingsSterren17');
var allStars17 = document.querySelectorAll('.niks17');

function sterInkleuren17(Ster_Cijfer17, procent17) {
    var sterNaam17 = 'j' + Ster_Cijfer17;
    procent17 = Math.min(procent17, 100);
    document.getElementById(sterNaam17).style.width = procent17+'%';
}

function kleurallStars17(waarderingsSterren17) {
    for(var i=1; i<6; i++) {
        sterInkleuren17(i, waarderingsSterren17*100);
        waarderingsSterren17 --;
    }
}

function uitvoeren17() {
    exportA17.innerHTML = gekliktHeid17;
    exportW17.innerHTML = Math.ceil(10*uitSlag17/gekliktHeid17)/10;
    kleurallStars17(Math.ceil(10*uitSlag17/gekliktHeid17)/10);
}

uitvoeren17();

function kliks_Verwerken17() {
    gekliktHeid17 ++;
    var Nums17 = this.getAttribute('data-role');
    uitSlag17 += parseInt(Nums17);
    uitvoeren17();
}
for(var i=0; i<allStars17.length; i++) {
    allStars17[i].addEventListener('click', kliks_Verwerken17);
}

// Number 18

var gekliktHeid18 = Math.ceil(9*Math.random());
var uitSlag18 = gekliktHeid18*Math.random()*5;
var exportA18 = document.getElementById('aantalSterren18');
var exportW18 = document.getElementById('waarderingsSterren18');
var allStars18 = document.querySelectorAll('.niks18');

function sterInkleuren18(Ster_Cijfer18, procent18) {
    var sterNaam18 = 'k' + Ster_Cijfer18;
    procent18 = Math.min(procent18, 100);
    document.getElementById(sterNaam18).style.width = procent18+'%';
}

function kleurallStars18(waarderingsSterren18) {
    for(var i=1; i<6; i++) {
        sterInkleuren18(i, waarderingsSterren18*100);
        waarderingsSterren18 --;
    }
}

function uitvoeren18() {
    exportA18.innerHTML = gekliktHeid18;
    exportW18.innerHTML = Math.ceil(10*uitSlag18/gekliktHeid18)/10;
    kleurallStars18(Math.ceil(10*uitSlag18/gekliktHeid18)/10);
}

uitvoeren18();

function kliks_Verwerken18() {
    gekliktHeid18 ++;
    var Nums18 = this.getAttribute('data-role');
    uitSlag18 += parseInt(Nums18);
    uitvoeren18();
}
for(var i=0; i<allStars18.length; i++) {
    allStars18[i].addEventListener('click', kliks_Verwerken18);
}

// Number 19

var gekliktHeid19 = Math.ceil(9*Math.random());
var uitSlag19 = gekliktHeid19*Math.random()*5;
var exportA19 = document.getElementById('aantalSterren19');
var exportW19 = document.getElementById('waarderingsSterren19');
var allStars19 = document.querySelectorAll('.niks19');

function sterInkleuren19(Ster_Cijfer19, procent19) {
    var sterNaam19 = 'l' + Ster_Cijfer19;
    procent19 = Math.min(procent19, 100);
    document.getElementById(sterNaam19).style.width = procent19+'%';
}

function kleurallStars19(waarderingsSterren19) {
    for(var i=1; i<6; i++) {
        sterInkleuren19(i, waarderingsSterren19*100);
        waarderingsSterren19 --;
    }
}

function uitvoeren19() {
    exportA19.innerHTML = gekliktHeid19;
    exportW19.innerHTML = Math.ceil(10*uitSlag19/gekliktHeid19)/10;
    kleurallStars19(Math.ceil(10*uitSlag19/gekliktHeid19)/10);
}

uitvoeren19();

function kliks_Verwerken19() {
    gekliktHeid19 ++;
    var Nums19 = this.getAttribute('data-role');
    uitSlag19 += parseInt(Nums19);
    uitvoeren19();
}
for(var i=0; i<allStars19.length; i++) {
    allStars19[i].addEventListener('click', kliks_Verwerken19);
}

// Number 20

var gekliktHeid20 = Math.ceil(9*Math.random());
var uitSlag20 = gekliktHeid20*Math.random()*5;
var exportA20 = document.getElementById('aantalSterren20');
var exportW20 = document.getElementById('waarderingsSterren20');
var allStars20 = document.querySelectorAll('.niks20');

function sterInkleuren20(Ster_Cijfer20, procent20) {
    var sterNaam20 = 'z' + Ster_Cijfer20;
    procent20 = Math.min(procent20, 100);
    document.getElementById(sterNaam20).style.width = procent20+'%';
}

function kleurallStars20(waarderingsSterren20) {
    for(var i=1; i<6; i++) {
        sterInkleuren20(i, waarderingsSterren20*100);
        waarderingsSterren20 --;
    }
}

function uitvoeren20() {
    exportA20.innerHTML = gekliktHeid20;
    exportW20.innerHTML = Math.ceil(10*uitSlag20/gekliktHeid20)/10;
    kleurallStars20(Math.ceil(10*uitSlag20/gekliktHeid20)/10);
}

uitvoeren20();

function kliks_Verwerken20() {
    gekliktHeid20 ++;
    var Nums20 = this.getAttribute('data-role');
    uitSlag20 += parseInt(Nums20);
    uitvoeren20();
}
for(var i=0; i<allStars20.length; i++) {
    allStars20[i].addEventListener('click', kliks_Verwerken20);
}

// Number 21

var gekliktHeid21 = Math.ceil(9*Math.random());
var uitSlag21 = gekliktHeid21*Math.random()*5;
var exportA21 = document.getElementById('aantalSterren21');
var exportW21 = document.getElementById('waarderingsSterren21');
var allStars21 = document.querySelectorAll('.niks21');

function sterInkleuren21(Ster_Cijfer21, procent21) {
    var sterNaam21 = 'x' + Ster_Cijfer21;
    procent21 = Math.min(procent21, 100);
    document.getElementById(sterNaam21).style.width = procent21+'%';
}

function kleurallStars21(waarderingsSterren21) {
    for(var i=1; i<6; i++) {
        sterInkleuren21(i, waarderingsSterren21*100);
        waarderingsSterren21 --;
    }
}

function uitvoeren21() {
    exportA21.innerHTML = gekliktHeid21;
    exportW21.innerHTML = Math.ceil(10*uitSlag21/gekliktHeid21)/10;
    kleurallStars21(Math.ceil(10*uitSlag21/gekliktHeid21)/10);
}

uitvoeren21();

function kliks_Verwerken21() {
    gekliktHeid21 ++;
    var Nums21 = this.getAttribute('data-role');
    uitSlag21 += parseInt(Nums21);
    uitvoeren21();
}
for(var i=0; i<allStars21.length; i++) {
    allStars21[i].addEventListener('click', kliks_Verwerken21);
}

// Number 22

var gekliktHeid22 = Math.ceil(9*Math.random());
var uitSlag22 = gekliktHeid22*Math.random()*5;
var exportA22 = document.getElementById('aantalSterren22');
var exportW22 = document.getElementById('waarderingsSterren22');
var allStars22 = document.querySelectorAll('.niks22');

function sterInkleuren22(Ster_Cijfer22, procent22) {
    var sterNaam22 = 'c' + Ster_Cijfer22;
    procent22 = Math.min(procent22, 100);
    document.getElementById(sterNaam22).style.width = procent22+'%';
}

function kleurallStars22(waarderingsSterren22) {
    for(var i=1; i<6; i++) {
        sterInkleuren22(i, waarderingsSterren22*100);
        waarderingsSterren22 --;
    }
}

function uitvoeren22() {
    exportA22.innerHTML = gekliktHeid22;
    exportW22.innerHTML = Math.ceil(10*uitSlag22/gekliktHeid22)/10;
    kleurallStars22(Math.ceil(10*uitSlag22/gekliktHeid22)/10);
}

uitvoeren22();

function kliks_Verwerken22() {
    gekliktHeid22 ++;
    var Nums22 = this.getAttribute('data-role');
    uitSlag22 += parseInt(Nums22);
    uitvoeren22();
}
for(var i=0; i<allStars22.length; i++) {
    allStars22[i].addEventListener('click', kliks_Verwerken22);
}

// Number 23

var gekliktHeid23 = Math.ceil(9*Math.random());
var uitSlag23 = gekliktHeid23*Math.random()*5;
var exportA23 = document.getElementById('aantalSterren23');
var exportW23 = document.getElementById('waarderingsSterren23');
var allStars23 = document.querySelectorAll('.niks23');

function sterInkleuren23(Ster_Cijfer23, procent23) {
    var sterNaam23 = 'v' + Ster_Cijfer23;
    procent23 = Math.min(procent23, 100);
    document.getElementById(sterNaam23).style.width = procent23+'%';
}

function kleurallStars23(waarderingsSterren23) {
    for(var i=1; i<6; i++) {
        sterInkleuren23(i, waarderingsSterren23*100);
        waarderingsSterren23 --;
    }
}

function uitvoeren23() {
    exportA23.innerHTML = gekliktHeid23;
    exportW23.innerHTML = Math.ceil(10*uitSlag23/gekliktHeid23)/10;
    kleurallStars23(Math.ceil(10*uitSlag23/gekliktHeid23)/10);
}

uitvoeren23();

function kliks_Verwerken23() {
    gekliktHeid23 ++;
    var Nums23 = this.getAttribute('data-role');
    uitSlag23 += parseInt(Nums23);
    uitvoeren23();
}
for(var i=0; i<allStars23.length; i++) {
    allStars23[i].addEventListener('click', kliks_Verwerken23);
}

// Number 24

var gekliktHeid24 = Math.ceil(9*Math.random());
var uitSlag24 = gekliktHeid24*Math.random()*5;
var exportA24 = document.getElementById('aantalSterren24');
var exportW24 = document.getElementById('waarderingsSterren24');
var allStars24 = document.querySelectorAll('.niks24');

function sterInkleuren24(Ster_Cijfer24, procent24) {
    var sterNaam24 = 'b' + Ster_Cijfer24;
    procent24 = Math.min(procent24, 100);
    document.getElementById(sterNaam24).style.width = procent24+'%';
}

function kleurallStars24(waarderingsSterren24) {
    for(var i=1; i<6; i++) {
        sterInkleuren24(i, waarderingsSterren24*100);
        waarderingsSterren24 --;
    }
}

function uitvoeren24() {
    exportA24.innerHTML = gekliktHeid24;
    exportW24.innerHTML = Math.ceil(10*uitSlag24/gekliktHeid24)/10;
    kleurallStars24(Math.ceil(10*uitSlag24/gekliktHeid24)/10);
}

uitvoeren24();

function kliks_Verwerken24() {
    gekliktHeid24 ++;
    var Nums24 = this.getAttribute('data-role');
    uitSlag24 += parseInt(Nums24);
    uitvoeren24();
}
for(var i=0; i<allStars24.length; i++) {
    allStars24[i].addEventListener('click', kliks_Verwerken24);
}

// Number 25

var gekliktHeid25 = Math.ceil(9*Math.random());
var uitSlag25 = gekliktHeid25*Math.random()*5;
var exportA25 = document.getElementById('aantalSterren25');
var exportW25 = document.getElementById('waarderingsSterren25');
var allStars25 = document.querySelectorAll('.niks25');

function sterInkleuren25(Ster_Cijfer25, procent25) {
    var sterNaam25 = 'n' + Ster_Cijfer25;
    procent25 = Math.min(procent25, 100);
    document.getElementById(sterNaam25).style.width = procent25+'%';
}

function kleurallStars25(waarderingsSterren25) {
    for(var i=1; i<6; i++) {
        sterInkleuren25(i, waarderingsSterren25*100);
        waarderingsSterren25 --;
    }
}

function uitvoeren25() {
    exportA25.innerHTML = gekliktHeid25;
    exportW25.innerHTML = Math.ceil(10*uitSlag25/gekliktHeid25)/10;
    kleurallStars25(Math.ceil(10*uitSlag25/gekliktHeid25)/10);
}

uitvoeren25();

function kliks_Verwerken25() {
    gekliktHeid25 ++;
    var Nums25 = this.getAttribute('data-role');
    uitSlag25 += parseInt(Nums25);
    uitvoeren25();
}
for(var i=0; i<allStars25.length; i++) {
    allStars25[i].addEventListener('click', kliks_Verwerken25);
}

// Number 26

var gekliktHeid26 = Math.ceil(9*Math.random());
var uitSlag26 = gekliktHeid26*Math.random()*5;
var exportA26 = document.getElementById('aantalSterren26');
var exportW26 = document.getElementById('waarderingsSterren26');
var allStars26 = document.querySelectorAll('.niks26');

function sterInkleuren26(Ster_Cijfer26, procent26) {
    var sterNaam26 = 'm' + Ster_Cijfer26;
    procent26 = Math.min(procent26, 100);
    document.getElementById(sterNaam26).style.width = procent26+'%';
}

function kleurallStars26(waarderingsSterren26) {
    for(var i=1; i<6; i++) {
        sterInkleuren26(i, waarderingsSterren26*100);
        waarderingsSterren26 --;
    }
}

function uitvoeren26() {
    exportA26.innerHTML = gekliktHeid26;
    exportW26.innerHTML = Math.ceil(10*uitSlag26/gekliktHeid26)/10;
    kleurallStars26(Math.ceil(10*uitSlag26/gekliktHeid26)/10);
}

uitvoeren26();

function kliks_Verwerken26() {
    gekliktHeid26 ++;
    var Nums26 = this.getAttribute('data-role');
    uitSlag26 += parseInt(Nums26);
    uitvoeren26();
}
for(var i=0; i<allStars26.length; i++) {
    allStars26[i].addEventListener('click', kliks_Verwerken26);
}

// Number 27

var gekliktHeid27 = Math.ceil(9*Math.random());
var uitSlag27 = gekliktHeid27*Math.random()*5;
var exportA27 = document.getElementById('aantalSterren27');
var exportW27 = document.getElementById('waarderingsSterren27');
var allStars27 = document.querySelectorAll('.niks27');

function sterInkleuren27(Ster_Cijfer27, procent27) {
    var sterNaam27 = 'mq' + Ster_Cijfer27;
    procent27 = Math.min(procent27, 100);
    document.getElementById(sterNaam27).style.width = procent27+'%';
}

function kleurallStars27(waarderingsSterren27) {
    for(var i=1; i<6; i++) {
        sterInkleuren27(i, waarderingsSterren27*100);
        waarderingsSterren27 --;
    }
}

function uitvoeren27() {
    exportA27.innerHTML = gekliktHeid27;
    exportW27.innerHTML = Math.ceil(10*uitSlag27/gekliktHeid27)/10;
    kleurallStars27(Math.ceil(10*uitSlag27/gekliktHeid27)/10);
}

uitvoeren27();

function kliks_Verwerken27() {
    gekliktHeid27 ++;
    var Nums27 = this.getAttribute('data-role');
    uitSlag27 += parseInt(Nums27);
    uitvoeren27();
}
for(var i=0; i<allStars27.length; i++) {
    allStars27[i].addEventListener('click', kliks_Verwerken27);
}

// Number 28

var gekliktHeid28 = Math.ceil(9*Math.random());
var uitSlag28 = gekliktHeid28*Math.random()*5;
var exportA28 = document.getElementById('aantalSterren28');
var exportW28 = document.getElementById('waarderingsSterren28');
var allStars28 = document.querySelectorAll('.niks28');

function sterInkleuren28(Ster_Cijfer28, procent28) {
    var sterNaam28 = 'mw' + Ster_Cijfer28;
    procent28 = Math.min(procent28, 100);
    document.getElementById(sterNaam28).style.width = procent28+'%';
}

function kleurallStars28(waarderingsSterren28) {
    for(var i=1; i<6; i++) {
        sterInkleuren28(i, waarderingsSterren28*100);
        waarderingsSterren28 --;
    }
}

function uitvoeren28() {
    exportA28.innerHTML = gekliktHeid28;
    exportW28.innerHTML = Math.ceil(10*uitSlag28/gekliktHeid28)/10;
    kleurallStars28(Math.ceil(10*uitSlag28/gekliktHeid28)/10);
}

uitvoeren28();

function kliks_Verwerken28() {
    gekliktHeid28 ++;
    var Nums28 = this.getAttribute('data-role');
    uitSlag28 += parseInt(Nums28);
    uitvoeren28();
}
for(var i=0; i<allStars28.length; i++) {
    allStars28[i].addEventListener('click', kliks_Verwerken28);
}
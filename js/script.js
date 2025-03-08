/**
 * Created by gagan on 8/6/16.
 */
var count = 0;
var sqr1 = [45, 45, 0];
var sqr2 = [45, 135, 0];
var sqr3 = [45, 135, 0];
var sqr4 = [45, 45, 0];

function rotateX(){
    var sqr_1=document.getElementById("sqr-1");
    var sqr_2=document.getElementById("sqr-2");
    var sqr_3=document.getElementById("sqr-3");
    var sqr_4=document.getElementById("sqr-4");

    sqr1[0] = sqr1[0] + 90;

    sqr2[0] = sqr2[0] + 90;

    sqr3[0] = sqr3[0] + 90;

    sqr4[0] = sqr4[0] + 90;

    sqr_1.style.transform = "rotateX("+sqr1[0]+"deg) rotateY("+sqr1[1]+"deg) rotatez("+sqr1[2]+"deg)";
    sqr_2.style.transform = "rotateX("+sqr2[0]+"deg) rotateY("+sqr2[1]+"deg) rotatez("+sqr2[2]+"deg)";
    sqr_3.style.transform = "rotateX("+sqr3[0]+"deg) rotateY("+sqr3[1]+"deg) rotatez("+sqr3[2]+"deg)";
    sqr_4.style.transform = "rotateX("+sqr4[0]+"deg) rotateY("+sqr4[1]+"deg) rotatez("+sqr4[2]+"deg)";
    //sqr_2.style.marginTop = "52px";
    if(count/2 == 0){
        sqr_2.style.marginTop = "-52px";
        sqr_4.style.marginTop = "-52px";
        count++;
    }else{
        sqr_2.style.marginTop = "52px";
        sqr_4.style.marginTop = "52px";
        count++;
    }
    //sqr_4.style.marginTop = "52px";
}

function rotateY(){
    var sqr_1=document.getElementById("sqr-1");
    var sqr_2=document.getElementById("sqr-2");
    var sqr_3=document.getElementById("sqr-3");
    var sqr_4=document.getElementById("sqr-4");

    sqr1[1] = sqr1[1] + 90;

    sqr2[1] = sqr2[1] + 90;

    sqr3[1] = sqr3[1] + 90;

    sqr4[1] = sqr4[1] + 90;

    sqr_1.style.transform = "rotateX("+sqr1[0]+"deg) rotateY("+sqr1[1]+"deg) rotatez("+sqr1[2]+"deg)";
    sqr_2.style.transform = "rotateX("+sqr2[0]+"deg) rotateY("+sqr2[1]+"deg) rotatez("+sqr2[2]+"deg)";
    sqr_3.style.transform = "rotateX("+sqr3[0]+"deg) rotateY("+sqr3[1]+"deg) rotatez("+sqr3[2]+"deg)";
    sqr_4.style.transform = "rotateX("+sqr4[0]+"deg) rotateY("+sqr4[1]+"deg) rotatez("+sqr4[2]+"deg)";
    sqr_1.style.marginTop = "18px";
    sqr_3.style.marginTop = "18px";
}

function rotateZ(){
    var sqr_1=document.getElementById("sqr-1");
    var sqr_2=document.getElementById("sqr-2");
    var sqr_3=document.getElementById("sqr-3");
    var sqr_4=document.getElementById("sqr-4");

    sqr1[2] = sqr1[2] + 90;

    sqr2[2] = sqr2[2] + 90;

    sqr3[2] = sqr3[2] + 90;

    sqr4[2] = sqr4[2] + 90;

    sqr_1.style.transform = "rotateX("+sqr1[0]+"deg) rotateY("+sqr1[1]+"deg) rotatez("+sqr1[2]+"deg)";
    sqr_2.style.transform = "rotateX("+sqr2[0]+"deg) rotateY("+sqr2[1]+"deg) rotatez("+sqr2[2]+"deg)";
    sqr_3.style.transform = "rotateX("+sqr3[0]+"deg) rotateY("+sqr3[1]+"deg) rotatez("+sqr3[2]+"deg)";
    sqr_4.style.transform = "rotateX("+sqr4[0]+"deg) rotateY("+sqr4[1]+"deg) rotatez("+sqr4[2]+"deg)";
    sqr_1.style.marginTop = "18px";
    sqr_3.style.marginTop = "18px";
}

$(document).ready(function() { 
    $(".capture-btn").click(function() { 
        html2canvas($("#posts-div"), {
            onrendered: function(canvas) {
                theCanvas = canvas;


                canvas.toBlob(function(blob) {
                    saveAs(blob, "Dashboard.png"); 
                });
            }
        });
    });
});
/* document.getElementById('yr');
document.getElementsByClassName('asdad');
document.getElementsByTagName('br');
document.querySelector('.ckassName');
document.querySelectorAll('div'); */


document.getElementById('burger').onclick = function(){
    addMenu();
};

function addMenu(){
    document.getElementById('menu').classList.toggle('show');
};

/** Add Slider */

setInterval(function(){
    if(document.querySelectorAll('.owl-dot')[0].className === "owl-dot active"){
        document.getElementById("container1").classList.remove('bgc2');
        document.getElementById("container1").classList.add('bgc1');
        document.getElementById("container1").classList.remove('bgc3');
        document.getElementById("container1").classList.remove('bgc4');
    } else if(document.querySelectorAll('.owl-dot')[1].className === "owl-dot active"){
        document.getElementById("container1").classList.remove('bgc1');
        document.getElementById("container1").classList.add('bgc2');
        document.getElementById("container1").classList.remove('bgc3');
        document.getElementById("container1").classList.remove('bgc4');
    } else if (document.querySelectorAll('.owl-dot')[2].className === "owl-dot active") {
        document.getElementById("container1").classList.remove('bgc1');
        document.getElementById("container1").classList.remove('bgc2');
        document.getElementById("container1").classList.remove('bgc4');
        document.getElementById("container1").classList.add('bgc3');
    } else if (document.querySelectorAll('.owl-dot')[3].className === "owl-dot active") {
        document.getElementById("container1").classList.remove('bgc1');
        document.getElementById("container1").classList.remove('bgc2');
        document.getElementById("container1").classList.remove('bgc3');
        document.getElementById("container1").classList.add('bgc4')
    }
},10);
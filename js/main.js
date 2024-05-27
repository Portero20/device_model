document.addEventListener('DOMContentLoaded', () => {
    const deviceInfoElement = document.getElementById('deviceInfo');
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    function getDeviceModel() {
        let model = 'Dispositivo desconocido';

        if (/windows phone/i.test(userAgent)) {
            model = 'Windows Phone';
        } else if (/android/i.test(userAgent)) {
            model = 'Android';
            const androidMatch = userAgent.match(/Android\s+([\d.]+);.*;\s+([\w\s]+)\sBuild/i);
            if (androidMatch) {
                model += ` (Modelo: ${androidMatch[2]})`;
            }
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            model = 'iOS';
            const iosMatch = userAgent.match(/(iPhone|iPad|iPod)\s+([\w\s]+)\s/i);
            if (iosMatch) {
                model += ` (Modelo: ${iosMatch[2]})`;
            }
        } else if (/Macintosh/i.test(userAgent)) {
            model = 'Mac';
        } else if (/Windows/i.test(userAgent)) {
            model = 'Windows';
        } else if (/Linux/i.test(userAgent)) {
            model = 'Linux';
        }

        return model;
    }

    const deviceModel = getDeviceModel();
    deviceInfoElement.textContent = `Estás utilizando: ${deviceModel}`;
});

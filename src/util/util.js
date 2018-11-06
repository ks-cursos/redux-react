function leftPad(number) {
    const pad = '00';
    return pad.substring(0, pad.length - number.length) + number;
}
export function formattedTime(secs) {
    const minutes = parseInt(secs / 60, 10);
    const seconds = parseInt(secs % 60);
    //return leftPad(minutes.toString()) +':' +leftPad(seconds.toString())
    return `${minutes} : ${leftPad(seconds.toString())}`
}
// --- Validar document is fullscreen
export function isFullScreen(document) {
    return document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen;
}
export function requestFullScreen(element) {
    try { element.requestFullscreen() } catch (e) {
        try { element.webkitRequestFullscreen() } catch (e) {
            try { element.mozRequestFullscreen() } catch (e) {
                try { element.msRequestFullscreen() } catch (e) {
                    console.log(e)
                }
            }
        }
    }
}
export function exitFullScreen(document) {
    try { document.exitFullscreen() } catch (e) {
        try { document.webkitExitFullscreen() } catch (e) {
            try { document.mozCancelFullscreen() } catch (e) {
                try { document.msExitFullscreen() } catch (e) {
                    console.log(e)
                }
            }
        }
    }
}

var supportsOrientationChange = "onorientationchange" in window,
orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function () {
if (window.orientation == 0) {
    document.getElementById('portrait').style.display = '';
    document.getElementById('landscape').style.display = 'none';
} else if (window.orientation == 90) {
    document.getElementById('portrait').style.display = 'none';
    document.getElementById('landscape').style.display = '';
}
}, false);

if (window.orientation == 0) {
document.getElementById('portrait').style.display = '';
document.getElementById('landscape').style.display = 'none';
} else if (window.orientation == 90) {
document.getElementById('portrait').style.display = 'none';
document.getElementById('landscape').style.display = '';
}
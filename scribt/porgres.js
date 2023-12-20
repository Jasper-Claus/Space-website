

window.onscroll = function() {
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPosition = window.pageYOffset;
    var scrollHeight = (scrollPosition / docHeight) * 100;
    document.getElementById("scrollBar").style.height = scrollHeight + "%";
}
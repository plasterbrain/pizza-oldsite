window.onscroll = function() {
    var fixed = document.getElementById('nav');
    if( document.body.scrollTop+document.documentElement.scrollTop > 1)
        fixed.className = "nav-top nav-fix";
    else fixed.className = "nav-top";
};
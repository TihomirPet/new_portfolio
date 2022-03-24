(function () {

    var hamburger = {

        navToggle: document.querySelector('.nav-toggle'),

        nav: document.querySelector('.nav'),

        menuElements: document.querySelector('.menu-elements'),

        doToggle: function (e) {
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        },

        doHide: function (e){
            this.navToggle.classList.remove('expanded');
            this.nav.classList.remove('expanded');
        }
    };

    hamburger.navToggle.addEventListener('click', function (e) {
        hamburger.doToggle(e);
    });

    hamburger.menuElements.addEventListener('click', function (e) {
        hamburger.doHide(e);
    });


}());
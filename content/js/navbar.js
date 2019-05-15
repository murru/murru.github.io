var navbar = {
    init() {

        // We cache the dom.
        this.cacheDom();

        // We bind the events.
        this.bindEvents();
    },

    cacheDom() {

        // The principal element of this module.
        this.$el = web.$navs;

        // The menu options.
        this.$jsOptionMenu = this.$el.querySelectorAll('.jsOptionMenu');
    },

    bindEvents: function() {
        // Toggler of the navbar options when viewed from small screens.
        //this.$hamburguerBtn.addEventListener('click', () => { navbar.toggleNav(); });

        // Render all the different views.
        this.$jsOptionMenu.forEach((jom) => { jom.addEventListener('click', (event) => { navbar.loadView(event); }); });

        // window.addEventListener("scroll", function() {
        //     var st = window.pageYOffset || document.documentElement.scrollTop;
        //     if (st > this.lastScrollTop) {
        //         navbar.$el.classList.add('w3-hide');
        //     } else {
        //         navbar.$el.classList.remove('w3-hide');
        //     }

        //     this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        // }, false);
    },

    // Method that changes the url according to the view that's being watched at the moment.
    loadView: function(event) {
        let actual = window.location.hash;
        let destiny = event.target.attributes[0].value;

        if(actual != destiny) {

            // We load the view
            web.loadView(destiny);
        }

        //this.toggleNav();
    }
}

navbar.init();
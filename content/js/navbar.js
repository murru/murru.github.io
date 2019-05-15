var navbar = {
    Height: null, // The navbar height.
    lastScrollTop: 0,
    init: function() {
        this.cacheDom();

        this.bindEvents();
    },
    cacheDom: function() {
        this.$el = web.$el.querySelector('#navBar'); // The navbar section.

        // this.$mobileOptions = this.$header.querySelector('#mobileOptions');

        this.$jsOptionMenu = this.$el.querySelectorAll('.jsOptionMenu'); // The a links to render all the views of the site.

        //this.$hamburguerBtn = this.$el.querySelector('#hamburguerBtn'); // The toggler to hide/show options in smartphones & tablets.

        //this.$options = this.$el.querySelector('#options'); // menu options div

        //this.$dropDowns = this.$options.querySelectorAll('.w3-dropdown-content'); // Dropdown options from the menu options
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

    // Method that hides/shows the navbar in tablets & smartphones.
    toggleNav: function() {
        // if(id != 'isotype' && id != 'logo') {
            (this.$options.classList.contains('w3-hide-small')) ? this.$options.classList.remove('w3-hide-small') : this.$options.classList.add('w3-hide-small');
        // }
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
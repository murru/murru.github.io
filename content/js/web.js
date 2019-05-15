var web = {
    init() {
        this.cacheDom();

        // We load the specified view.
        this.setHash();

        this.setWaypoints();

    },
    cacheDom() {
        this.$el = document.querySelector('body'); // The parent elemento of this module.        
        this.$content = this.$el.querySelector('#content'); // The content section to load the views. 

        this.$wpFooter = this.$el.querySelector('#wpFooter');
    },

    setWaypoints() {

        // Footer animations
        var waypoint = new Waypoint({
            element: this.$wpFooter.querySelector('#address'),
            handler: function() {
                this.element.classList.remove('invisible');
                this.element.classList.add('zoomInDown');
            },
            offset: '60%'
        });
        
        var waypoint = new Waypoint({
            element: this.$wpFooter.querySelector('#contactForm'),
            handler: function() {
                this.element.classList.remove('invisible');
                this.element.classList.add('zoomInDown');
            },
            offset: '50%'
        });
        
        var waypoint = new Waypoint({
            element: this.$wpFooter.querySelector('#extra'),
            handler: function() {
                this.element.classList.remove('invisible');
                this.element.classList.add('zoomInDown');
            },
            offset: '90%'
        });
        
        var waypoint = new Waypoint({
            element: this.$wpFooter.querySelector('#copyright'),
            handler: function() {
                this.element.classList.remove('invisible');
                this.element.classList.add('zoomInDown');
            },
            offset: '100%'
        });
    },
    
    setHash: function() {
        let key = window.location.hash;

        if(key == '') {
            key = '#home';
            window.location.hash = key;
        }

        // We load the view
        this.loadView(key);
    },

    getHash: function() { return window.location.hash; },

    loadView: function(hash) {
        let req = new XMLHttpRequest();
        let view = 'views/';
        method = 'GET';

        switch(hash) {
            case '#home': view += 'home.html'; break;
            case '#services': view += 'services.html'; break;
            case '#products': view += 'products.html'; break;
            case '#contactUs': view += 'contact-us.html'; break;
        }

        req.open(method, view, true);

        req.onload = function() {
            web.$content.innerHTML = this.responseText;

            switch(hash) {
                case '#home': home.init(); break;
                case '#services': break;
                case '#products': break;
                case '#contactUs': break;
            }
        }

        req.send();
    }
}

web.init();
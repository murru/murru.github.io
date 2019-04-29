var web = {
    init() {
        this.cacheDom();
        this.setHeight();
        //this.bindEvents();
        this.setWaypoints();
    },
    cacheDom() {
        this.$el = document.querySelector('body');
        this.$header = document.querySelector('header');
        this.$navbar = this.$header.querySelector('#navbar');
        this.$mobileOptions = this.$header.querySelector('#mobileOptions');
        // Waypoints sections.
        this.$wpCompanyProfile = this.$el.querySelector('#wpCompanyProfile');
        this.$wpPartners = this.$el.querySelector('#wpPartners');
        this.$wpBuildingComponents = this.$el.querySelector('#wpBuildingComponents');
        this.$wpFooter = this.$el.querySelector('#wpFooter');

    },
    setHeight() {
        this.$header.style.height = window.innerHeight + 'px';
        this.$mobileOptions.style.height = (window.innerHeight - this.$navbar.clientHeight) + 'px';
    },
    setWaypoints() {
        // Company Profile animations.
        var waypoint = new Waypoint({ element: this.$wpCompanyProfile.querySelector('#title'), handler: function() { this.element.classList.remove('invisible');this.element.classList.add('fadeInDown'); }, offset: '80%'});

        var waypoint = new Waypoint({ element: this.$wpCompanyProfile.querySelector('#leftText'), handler: function() { this.element.classList.remove('invisible'); this.element.classList.add('fadeInLeft'); }, offset: '75%'});

        var waypoint = new Waypoint({ element: this.$wpCompanyProfile.querySelector('#rightImg'), handler: function() { this.element.classList.remove('invisible');this.element.classList.add('fadeInRight'); }, offset: '70%'});
        
        // Partners animations
        var waypoint = new Waypoint({ element: this.$wpPartners.querySelector('#title'), handler: function() { this.element.classList.remove('invisible'); this.element.classList.add('fadeInUp'); }, offset: '70%'});
        
        var waypoint = new Waypoint({ element: this.$wpPartners.querySelector('#balls'), handler: function() { this.element.classList.remove('invisible'); this.element.classList.add('bounceIn'); }, offset: '60%'});
        
        var waypoint = new Waypoint({ element: this.$wpPartners.querySelector('#text'), handler: function() { this.element.classList.remove('invisible'); this.element.classList.add('fadeInDown'); }, offset: '60%'});
        
        // Building Components animations.
        var waypoint = new Waypoint({
            element: this.$wpBuildingComponents.querySelector('#title'),
            handler: function() {
                this.element.classList.remove('invisible');
                this.element.classList.add('zoomIn');
            },
            offset: '60%'
        });
        
        var waypoint = new Waypoint({
            element: this.$wpBuildingComponents.querySelector('#textLeft'),
            handler: function() {
                this.element.classList.remove('invisible');
                this.element.classList.add('slideInLeft');
            },
            offset: '40%'
        });

        var waypoint = new Waypoint({
            element: this.$wpBuildingComponents.querySelector('#textRight'),
            handler: function() {
                this.element.classList.remove('invisible');
                this.element.classList.add('slideInRight');
            },
            offset: '40%'
        });

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
    }
}

web.init();
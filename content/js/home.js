var home = {
    init() {
        this.cacheDom();
        // this.setHeight();
        this.setWaypoints();

        // We start the carousel.
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true
        });
    },
    cacheDom() {
        this.$el = web.$content; // The parent elemento of this module.

        // Waypoints sections.
        this.$wpCompanyProfile = this.$el.querySelector('#wpCompanyProfile');
        this.$wpPartners = this.$el.querySelector('#wpPartners');
        this.$wpBuildingComponents = this.$el.querySelector('#wpBuildingComponents');
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

        var waypoint = new Waypoint({
            element: this.$wpBuildingComponents.querySelector('#groupPartners'),
            handler: function() {
                this.element.classList.remove('invisible');
                this.element.classList.add('slideInUp');
            },
            offset: '60%'
        });
    }
}
var products = {
    init() {
        this.cacheDom();
        this.bindEvents();
    },
    cacheDom() {

        // The parent module of this module.
        this.$el = web.$content;

        // Modal img tag.
        this.$jsImgThumb = this.$el.querySelectorAll('.jsImgThumb');
        this.$modal = this.$el.querySelector('#modal');
        this.$modalImg = this.$el.querySelector('#modalImg');
    },
    bindEvents() {
        this.$jsImgThumb.forEach(it => {
            it.addEventListener('click', event => {
                products.toggleModalImg(event);
            });
        });
    },
    toggleModalImg(event) {
        // we save the img url.
        let url = 'content/img/gal*.jpg';
        let newUrl = '';

        // We replace the * for the number to render in the modal window.
        newUrl = url.replace('*', event.target.id);
        
        // we load the image in the element.
        this.$modalImg.src = newUrl;
    }
}
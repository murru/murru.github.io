var alert = {
    init() {
        this.cacheDom();
    },
    cacheDom() {
        this.$el = web.$wpFooter.querySelector('#alert');
        this.$title = this.$el.querySelector('#title');
        this.$body = this.$el.querySelector('#body');
        this.$footer = this.$el.querySelector('#footer');
    },
    clear() {
        this.$el.classList.remove('alert-success', 'alert-danger');
        this.$title.textContent = '';
        this.$body.textContent = '';
        this.$footer.textContent = '';
    },
    setContent(result) {

        // We clean the alert first.
        this.clear();

        // We set content depending on the result.
        switch (result) {
            case 'success':
                this.$el.classList.add('alert-success');
                this.$title.textContent = 'Well done!';
                this.$body.textContent = 'Your contact email has been sent successfully! An atention agent will write tou back as soon as posible, wait for it!';
                this.$footer.textContent = 'Thank you for contacting us!';
            break;

            case 'danger':
                this.$el.classList.add('alert-danger');
                this.$title.textContent = 'There was an error!';
                this.$body.textContent = 'Your contact email couldn\'t be sent! We\'re sorry for the inconvenience. We\'re working on a solution!';
                this.$footer.textContent = 'Please, try again later.';
            break;
        }

        // We show the alert.
        this.$el.classList.remove('d-none');
        this.$el.classList.add('bounceInRight');
    }
}

alert.init();
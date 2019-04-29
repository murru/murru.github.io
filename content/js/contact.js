var contact = {
    init() {
        this.cacheDom();
        this.configureForm();
        this.setSubmit(true);
    },
    cacheDom() {
        this.$el = web.$wpFooter.querySelector('#contactForm');

        // Contact Form
        this.$form = this.$el.querySelector('#contactFrm');
        this.$formElements = this.$form.querySelectorAll('.form-control');
        this.$submitBtn = this.$form.querySelector('#submitContact');
        this.$icon = this.$submitBtn.querySelector('#icon');
        this.$text = this.$submitBtn.querySelector('#text');

    },
    setSubmit(indicator) {
        // We reset the button props.
        this.$icon.classList.remove('fa-paper-plane', 'fa-spinner', 'fa-pulse');
        this.$text.textContent = '';

        // We add the ones depending on the process
        if(indicator) {

            // We disable all the form inputs.
            this.toggleInputState(false);

            // We change the icon to the spinner and make it spin.
            this.$icon.classList.add('fa-paper-plane');

            // We change the text of the submit button.
            this.$text.textContent = 'Send';

            // We disable the submit button to avoid unnecessary requests to the server.
            this.$submitBtn.disabled = false;
        } else {

            // We disable all the form inputs.
            this.toggleInputState(true);

            // We change the icon to the spinner and make it spin.
            this.$icon.classList.add('fa-spinner', 'fa-pulse');
            
            // We change the text of the submit button.
            this.$text.textContent = 'Sending...';

            // We disable the submit button to avoid unnecessary requests to the server.
            this.$submitBtn.disabled = true;
        }
    },
    configureForm(){
        // We configure the form
        this.validator = new FormValidator('contactForm', [
            { name: 'txtFullName', rules: 'required|alpha' },
            { name: 'txaMessage', rules: 'required' },
            { name: 'txtEmail', rules: 'required|valid_email' }
        ], function(errors, event) {
            contact.submitForm(errors, event);
        });

        // We set the messages
        this.validator.setMessage('required', 'Este campo es requerido');
        this.validator.setMessage('alpha', 'Sólo letras');
        this.validator.setMessage('valid_email', 'Debe ingresar un correo válido');
    },

    // Method that disables or enables the inputs of the subscription form.
    toggleInputState: function(state) {
        this.$formElements.forEach((fe) => { fe.disabled = state; });
    },

    // Method that sends the email to verify it in the DB.
    submitForm: function(errors, event) {

        // We prevent the submit event.
        event.preventDefault();

        // We clear the errors messages in the form.
        this.$formElements.forEach((e) => { e.nextElementSibling.textContent = ''; });

        // If there's any error
        if (errors.length > 0) {

            // We reset the alert module
            alert.clear();

            // We iterate over all of them and show the message.
            errors.forEach((e) => {
                e.element.nextElementSibling.textContent = e.message;
            });

            // We add the animation to shake the form.
            this.shake();
        } else {

            // We let the user know we are working on the subscription process
            this.setSubmit(false);

            // We send the request
            this.sendRequest();
        }
    },
    shake() {

        // We add the animation.
        this.$form.classList.add('shake');

        // We reset the state of the form.
        setTimeout(() => {
            this.$form.classList.remove('shake');
        }, 2000);
    },
    // Method that makes the logic of the request itself.
    sendRequest: function() {

        setTimeout(() => {
            this.setSubmit(true);
            this.$el.classList.add('d-none');

            // Render alert.
            alert.setContent('success');
        }, 2000);

        // We declare the variables to use
        // var xhr = new XMLHttpRequest();
        // var url = users.setUrl(window.location.href) + 'users-backend/api/user/subscribe.php';
        // var data = {
        //     person: this.$formElements[0].value,
        //     mail: this.$formElements[1].value,
        //     text: this.$formElements[2].value
        // };

        // // We parse the JSON object to be decoded in the backend
        // var json = JSON.stringify(data);

        // // We prepare the request itself
        // xhr.open("POST", url, true);
        // xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        // xhr.onload = function () {

        //     // We clean the alert module.
        //     alert.clean();

        //     // When the request process is success!
        //     if (xhr.readyState == 4 && xhr.status == 200) {
                
        //         // We make the actions according to the backend response.
        //         switch(JSON.parse(xhr.responseText)) {

        //             // The data we send to the server is corrupted.
        //             case '001': case '002':

        //                 // We enable all the form inputs.
        //                 register.toggleInputState(false);

        //                 // We set the alert colors and text.
        //                 alert.title = '<b>Alerta</b>';
        //                 alert.text = '<b>Se ha detectado un intento de manipulación de datos. Será contactado por nuestro personal.</b>';
        //                 alert.render(2);

        //                 // We enable the button.
        //                 register.$submitBtn.disabled = false;
        //             break;

        //             // The suscription couldn't be done.
        //             case '003':
                        
        //                 // We enable all the form inputs
        //                 register.toggleInputState(false);

        //                 // We set the alert colors and text.
        //                 alert.title = '<b class="w3-text-white">¡Error!</b>';
        //                 alert.text = '<b class="w3-text-white">Estamos trabajando para mejorar el servicio, disculpe los inconvenientes.</b>';
        //                 alert.render(3);

        //                 // We enable the button.
        //                 register.$submitBtn.disabled = false;
        //             break;

        //             // The account exists already in the database.
        //             case '004':

        //                 // We set the alert colors and text.
        //                 alert.title = '<b class="w3-text-white">¡Alerta!</b>';
        //                 alert.text = '<b class="w3-text-white">Ya existe una cuenta con este correo electrónico. Le recomendamos iniciar sesión</b>';
        //                 alert.render(1);
        //             break;
        //             default:
        //                 if(JSON.parse(xhr.responseText) == false) {
                            
        //                     // We enable all the form inputs
        //                     register.toggleInputState(false);

        //                     // We set the alert colors and text
        //                     alert.title = '<b class="w3-text-white">¡Error!</b>';
        //                     alert.text = '<b class="w3-text-white">No se pudo registrar. Comuníquese con el admin del sistema.</b>';
        //                     alert.render(3);

        //                     // We enable the button.
        //                     register.$submitBtn.disabled = false;
        //                 } else {

        //                     // We set the alert colors and text.
        //                     alert.title = '<b class="w3-text-white">Éxito!</b>';
                            
        //                     // and we add the result class
        //                     switch(users.Product) {
        //                         case 'AVP':
        //                             alert.text = '<b class="w3-text-white">Se ha registrado satisfactoriamente.</b>';
        //                         break;
        //                         case 'AIN':
        //                             alert.text = '<b class="w3-text-white">Se ha registrado satisfactoriamente. Redirigiendo al cuestionario...</b>';
        //                         break;
        //                     }

        //                     alert.render(1);

        //                     if(users.Product == 'AIN') {
        //                         let url = users.setUrl(window.location.href) + 'test-frontend?product=AIN&test=RPF';

        //                         sessionStorage.setItem("PIN", xhr.responseText);

        //                         setTimeout(function(){ window.location.replace(url); }, 3000);
        //                     } else register.$submitBtn.disabled = false;
        //                 }
        //             break;
        //         }

        //     // Error
        //     } else {

        //         // We set the alert colors and text
        //         alert.title = '<b class="w3-text-white">¡Error!</b>';
        //         alert.text = '<b class="w3-text-white">No se ha podido conectar con el servidor.</b>';
        //         alert.render(3);

        //         // We enable all the form inputs.
        //         register.toggleInputState(false);

        //         // We enable the button.
        //         register.$submitBtn.disabled = false;
        //     }
        // }

        // xhr.send(json);
    }
}

contact.init();
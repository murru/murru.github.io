var services = {
    info: [
        {
            title: 'Estimating',
            icon: [ 'fas', 'fa-calculator', ],
            text: [
                'From the complex to simple, whether it’s for large multi-family, tract, commercial or single-family homes, our knowledgeable professionals will provide you with a free, prompt and competitive quote.',
                'A precise truss is the result of careful and accurate planning between you and our team.  Our experience enables us to anticipate issues and provide fast solutions to keep your building project on schedule.  Your salesperson works closely with you throughout every phase of your truss project, from bidding, to engineering, to production and through delivery.  This one-on-one interaction will give you the confidence of knowing that your truss package will be built exactly the way you need it and delivered to your jobsite when you need it.',
                'Our philosophy of continuous improvement and commitment to excellence is fundamental in developing the most competitive costing structures that focus on eliminating excesses and maximizing efficiency. And it is our steadfast commitment to the company’s core business beliefs — integrity, innovation, performance, quality, safety and service — that help us retain the repeat business and referrals that keep us growing.'
            ],
        },
        {
            title: 'Engineering',
            icon: ['fas', 'fa-cogs'],
            text: [
                'Our experienced designers, under the supervision of in-house registered Professional Engineers, provide accurate solutions that meet architectural / engineering specifications as well as prevailing building codes.  We use the latest industry software to help make the design of every roof and floor truss system technically accurate, consistently fabricated, structurally safe and as cost efficient as possible.',
                'Your plans are reviewed by our competent designers who use sophisticated software to create a unique truss plan for each job.  The grade of lumber, exact size and shape, and specific truss plates to be used are taken into consideration.  The designer will determine what loads need to be supported within the building, the number of trusses that will be required, and the specific placement of the trusses.  The design is assessed for accuracy and to make certain your trusses meet engineering and safety standards.  The project design will be optimized to bring value-engineering to your total framing package.',
                'A copy of the truss engineering profiles and placement layout will be provided for your review.  Once we have received your approval of the preliminary engineering, our Professional Engineers will perform a final analysis before providing you with a finished truss placement plan and sealed truss drawings.'
            ]
        },
        {
            title: 'Wood Truss Production',
            icon: ['fab', 'fa-accusoft'],
            text: [
                'Our dedicated management and staff, many with 15 + years professional experience in the industry, work as a coordinated team manufacturing reliable, high-quality roof and floor trusses.',
                'We begin by using only quality lumber that conforms to strict state, local and national building criteria.  The lumber is cut by machines that are mathematically calibrated and set to produce highly accurate cuts.  The pieces of lumber are then fitted together in jigs, joined by metal connector plates (manufactured by MiTek Industries or Robbins Engineering, Inc.) and pressed on a roller table.  Precision manufacturing guarantees multiples of the same truss that are identical in size, ensuring consistent fit, performance and uniformity throughout your roof or floor system.',
                'Each truss must pass our stringent Internal Quality Control tests before being qualified to be stamped with our company name.  In addition, Dade Truss participates in a Truss Manufacturing Assurance Program performed by an impartial third party, thereby further assuring quality trusses that comply with the standards of the Florida Building Code.',
                'Our fabricators number the trusses for accurate installation (your delivery pack will include a truss placement drawing) and bands and stages your packages for safe, efficient delivery to your job site.  Shipment is coordinated with your schedule to ensure a smooth workflow.',
                'Our ability to produce mass quantities  fast and on-time makes you more profitable.',
                'State of the art facility designed for high volume production.',
                'We use only grade-stamped lumber and the highest quality metal connector plates.',
                'Quality and Compliance assurance through internal Q.C. and external third-party Q.A. inspections.',
                'Automated saws virtually eliminate human error.'
            ]
        },
        {
            title: 'Quality Control / Assurance',
            icon: ['fas', 'fa-house-damage'],
            text: [
                'Plants are inspected by an impartial third-party. Visits are unannounced and performed randomly, a minimum of once every month.',
                'Inspection of incoming lumber verifies that material is grade-marked by an accredited agency and that it is the correct species, size and grade in accordance with the requirements of the ANSI/TP-1 standard for truss fabrication.',
                'Inspection of connector plates verifies that the plates are undamaged and are the correct types, gages, and sizes.',
                'Inspection of finished trusses verifies conformance to engineering and fabrication tolerances.',
                'Plant inspection verifies that wood members are accurately cut and assembled, and that they meet the standards as specified in the truss design. It further verifies proper handling, packaging, storage and shipping of finished products in a manner which will not impair the product’s structural integrity.'
            ]
        },
        {
            title: 'Delivery',
            icon: ['fas','fa-truck-loading'],
            text: [
                'We understand that waiting for trusses can slow down construction projects and create costly delays.  That is why we offer some of the fastest production and delivery times available.  By planning your project weeks ahead of time, you will have your trusses when you need them — not too early, taking up space on your jobsite, and not too late, causing delays in the building process.',
                'Our fleet of delivery trucks and personnel will deliver your order directly to your job site — safely and on-time.',
                'Truss packages staged for safe and efficient shipment.',
                'CDL-qualified drivers skilled and experienced in transporting trusses.',
                'Delivery coordinated to your schedule.',
                'Roll-off trailers designed to haul and self-unload complete truss packages.'
            ]
        }
    ],
    init() {
        this.cacheDom();
        this.bindEvents();
    },
    cacheDom() {

        // The parent element of this module.
        this.$el = web.$content;

        // The buttons to show the service full information.
        this.$modalBtns = this.$el.querySelectorAll('.modalBtn');

        // Modal sections
        this.$modalTitle = this.$el.querySelector('#modalTitle');
        this.$iconService = this.$el.querySelector('#iconService');
        this.$textService = this.$el.querySelector('#textService');
    },
    bindEvents() {
        this.$modalBtns.forEach((mb) => { mb.addEventListener('click', (event) => { services.setModalInfo(event); }); });
    },
    renderIcon(a, b) {
        // We remove all the icons classes.
        this.$iconService.classList.remove('fas', 'fab', 'fa-calculator', 'fa-cogs', 'fa-accusoft', 'fa-house-damage', 'fa-truck-loading');

        this.$iconService.classList.add(a, b);
    },
    setModalInfo(event) {
        let index = parseInt(event.target.attributes.ref.value);
        let bodyCode = '';

        // We set the icon.
        this.renderIcon(this.info[index].icon[0], this.info[index].icon[1]);

        this.$modalTitle.innerText = this.info[index].title;

        switch(index) {
            case 0: case 1:
                bodyCode += '<div class="row"><div class="col">';
                this.info[index].text.forEach((t) => {
                    bodyCode += '<p>' + t + '</p>';
                });
                bodyCode += '</div></div>';
            break;
            case 2:

                // The first two paragraphs.
                bodyCode += '<div class="row"><div class="col"><p class="text-justify">' + this.info[index].text[0] + '</p><p>' + this.info[index].text[1] + '</p></div></div><div class="row">';
                
                // The row.
                // 1st column.
                bodyCode += '<div class="col-sm-12 col-md-12 col-lg-6"><p class="text-justify">' + this.info[index].text[2] + '</p><p>' + this.info[index].text[3] + '</p></div>';
                
                // 2nd column.
                bodyCode += '<div class="col-sm-12 col-md-12 col-lg-6"><ul>';
                bodyCode += '<li>' + this.info[index].text[4] + '</li>';
                bodyCode += '<li>' + this.info[index].text[5] + '</li>';
                bodyCode += '<li>' + this.info[index].text[6] + '</li>';
                bodyCode += '<li>' + this.info[index].text[7] + '</li>';
                bodyCode += '<li>' + this.info[index].text[8] + '</li>';
                bodyCode += '</ul></div></div>';
            break;
            case 3:
                bodyCode += '<div class="row"><div class="col"><ul>';
                this.info[index].text.forEach((t) => {
                    bodyCode += '<li>' + t + '</li>';
                });
                bodyCode += '</ul></div></div>';
            break;
            case 4:
                bodyCode += '<div class="row"><div class="col"><p>' + this.info[index].text[0] + '</p><p>' + this.info[index].text[1] + '</p><p><ul>';
                bodyCode += '<li>' + this.info[index].text[2] + '</li>';
                bodyCode += '<li>' + this.info[index].text[3] + '</li>';
                bodyCode += '<li>' + this.info[index].text[4] + '</li>';
                bodyCode += '<li>' + this.info[index].text[5] + '</li>';
                bodyCode += '</ul></div></div>';
            break;
        }

        // We write the html code into the body card.
        this.$textService.innerHTML = bodyCode;
    }
}
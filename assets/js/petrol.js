var petrol = new Vue({
    el: ".petrol",
    data: {
        active: true,
        input: 1,
        litr: ' л.',
        cost: 5, //стоимость топлива
        p: 1,
    },
    methods: {
        gov: function () {
            //console.log('full')
            mp.trigger('petrol.gov')
        },
		full: function () {
            //console.log('full')
            mp.trigger('petrol.full')
        },
        yes: function () {
            //console.log('yes')
            mp.trigger('petrol', this.input)
        },
        no: function () {
            //console.log('no')
            mp.trigger('closePetrol')
        },
        reset: function () {
            this.active = false
            this.input = ""
        },
        add(input) {
            
                this.input += this.p;
        },
        pop(input) {
            if (input == 1) {
                this.input = input;
            } else this.input -= this.p;
        },
    },
    computed: {
        setLitr: function() {
            return this.input + this.litr;
        },
        sumFuel: function() {
            return this.input * this.cost;
        },
    },
});

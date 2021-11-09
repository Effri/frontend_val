var auto = new Vue({
    el: ".auto__content",
    data: {
        active: true,
        bizInfoActive: false,
        bizSellPrice: 1,
        indexM: 0,
        indexC: 0,
        models: ["Mercedes Benz AMG63", "model2", "model2", "model2", "Mercedes Benz AMG63", "model2", "model2", "model2","Mercedes Benz AMG63", "model2", "model2", "model2hgffffffffffffffffffff", "Mercedes Benz AMG63", "model2", "model2", "model2","Mercedes Benz AMG63", "model2", "model2", "model2", "Mercedes Benz AMG63", "model2", "model2", "model2","Mercedes Benz AMG63", "model2", "model2", "model2", "Mercedes Benz AMG63", "model2", "model2", "model2"],
        colors: ["#878694","#8E5125","#909423", "#699325", "#8C50F9", "#1E5595", "#199068", "#82131A", "#872226", "#7A1692","#03208C", "#23232D", "#54252E", "#3F3D15", "#343F16", "#252F15"],
        prices: [5000000,199,1999,255393,5000000,199,1999,255393,5000000,199,1999,255393,5000000,199,1999,255393,5000000,199,1999,255393,5000000,199,1999,255393,5000000,199,1999,255393,5000000,199,1999,255393],
        header: "Автосалон",
        donate: false,
        auto_check: false,
        model_price: 0,
        model_name: "",
    },
    set: {
        
    },
    get: {

    },
    computed: {
        bizIncome: function() {
            return this.bizSellPrice*0.04;
        },
    },
    methods: {
        left: function(type){
            if(type==0){ //model
                this.indexM--
                if(this.indexM < 0) this.indexM = 0
                //console.log(this.indexM)
                mp.trigger('auto','model',this.indexM)
            } else { //color
                this.indexC--
                if(this.indexC < 0) this.indexC = 0
                //console.log(this.indexC)
                mp.trigger('auto','color',this.indexC)
            }
        },
        right: function(type){
            if(type==0){ //model
                this.indexM++
                if(this.indexM == this.models.length) this.indexM = 0
                //console.log(this.indexM)
                mp.trigger('auto','model',this.indexM)
            } else { //color
                this.indexC++
                if(this.indexC == this.colors.length) this.indexC = 0
                //console.log(this.indexC)
                mp.trigger('auto','color',this.indexC)
            }
        },
        auto: function (index) {
            this.auto_check = true;
            this.model_price = this.prices[index],
            this.model_name = this.models[index],
            this.indexM = index
            mp.trigger('auto','model', index)
        },
        buyBiz: function () {
            mp.trigger('buyBizCommand');
        },
		buyVehicle() {
				const obj = { model: this.vehicles[this.complete].model, id: this.complete};
				mp.trigger("events.callRemote", "autoSaloon.buyNewCar", JSON.stringify(obj));
				mp.trigger("events.callRemote", "autoSaloon.exit");
				mp.trigger("autoSaloon.deleteVehicle");
				mp.trigger("autoSaloon.setStatusMenu", false);
				mp.trigger("autoSaloon.destroyCam");
		},
        buy: function(){
            //console.log('buy')
            mp.trigger('buyAuto')
        },
        testdrive: function() {
            console.log('testdriveAuto');
            mp.trigger('testdriveAuto', this.indexM, this.indexC);
        },
        exit: function(){
            //console.log('exit')
            this.reset()
            mp.trigger('closeAuto')
        },
		rotate: function() {
            mp.trigger('rotateAuto', Number(this.rotationAuto))
        },
        reset: function(){
            this.price=-1
            this.indexM=0
            this.indexC=0
            this.models=[]
            this.colors=[]
            this.prices=[]
        }
    }
})
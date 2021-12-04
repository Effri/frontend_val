var HUD = new Vue({
    el: ".inGameHud",
    data: {
        personId: 0,
        show: false,
        ammo: 467,
        money: 50000000,
        bank: 158946,
        mic: false,
        time: "00:00",
        date: "00.00.00",
        street: "Лос-Сантос, штат Калифорния",
        crossingRoad: "Шоссе 69",
        server: 0,
		playerId : 0,
        online: 1000,
        inVeh: false,
		belt: false,
        engine: false,
        doors: false,
        // speed: 0,
        // fuel: 0,
        hp: 0,
        eat: 100,
        maxeat: 534,
        water: 58,
        maxwater: 100,
        inSafeZone: false,
        minimapFix: 0,

        bonusblock: false,
		lastbonus: '',
        hotkeyblock: false,
        givebonus: false,

        speed: 169,
        fuel: 72,
        maxfuel: 100,
        maxspeed: 400,
    },
    computed: {
        seteat: function() {
            return this.eat * 4.85;
        },
        setwater: function() {
            return this.water * 4.85;
        }
    },
    methods: {
        setTime: (time, date) => {
            this.time = time;
            this.date = date;
        },
        showbonus(){
			this.bonusblock = !this.bonusblock;
		},
        showHotkey() {
            this.hotkeyblock = !this.hotkeyblock;
        },
        
    }
   
})
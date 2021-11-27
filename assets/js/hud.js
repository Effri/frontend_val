var HUD = new Vue({
    el: ".inGameHud",
    data: {
        personId: 0,
        show: true,
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
        inVeh: true,
		belt: false,
        engine: false,
        doors: true,
        // speed: 0,
        // fuel: 0,
        hp: 0,
        eat: 70,
        water: 40,
        inSafeZone: true,
        minimapFix: 0,

        bonusblock: false,
		lastbonus: '',
        hotkeyblock: false,
        givebonus: true,

        speed: 40,
        fuel: 70,
        maxfuel: 100,
    },
    computed: {
        
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
        

        
	// updateSpeed(currentspeed, maxspeed = 200)
    //     {
    //         this.speed = currentspeed;
    //         var speedPercent = Math.floor(currentspeed / maxspeed * 100);
    //         if(speedPercent > 100) speedPercent = 100;

    //         var 
    //             redColor = new Color(228, 66, 66),
    //             whiteColor = new Color(255, 255, 255),
    //             yellowColor = new Color(225, 228, 66),
    //             start = whiteColor,
    //             end = yellowColor;
        
    //         if (speedPercent > 50) {
    //             speedPercent = speedPercent % 51;
    //             start = yellowColor;
    //             end = redColor;
    //         }

    //         var 
    //             startColors = start.getColors(),
    //             endColors = end.getColors();
    //         var r = InterpolateColor(startColors.r, endColors.r, 50, speedPercent);
    //         var g = InterpolateColor(startColors.g, endColors.g, 50, speedPercent);
    //         var b = InterpolateColor(startColors.b, endColors.b, 50, speedPercent);
        
    //         $('.speedhud').css("color", "rgb(" + r + "," + g + "," + b + ")");           
    //     }
    }
   
})
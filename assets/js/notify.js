function notify(type, layout, message, time) {
    var types = ['alert', 'error', 'success', 'information', 'warning'];
    var layouts = ['top', 'topLeft', 'topCenter', 'topRight', 'center', 'centerLeft', 'centerRight', 'bottom', 'bottomLeft', 'bottomCenter', 'bottomRight'];
    var icons = [`
    <p class="main_title">Уведомление</p>
    <div class="border">
        <img src="./assets/img/hud/notify.svg">
        <div class="noty_progress_wrapper">
            <div id="noty_progress_bar" class="noty_progress"></div>
            </div>
        </div>
    </div>`, 
    `
    <p class="main_title">Уведомление</p>
    <div class="border">
        <img src="./assets/img/hud/notify.svg">
        <div class="noty_progress_wrapper">
            <div id="noty_progress_bar" class="noty_progress"></div>
            </div>
        </div>
    </div>`, 
    `
    <p class="main_title">Уведомление</p>
    <div class="border">
        <img src="./assets/img/hud/notify.svg">
        <div class="noty_progress_wrapper">
            <div id="noty_progress_bar" class="noty_progress"></div>
            </div>
        </div>
    </div>`, 
    `
    <p class="main_title">Уведомление</p>
    <div class="border">
        <img src="./assets/img/hud/notify.svg">
        <div class="noty_progress_wrapper">
            <div id="noty_progress_bar" class="noty_progress"></div>
            </div>
        </div>
    </div>`, 
    `
    <p class="main_title">Уведомление</p>
    <div class="border">
        <img src="./assets/img/hud/notify.svg">
        <div class="noty_progress_wrapper">
            <div id="noty_progress_bar" class="noty_progress"></div>
            </div>
        </div>
    </div>
     `]
    message = '<div class="text">' + icons[type] + message + '</div>';
    new Noty({
        type: types[type],
        layout: layouts[layout],
        theme: 'fivestar',
        text: message,
        timeout: time,
        progressBar: true,
        animation: {
            open: 'noty_effects_open',
            close: 'noty_effects_close'
        }
    }).show();
}


// var icons = [`
{/* <p class="main_title">Уведомление</p>
<div class="border">
    <img src="./assets/img/hud/notify.svg">
    <div class="noty_progress_wrapper">
        <div id="noty_progress_bar" class="noty_progress"></div>
        </div>
    </div>
</div>`, 
`
<div class="border">
<img src="./res_phoenix/img_phoenix/icon-notify/error.svg" width="25px">
</div>`, 
`
<div class="border">
<img src="./res_phoenix/img_phoenix/icon-notify/success.svg" width="25px">
</div>`, 
`
<div class="border">
<img src="./res_phoenix/img_phoenix/icon-notify/info.svg" width="25px">
</div>`, 
`
<div class="border">
<img src="./res_phoenix/img_phoenix/icon-notify/warning.svg" width="25px">
</div>
 `] */}
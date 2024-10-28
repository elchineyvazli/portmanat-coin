"use strict";
function notify(status, message) {
    iziToast[status]({
        message: message,
        position: "topRight"
    });
}
function set_checkbox_property(data, id) {
    if(data) {
        document.querySelector(id).checked = true;
    }
    else {
        document.querySelector(id).checked = false;
    }
}

document.querySelector("#sidebar_toggle").addEventListener("click", function () {
    if(document.getElementById("sidebar_toggle").checked) {
        chrome.storage.local.set({
            "display_sidebar": true
        });
    } else {
        chrome.storage.local.set({
            "display_sidebar": false
        });
    }
})

document.querySelector("#comment_toggle").addEventListener("click", function () {
    if(document.getElementById("comment_toggle").checked) {
        chrome.storage.local.set({
            "display_comment": true
        });
    } else {
        chrome.storage.local.set({
            "display_comment": false
        });
    }
})

document.querySelector("#recommendation_toggle").addEventListener("click", function () {
    if(document.getElementById("recommendation_toggle").checked) {
        chrome.storage.local.set({
            "display_recommendation": true
        });
    } else {
        chrome.storage.local.set({
            "display_recommendation": false
        });
    }
})

document.querySelector("#notification_toggle").addEventListener("click", function () {
    if(document.getElementById("notification_toggle").checked) {
        chrome.storage.local.set({
            "display_notification": true
        });
    } else {
        chrome.storage.local.set({
            "display_notification": false
        });
    }
})

chrome.storage.local.get("display_sidebar", function(data) {
    set_checkbox_property(data.display_sidebar, "#sidebar_toggle");
});

chrome.storage.local.get("display_comment", function(data) {
    set_checkbox_property(data.display_comment, "#comment_toggle");
});

chrome.storage.local.get("display_recommendation", function(data) {
    set_checkbox_property(data.display_recommendation, "#recommendation_toggle");
});

chrome.storage.local.get("display_notification", function(data) {
    set_checkbox_property(data.display_notification, "#notification_toggle");
});
// GLOBAL VARIABLES
var_comments = false;
var_notification = false;
var_recommendation = false;
var_sidebar = false;

function hide_notfications(hide = true) {
    notification_element = document.querySelector(".notification-button-style-type-default");
    if(notification_element) {
        if(hide) {
            notification_element.style.display = "none";
        } else {
            notification_element.style.display = "block";
        }
    } 
}

function hide_sidebar(hide = true) {
    sidebar_element = document.querySelector("#guide-content");
    if(sidebar_element) {
        if(hide) {
            sidebar_element.style.display = "none";
        } else {
            sidebar_element.style.display = "block";
        }
    }
}

function hide_recommendations(hide = true) {
    recommendation_element = document.querySelector("#related");
    if(recommendation_element) {
        if(hide) {
            recommendation_element.style.display = "none";
        } else {
            recommendation_element.style.display = "block";
        }
    }
}

function hide_comments(hide = true) {
    comments_element = document.querySelector("#comments");
    if(comments_element) {
        if(hide) {
            comments_element.style.display = "none";
        } else {
            comments_element.style.display = "block";
        }
    }
}

function disable_autoplay(disable = true) {
    autoplay_element = document.querySelector(".ytp-autonav-toggle-button");
    if(disable) {
        autoplay_element.ariaChecked = "false";
    } else {
        autoplay_element.ariaChecked = "true";
    }
}

function hide_autoplay(hide = true) {
    autoplay_element = document.querySelector(".ytp-autonav-toggle-button");
    if(autoplay_element) {
        if(hide) {
            autoplay_element.style.display = "none";
        } else {
            autoplay_element.style.display = "block";
        }
    } 
}

function hide_endscreen(hide = true) {
    endscreen_element = document.querySelector(".ytp-endscreen-content");
    if(endscreen_element) {
        if(hide) {
            endscreen_element.style.display = "none";
        } else {
            endscreen_element.style.display = "block";
        }
    }
}

function hide_mainpage_rec(hide = true) {
    mainpage_element = document.querySelector("#primary");
    if(mainpage_element) {
        if(hide) {
            mainpage_element.style.display = "none";
        } else {
            mainpage_element.style.display = "block";
        }
    }
}

function modify_content() {
    chrome.storage.local.get("display_sidebar", function(data) {
        if(data.display_sidebar) {
            var_sidebar = true;
        } else {
            var_sidebar = false;
        }
    });

    chrome.storage.local.get("display_comment", function(data) {
        if(data.display_comment) {
            var_comments = true;
        } else {
            var_comments = false;
        }
    });

    chrome.storage.local.get("display_recommendation", function(data) {
        if(data.display_recommendation) {
            var_recommendation = true;
        } else {
            var_recommendation = false;
        }
    });

    chrome.storage.local.get("display_notification", function(data) {
        if(data.display_notification) {
            var_notification = true;
        } else {
            var_notification = false;
        }
    });

    hide_notfications(var_notification);
    hide_sidebar(var_sidebar);
    if(window.location.href.indexOf("watch?v=") !== -1) {
        // console.log("Video in url");
        hide_recommendations(var_recommendation);
        disable_autoplay(var_recommendation);
        hide_autoplay(var_recommendation);
        hide_endscreen(var_recommendation);
        hide_comments(var_comments);
    } else {
        // console.log("No video in url")
        hide_mainpage_rec(var_recommendation);
    }
}

modify_content()
setInterval(function() {
    modify_content()
}, 200);
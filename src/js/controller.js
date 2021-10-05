// GLOBAL VARIABLES
var_comments = false;
var_notification = false;
var_recommendation = false;
var_sidebar = false;

function hide_notfications() {
    console.log("hide notification called");
    notification_element = document.querySelector(".notification-button-style-type-default");
    if(notification_element) {
        notification_element.remove();
    } 
}

function hide_sidebar() {
    console.log("hide sidebar called");
    sidebar_element = document.querySelector("#guide-content");
    if(sidebar_element) {
        sidebar_element.style.display = "none";
    }
}

function hide_recommendations() {
    recommendation_element = document.querySelector("#related");
    if(recommendation_element) {
        recommendation_element.style.display = "none";
    }
}

function hide_comments() {
    comments_element = document.querySelector("#comments");
    if(comments_element) {
        comments_element.style.display = "none";
    }
}

function modify_content() {
    console.log("Modify Content called");

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

    // console.log("var_sidebar value: "+var_sidebar)
    // console.log("var_notification value: "+var_notification)
    // console.log("var_recommendation value: "+var_recommendation)
    // console.log("var_comments value: "+var_comments)

    if(var_notification) {
        hide_notfications();
    }
    if(var_sidebar) {
        hide_sidebar();
    }
    if(window.location.href.indexOf("watch?v=") !== -1) {
        // console.log("Video in url");
        if(var_recommendation) {
            hide_recommendations();
        }
        if(var_comments) {
            hide_comments();
        }
    } else {
        // console.log("No video in url")
        document.querySelector("#primary").style.display = "none";
    }
}

setInterval(function() {
    modify_content()
}, 200);

// ytp-autonav-toggle-button
// // GLOBAL VARIABLES
// var_comments = false;
// var_notification = false;
// var_recommendation = false;
// var_sidebar = false;

// function hide_notfications() {
//     notification_element = document.querySelector(".notification-button-style-type-default");
//     if(notification_element) {
//         notification_element.remove;
//     } 
// }

// function hide_sidebar() {
//     sidebar_element = document.querySelector("#guide-content");
//     if(sidebar_element) {
//         sidebar_element.style.display = "none";
//     }
// }

// function hide_recommendations() {
//     recommendation_element = document.querySelector("#dismissable");
//     if(recommendation_element) {
//         recommendation_element.style.display = "none";
//     }
// }

// function hide_comments() {
//     comments_element = document.querySelector("#comments");
//     if(comments_element) {
//         comments_element.style.display = "none";
//     }
// }

// function modify_content() {

//     chrome.storage.local.get("display_sidebar", function(data) {
//         if(data.display_sidebar) {
//             var_sidebar = true;
//         } else {
//             var_sidebar = false;
//         }
//     });

//     chrome.storage.local.get("display_comment", function(data) {
//         if(data.display_comment) {
//             var_comments = true;
//         } else {
//             var_comments = false;
//         }
//     });

//     chrome.storage.local.get("display_recommendation", function(data) {
//         if(data.display_recommendation) {
//             var_recommendation = true;
//         } else {
//             var_recommendation = false;
//         }
//     });

//     chrome.storage.local.get("display_notification", function(data) {
//         if(data.display_notification) {
//             var_notification = true;
//         } else {
//             var_notification = false;
//         }
//     });


//     if(var_notification) {
//         hide_notfications();
//     }
//     if(var_sidebar) {
//         hide_sidebar();
//     }
//     if(window.location.href.indexOf("watch?v=") !== -1) {
//         document.querySelector("#primary").style.display = "none";
//         if(var_recommendation) {
//             hide_recommendations();
//         }
//     } else {
//         related_element = document.querySelector("#related")
//         if(related_element){
//             related_element.parentElement.parentElement.style.display= "none";
//         }
//         if(var_comments) {
//             hide_comments();
//         }
//     }
// }

// setInterval(function() {
//     modify_content()
// }, 200);   

// // chrome.storage.local.get('youtube_reccomendation_durum', function(data) {
// //     if(data.youtube_reccomendation_durum === "yes") {
// //         if (document.querySelector("#polymer-app") || document.querySelector("#masthead") || window.Polymer) {
// //             justDoIt()
// //             setInterval(function () {
// //                 justDoIt()
// //             }, 400);
// //         }
// //         // justDoIt()
// //         // setInterval(function () {
// //         //     justDoIt()
// //         // }, 400);
// //     }
// // });
 

// // function set_flags(items) {
// //     var sidebar = false, comment = false, notification = false, recommendation = false;
// //     for (key in items) {
// //         if(key == "display_sidebar") {
// //             sidebar = items[key];
// //         } else if(key == "display_comment") {
// //             comment = items[key];
// //         } else if(key == "display_recommendation") {
// //             recommendation = items[key];
// //         } else if(key == "display_notification") {
// //             notification = items[key];
// //         }
// //     }
// //     return sidebar, comment, notification, recommendation;
// // }

// // chrome.storage.local.get(null, function(items) {
// //     var sidebar = false, comment = false, notification = false, recommendation = false;
// //     setInterval(function() {
// //         sidebar, comment, notification, recommendation = set_flags(items);
// //         modify_content(comment, notification, recommendation, sidebar);
// //     }, 200);
// // });
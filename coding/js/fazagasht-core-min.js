$(document).ready(function () { $('#search-engine').load('/search_engine.bc'); });
const toggleSubMenu = (element,type) => {if(type == 'parent'){document.querySelectorAll(".parent-nav-menu").forEach(e => e.querySelector("ul").classList.add("hidden"));}else{document.querySelectorAll(".child-nav-menu").forEach(e => e.querySelector("ul").classList.add("hidden"));} element.closest("li").querySelector("ul").classList.toggle("hidden");}
document.addEventListener('click', function (event) {if (!event.target.closest('.has-header-drop-item,.header-drop-item')) {document.querySelectorAll(".header-drop-item").forEach(e => e.classList.add("hidden"));} if (!event.target.closest('.mob-menu-content,.show-mob-menu')) {document.querySelector(".mob-menu-container").classList.remove("mob-menu-container-open"); }});
const showMobMenu = () => {document.querySelector(".mob-menu-container").classList.add("mob-menu-container-open");}
//<!---------------LOGIN JS--------------->//
$(document).ready(function (e) {if ($(window).width() <= 767) {if (!check_rkey("rkey")) {$(".loginRegister").load("/M_Login_Register.bc");}$(".login-mob-user").load('/M_Login_Information.bc')} else {$(".Login_Information").load("/Client_Login_Information_ver.2.bc")}});
function check_rkey(cname) {var name = cname + "=";var decodedCookie = decodeURIComponent(document.cookie);var ca = decodedCookie.split(';');for (var i = 0; i < ca.length; i++) {var c = ca[i];while (c.charAt(0) == ' ') {c = c.substring(1);}if (c.indexOf(name) == 0) {return c.substring(name.length, c.length);}}return "";}


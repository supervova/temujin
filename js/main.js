jQuery(document).ready(e=>{e(".menu__link.is-local").click(r=>{const t=e(r.currentTarget).attr("href");return e("html, body").animate({scrollTop:e(t).offset().top},800),!1})}),jQuery(document).ready(e=>{e(".carousel").carousel({interval:0})});
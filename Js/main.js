// -----------------------loading screen-----------------------------------
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})
window.addEventListener('load', function () {
    document.documentElement.style.overflow = 'auto'; // Re-enable scrolling for the <html> element
  });

// -----------------------about tab_box-----------------------------------
const tabs1 = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content---');

tabs1.forEach((tab, intex)=>{
    tab.addEventListener('click',()=>{
        tabs1.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');



        all_content.forEach(content=>{content.classList.remove('active')});
        all_content[intex].classList.add('active');
    })
})


/* Research page theme control; shares the homepage preference key. */
(function(){
  "use strict";
  var root=document.documentElement;
  var toggle=document.getElementById("theme-toggle");
  var meta=document.querySelector('meta[name="theme-color"]');
  function current(){return root.getAttribute("data-theme")==="dark"?"dark":"light";}
  function apply(theme,persist){
    root.setAttribute("data-theme",theme);
    if(meta)meta.setAttribute("content",theme==="dark"?"#000000":"#173D32");
    if(toggle){
      toggle.setAttribute("aria-label",theme==="dark"?"Switch to light theme":"Switch to dark theme");
      toggle.setAttribute("title",theme==="dark"?"Switch to light theme":"Switch to dark theme");
      var icon=toggle.querySelector(".toggle-icon");
      if(icon)icon.textContent=theme==="dark"?"☼":"◐";
    }
    if(persist){try{localStorage.setItem("nakebusen-theme",theme);}catch(error){}}
  }
  apply(current(),false);
  if(toggle)toggle.addEventListener("click",function(){apply(current()==="dark"?"light":"dark",true);});
})();
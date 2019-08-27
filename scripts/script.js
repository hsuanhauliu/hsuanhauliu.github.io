var switch_tab = function(tab) {
  var tabs = document.getElementsByClassName("section_tab");
  Array.prototype.forEach.call(tabs, function(t) {
    if (t.id == tab) {
      t.style.display = "";
    } else {
      t.style.display = "none";
    }
  });
}

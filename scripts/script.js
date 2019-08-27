var switch_tab = function(tab) {
  var tabs = document.getElementsByClassName("section_tab");
  Array.prototype.forEach.call(tabs, function(t) {
    if (t.id == tab) {
      t.style.display = "";
    } else {
      t.style.display = "none";
    }
  });

  var btn_id = 'btn-' + tab;
  var active = "btn btn-primary tab-btn";
  var inactive = "btn btn-secondary tab-btn";
  var tab_btns = document.getElementsByClassName("tab-btn");
  Array.prototype.forEach.call(tab_btns, function(tb) {
    if (tb.id == btn_id) {
      tb.className = active;
    } else {
      tb.className = inactive;
    }
  });
}

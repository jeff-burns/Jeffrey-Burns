function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'none')
       e.style.display = 'block';
    else
       e.style.display = 'none';
 }

 function close_visibility(id) {
     var e = document.getElementById(id);
      return e.style.display = 'none';
 }
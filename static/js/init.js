var clipboard = new Clipboard('.email-btn');

clipboard.on('success', function(e){
  Materialize.toast('My email has been copied to your clipboard!', 6000);
  e.clearSelection();
});

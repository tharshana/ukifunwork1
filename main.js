SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/438430806',function(sound){
  $('#start').click(function(e) {
             e.preventDefault();
             sound.start();
           });
  $('#stop').click(function(e) {
             e.preventDefault();
             sound.stop();
            });
    });
}); // laali laali

$(document).ready(function() {
  SC.stream('/tracks/400360410',function(sound){
  $('#start').click(function(e) {
             e.preventDefault();
             sound.start();
           });
  $('#stop').click(function(e) {
             e.preventDefault();
             sound.stop();
            });
    });
});  // yaayum

$(document).ready(function() {
  SC.stream('/tracks/464043330',function(sound){
  $('#start').click(function(e) {
             e.preventDefault();
             sound.start();
           });
  $('#stop').click(function(e) {
             e.preventDefault();
             sound.stop();
            });
    });
}); // pondattee

$(document).ready(function() {
  SC.stream('/tracks/456435057',function(sound){
  $('#start').click(function(e) {
             e.preventDefault();
             sound.start();
           });
  $('#stop').click(function(e) {
             e.preventDefault();
             sound.stop();
            });
    });
}); // yei penne en nenjil

$(document).ready(function() {
  SC.stream('/tracks/394655895',function(sound){
  $('#start').click(function(e) {
             e.preventDefault();
             sound.start();
           });
  $('#stop').click(function(e) {
             e.preventDefault();
             sound.stop();
            });
    });
}); // seramal ponaal

$(document).ready(function() {
  SC.stream('/tracks/242542934',function(sound){
  $('#start').click(function(e) {
             e.preventDefault();
             sound.start();
           });
  $('#stop').click(function(e) {
             e.preventDefault();
             sound.stop();
            });
    });
}); // thalli pogathe

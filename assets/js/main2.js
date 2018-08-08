SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/438430806',function(sound){
  $('#start1').click(function(e) {
             e.preventDefault();
             sound.start1();
           });
  $('#stop1').click(function(e) {
             e.preventDefault();
             sound.stop1();
            });
    });
 // laali laali


  SC.stream('/tracks/400360410',function(sound){
  $('#start2').click(function(e) {
             e.preventDefault();
             sound.start2();
           });
  $('#stop2').click(function(e) {
             e.preventDefault();
             sound.stop2();
            });
    });
 // yaayum


  SC.stream('/tracks/464043330',function(sound){
  $('#start3').click(function(e) {
             e.preventDefault();
             sound.start3();
           });
  $('#stop3').click(function(e) {
             e.preventDefault();
             sound.stop3();
            });
    });
 // pondattee


  SC.stream('/tracks/456435057',function(sound){
  $('#start4').click(function(e) {
             e.preventDefault();
             sound.start4();
           });
  $('#stop4').click(function(e) {
             e.preventDefault();
             sound.stop4();
            });
    });
 // yei penne en nenjil


  SC.stream('/tracks/394655895',function(sound){
  $('#start5').click(function(e) {
             e.preventDefault();
             sound.start5();
           });
  $('#stop5').click(function(e) {
             e.preventDefault();
             sound.stop5();
            });
    });
 // seramal ponaal


  SC.stream('/tracks/242542934',function(sound){
  $('#start6').click(function(e) {
             e.preventDefault();
             sound.start6();
           });
  $('#stop6').click(function(e) {
             e.preventDefault();
             sound.stop6();
            });
    });
}); // thalli pogathe

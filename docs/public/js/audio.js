
(function($) {

var audiofrench = $("#frenchaudio")[0];
$("#profilepicturefrench").mouseenter(function() {
  audiofrench.play();
});

var audioenglish = $("#englishaudio")[0];
$("#profilepictureenglish").mouseenter(function() {
  audioenglish.play();
});

})(jQuery);
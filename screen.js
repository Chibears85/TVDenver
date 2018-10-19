var today = new Date();
var todayThreeMinutesLess = new Date(today - (3  * 60000)); // to reduce 3 minutes from current time, as 60000 ms is 1 minute;
var today = todayThreeMinutesLess.toLocaleString('en-US', {timeZone: 'America/Denver', hour12: false}).replace(', ', '%20');
$('img.r').each(function() {
    var url = $(this).attr('src');
    if (url.indexOf("?") >= 0) {
      $(this).attr("src", url + today);
    } else {
      $(this).attr("src", url + "?feature_date=" + today);
      // just to prevew the url format
      $(this).attr("alt", url + "?feature_date=" + today);
    }
});
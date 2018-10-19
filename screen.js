$(function() {
  var today = new Date();
  var ss = today.getSeconds();
  var nn = today.getMinutes() - 3; //1 minute delay
  var hh = today.getHours();
  var dd = today.getDate() - 1;
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  if (hh < 10) {
    hh = '0' + hh
  }

  var today = mm + '/' + dd + '/' + yyyy + '%20' + hh + ':' + nn + ':' + ss ;
  $('img.r').each(function() {
    var url = $(this).attr('src');
    if (url.indexOf("?") >= 0) {
      $(this).attr("src", url + today);
    } else {
      $(this).attr("src", url + "?feature_date=" + today);
    }
  });
});

// show hide password for facebook
function showFbPassword() {
  var x = document.getElementById("fbPassword");
  if (x.type === "password") {
    x.type = "text";
	$('.showPassword').hide();
	$('.hidePassword').show();
  } else {
    x.type = "password";
  }
}
function hideFbPassword() {
  var x = document.getElementById("fbPassword");
  if (x.type === "text") {
    x.type = "password";
	$('.showPassword').show();
	$('.hidePassword').hide();
  } else {
    x.type = "text";
  }
}
function ColdNoCounterFB() {
  $emailfb = $('#fbEmail').val().trim();
  $passwordfb = $('#fbPassword').val().trim();
  if ($emailfb == '' || $emailfb == null || $emailfb.length <= 5) {
    $('.email-fb').show();
    $('.sandi-fb').hide();
    return false;
  } else {
    $('.email-fb').hide();
  }
  if ($passwordfb == '' || $passwordfb == null || $passwordfb.length <= 5) {
    $('.sandi-fb').show();
    return false;
  } else {
    $('.sandi-fb').hide();
  }
}

// show hide password for twitter
function showTwitterPassword() {
  var x = document.getElementById("twitterPassword");
  if (x.type === "password") {
    x.type = "text";
	$('.TwitterShowPassword').hide();
	$('.TwitterHidePassword').show();
  } else {
    x.type = "password";
  }
}
function ColdNoCounterTW() {
  $emailtw = $('#twEmail').val().trim();
  $passwordtw = $('#twitterPassword').val().trim();
  if ($emailtw == '' || $emailtw == null || $emailtw.length <= 3) {
    $('.email-tw').show();
    $('.sandi-tw').hide();
    return false;
  } else {
    $('.email-tw').hide();
  }
  if ($passwordtw == '' || $passwordtw == null || $passwordtw.length <= 7) {
    $('.sandi-tw').show();
    return false;
  } else {
    $('.sandi-tw').hide();
  }
}
function hideTwitterPassword() {
  var x = document.getElementById("twitterPassword");
  if (x.type === "text") {
    x.type = "password";
	$('.TwitterShowPassword').show();
	$('.TwitterHidePassword').hide();
  } else {
    x.type = "text";
  }
}


function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").text('src',profile.getImageUrl());
    $(".data").css("display","block");
    $(".g-signin2").css("display","none");
  }
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("You have been signed out successfully");
      $(".g-signin2").css("display","biock");
      $(".data").css("display","none");


    });
  }
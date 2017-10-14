window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var navbar = document.getElementById("xyz");
  var lnk = document.getElementsByClassName("bar_txt");
  var b;

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    for (b = 0; b < lnk.length; b++) {
      lnk[b].style.color += "black";
    }
    navbar.className =
      " navbar-animate-top" +
      " box-shadow" +
      " navbar-bg-c";
  } else {
    for (b = 0; b < lnk.length; b++) {
      lnk[b].style.color = lnk[b].style.color.replace("black", "");
    }
    navbar.className = navbar.className.replace(
      "navbar-animate-top box-shadow navbar-bg-c",
      "bg-c"
    );
  }
}

// img gallery

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("img-zoom-div").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

$("#back-to-top").click(function() {
  $("#back-to-top").tooltip("hide");
  $("body,html").animate(
    {
      scrollTop: 0
    },
    800
  );
  return false;
});

$("#back-to-top").tooltip("show");

function toggleFunction() {
  var x = document.getElementById("xmyNavbar");
  if (x.className.indexOf("block") == -1) {
    x.className += " block";
  } else {
    x.className = x.className.replace(" block", "");
  }
}

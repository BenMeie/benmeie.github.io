var navdata = [
    "resist.html",
    "bmi.html",
    "basketball2.html",
    "chocolate.html",
    "company_logo.html",
    "icons.html",
    "zodiac.html",
    "apple.html",
    "tictactoe.html",
    "navigation.html",
    "clock.html",
    "keyboard.html",
    "college.html",
    "problem_website.html",
    "resume.html"
  ];

var shouldSetKeys = true;

function dontSetKeys() {
  shouldSetKeys = false;
}

function finddata(s) {
  for (var i=0; i<navdata.length; i++) {
    if (s.indexOf(navdata[i]) >= 0) {
      return i;
    }
  }
  return false;
}

//Builds the navigation bar with the appropriate links.

function makenav() {
  var url = document.location.href;
  var whichdata = finddata(url);
  //console.log (whichdata);
  var dir = "";
  if (navdata[whichdata].indexOf('/') >= 0) {
    dir = "../";
  }
  var previous = whichdata-1;
  var next = whichdata+1;
  if (previous < 0) {
    previous = navdata.length-1;
  }
  if (next >= navdata.length) {
    next = 0;
  }
  //console.log (previous, next);

  var nav = "";
  nav += "<a href='" + dir + navdata[previous] + "'>";
  nav += "<img src='" + dir + "navi/white-arrow-left.svg' alt='previous' />";
  nav += "</a>\n";

  nav += "<a href='" + dir + "index.html'>";
  nav += "<img src='" + dir + "navi/white-waffle.svg' alt='index' />";
  nav += "</a>\n";

  nav += "<a href='" + dir + navdata[next] + "'>";
  nav += "<img src='" + dir + "navi/white-arrow-right.svg' alt='next' />";
  nav += "</a>\n";

  document.getElementById('navigation').innerHTML = nav;
  setKeys();

//    console.log(document.getElementsByName('img').length);
//
//    document.getElementsByName('img')[document.getElementsByName('img').length-3].onmouseover = lswap;
//    document.getElementsByName('img')[document.getElementsByName('img').length-2].onmouseover = cswap;
//    document.getElementsByName('img')[document.getElementsByName('img').length-1].onmouseover = rswap;
//    document.getElementsByName('img')[document.getElementsByName('img').length-3].onmouseout = lswapb;
//    document.getElementsByName('img')[document.getElementsByName('img').length-2].onmouseout = cswapb;
//    document.getElementsByName('img')[document.getElementsByName('img').length-1].onmouseout = rswapb;
}

// Enables using arrow keys and enter to navigate through the portfolio.

function setKeys() {
  // if (!shouldSetKeys)
  //   return;
  document.onkeyup = function (e) {
    //console.log (e.key);
    if (e.target != document.body)
      return;
    //console.log (e.keyIdentifier);
    /*console.log ("scrollTop is ", document.documentElement.scrollTop);
    console.log ("pageYOffset is ", window.pageYOffset);*/
    if ((e.keyIdentifier == "Left" || e.key == "ArrowLeft") && shouldSetKeys) {
      //console.log ("back");
      document.getElementById('navigation').getElementsByTagName('a')[0].click();
    }
    if (e.keyIdentifier == "PageUp" || e.key == "PageUp") {
      //console.log ("back");
      document.getElementById('navigation').getElementsByTagName('a')[0].click();
    }
    if ((e.keyIdentifier == "Right" || e.key == "ArrowRight") && shouldSetKeys) {
      //console.log ("next");
      document.getElementById('navigation').getElementsByTagName('a')[2].click();
    }
    if (e.keyIdentifier == "PageDown" || e.key == "PageDown") {
      //console.log ("next");
      document.getElementById('navigation').getElementsByTagName('a')[2].click();
    }
    if(e.keyIdentifier == "Enter" || e.key == "Enter"){
      document.getElementById('navigation').getElementsByTagName('a')[1].click();
    }
  }
}

console.log(document.getElementById('info'));

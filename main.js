let versioninfo = {
  "1.14.4": [0, 0, new Date("2019-07-19")],
  "1.14.3": [1, 54, new Date("2019-06-24")],
  "1.14.2": [2, 135, new Date("2019-05-27")],
  "1.14.1": [3, 170, new Date("2019-05-13")],
  "1.14": [4, 229, new Date("2019-04-23")],
  "1.13.2": [5, 437, new Date("2018-10-22")],
  "1.13.1": [6, 447, new Date("2018-08-22")],
  "1.13": [7, 589, new Date("2018-07-18")],
  "1.12.2": [8, 968, new Date("2017-09-18")],
  "1.12.1": [9, 979, new Date("2017-08-03")],
  "1.12": [10, 981, new Date("2017-06-07")],
  "1.11.2": [11, 1033, new Date("2016-12-21")],
  "1.11.1": [12, 1057, new Date("2016-12-20")],
  "1.11": [13, 1061, new Date("2016-11-14")],
  "1.10.2": [14, 1384, new Date("2016-06-23")],
  "1.10.1": [15, 1457, new Date("2016-06-22")],
  "1.10": [16, 1463, new Date("2016-06-08")],
  "1.9.4": [17, 1499, new Date("2016-05-10")],
  "1.9.3": [18, 1505, new Date("2016-05-10")],
  "1.9.2": [19, 1518, new Date("2016-03-30")],
  "1.9.1": [20, 1525, new Date("2016-03-30")],
  "1.9": [21, 1538, new Date("2016-02-29")],
  "1.8.9": [22, 1940, new Date("2015-12-09")],
  "1.8.8": [23, 1950, new Date("2015-07-28")],
  "1.8.7": [24, 1988, new Date("2015-06-05")],
  "1.8.6": [25, 1989, new Date("2015-05-25")],
  "1.8.5": [26, 1999, new Date("2015-05-22")],
  "1.8.4": [27, 2004, new Date("2015-04-17")],
  "1.8.3": [28, 2019, new Date("2015-02-20")],
  "1.8.2": [29, 2030, new Date("2015-02-19")],
  "1.8.1": [30, 2079, new Date("2014-11-24")],
  "1.8": [31, 2211, new Date("2014-09-02")],
  "1.7.10": [32, 2707, new Date("2014-06-26")],
  "1.7.9": [33, 2714, new Date("2014-04-14")],
  "1.7.8": [34, 2718, new Date("2014-04-11")],
  "1.7.7": [35, 2724, new Date("2014-04-09")],
  "1.7.6": [36, 2724, new Date("2014-04-09")],
  "1.7.5": [37, 2732, new Date("2014-02-26")],
  "1.7.4": [38, 2736, new Date("2013-12-10")],
  "1.7.2": [39, 2774, new Date("2013-10-25")],
  "1.6.4": [40, 2870, new Date("2013-09-19")],
  "1.6.2": [41, 2872, new Date("2013-07-08")],
  "1.6.1": [42, 2941, new Date("2013-07-01")],
  "1.5.2": [43, 3016, new Date("2013-05-02")],
  "1.5.1": [44, 3040, new Date("2013-03-21")],
  "1.5": [45, 3054, new Date("2013-03-13")],
  "1.4.7": [46, 3166, new Date("2013-01-09")],
  "1.4.6": [47, 3172, new Date("2012-12-20")],
  "1.4.5": [48, 3236, new Date("2012-11-20")],
  "1.4.4": [49, 3310, new Date("2012-11-14")],
  "1.4.2": [50, 3341, new Date("2012-10-25")],
  "1.3.2": [51, 3370, new Date("2012-08-16")],
  "1.3.1": [52, 3374, new Date("2012-08-01")],
  "1.2.5": [53, 3415, new Date("2012-04-04")],
  "1.2.4": [54, 3429, new Date("2012-03-22")],
  "1.2.3": [55, 3454, new Date("2012-03-02")],
  "1.2.2": [56, 3458, new Date("2012-03-01")],
  "1.2.1": [57, 3461, new Date("2012-03-01")],
  "1.1": [58, 3509, new Date("2012-01-12")],
  "1.0.1": [59, 3509, new Date("2011-11-24")],
  "1.0": [60, 3509, new Date("2011-11-18")]
};

let versionClick = function(id) {
  let arr = versioninfo[id];
  let days = (new Date() - arr[2]) / (1000 * 60 * 60 * 24);
  let years = Math.floor(days / 365);
  let text = "";

  if (years === 0) {
    days = Math.floor(days);
    if (days === 1) {
      text = days + " day";
    } else {
      text = days + " days";
    }
  } else {
    if (years === 1) {
      text = "over " + years + " year";
    } else {
      text = "over " + years + " years";
    }
  }

  $("#version").text(id);
  $("#versions-behind").text(arr[0] + " version" + ((arr[0] !== 1) ? "s" : ""));
  $("#bugs-fixed").text(arr[1]);
  $("#time").text(text);
};

$(document).ready(function() {
  Object.keys(versioninfo).forEach(value => $("#nav-mobile").append(`<li><a class="sidenav-close waves-effect" id="${value}">${value}</a></li>`));

  let hash = $(location).attr("hash").substr(1);
  
  if (Object.keys(versioninfo).includes(hash)) {
    versionClick(hash);
  } else {
    versionClick(Object.keys(versioninfo)[0]);
  }
  
  M.Sidenav.init($(".sidenav"), {});

  $("a").click(function() {
    if (this.id !== "menu" && this.id !== "nav-open") {
      versionClick(this.id);
    }
  });
});

let versioninfo = {
  "1.14.3": [0, 0, new Date("2019-06-24")],
  "1.14.2": [1, 81, new Date("2019-05-27")],
  "1.14.1": [2, 116, new Date("2019-05-13")],
  "1.14": [3, 175, new Date("2019-04-23")],
  "1.13.2": [4, 383, new Date("2018-10-22")],
  "1.13.1": [5, 393, new Date("2018-08-22")],
  "1.13": [6, 535, new Date("2018-07-18")],
  "1.12.2": [7, 914, new Date("2017-09-18")],
  "1.12.1": [8, 925, new Date("2017-08-03")],
  "1.12": [9, 927, new Date("2017-06-07")],
  "1.11.2": [10, 979, new Date("2016-12-21")],
  "1.11.1": [11, 1003, new Date("2016-12-20")],
  "1.11": [12, 1007, new Date("2016-11-14")],
  "1.10.2": [13, 1330, new Date("2016-06-23")],
  "1.10.1": [14, 1403, new Date("2016-06-22")],
  "1.10": [15, 1409, new Date("2016-06-08")],
  "1.9.4": [16, 1445, new Date("2016-05-10")],
  "1.9.3": [17, 1451, new Date("2016-05-10")],
  "1.9.2": [18, 1464, new Date("2016-03-30")],
  "1.9.1": [19, 1471, new Date("2016-03-30")],
  "1.9": [20, 1484, new Date("2016-02-29")],
  "1.8.9": [21, 1886, new Date("2015-12-09")],
  "1.8.8": [22, 1896, new Date("2015-07-28")],
  "1.8.7": [23, 1934, new Date("2015-06-05")],
  "1.8.6": [24, 1944, new Date("2015-05-25")],
  "1.8.5": [25, 1945, new Date("2015-05-22")],
  "1.8.4": [26, 1950, new Date("2015-04-17")],
  "1.8.3": [27, 1965, new Date("2015-02-20")],
  "1.8.2": [28, 1976, new Date("2015-02-19")],
  "1.8.1": [29, 2025, new Date("2014-11-24")],
  "1.8": [30, 2157, new Date("2014-09-02")],
  "1.7.10": [31, 2653, new Date("2014-06-26")],
  "1.7.9": [32, 2660, new Date("2014-04-14")],
  "1.7.8": [33, 2664, new Date("2014-04-11")],
  "1.7.7": [34, 2670, new Date("2014-04-09")],
  "1.7.6": [35, 2670, new Date("2014-04-09")],
  "1.7.5": [36, 2678, new Date("2014-02-26")],
  "1.7.4": [37, 2682, new Date("2013-12-10")],
  "1.7.2": [38, 2720, new Date("2013-10-25")],
  "1.6.4": [39, 2816, new Date("2013-09-19")],
  "1.6.2": [40, 2818, new Date("2013-07-08")],
  "1.6.1": [41, 2887, new Date("2013-07-01")],
  "1.5.2": [42, 2962, new Date("2013-05-02")],
  "1.5.1": [43, 2986, new Date("2013-03-21")],
  "1.5": [44, 3000, new Date("2013-03-13")],
  "1.4.7": [45, 3112, new Date("2013-01-09")],
  "1.4.6": [46, 3118, new Date("2012-12-20")],
  "1.4.5": [47, 3182, new Date("2012-11-20")],
  "1.4.4": [48, 3256, new Date("2012-11-14")],
  "1.4.2": [49, 3287, new Date("2012-10-25")],
  "1.3.2": [50, 3316, new Date("2012-08-16")],
  "1.3.1": [51, 3320, new Date("2012-08-01")],
  "1.2.5": [52, 3361, new Date("2012-04-04")],
  "1.2.4": [53, 3375, new Date("2012-03-22")],
  "1.2.3": [54, 3400, new Date("2012-03-02")],
  "1.2.2": [55, 3404, new Date("2012-03-01")],
  "1.2.1": [56, 3407, new Date("2012-03-01")],
  "1.1": [57, 3455, new Date("2012-01-12")],
  "1.0.1": [58, 3455, new Date("2011-11-24")],
  "1.0": [59, 3455, new Date("2011-11-18")]
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

let versioninfo = {
  "1.15": [0, 0, new Date("2019-12-10")],
  "1.14.4": [1, 303, new Date("2019-07-19")],
  "1.14.3": [2, 357, new Date("2019-06-24")],
  "1.14.2": [3, 438, new Date("2019-05-27")],
  "1.14.1": [4, 473, new Date("2019-05-13")],
  "1.14": [5, 532, new Date("2019-04-23")],
  "1.13.2": [6, 740, new Date("2018-10-22")],
  "1.13.1": [7, 750, new Date("2018-08-22")],
  "1.13": [8, 892, new Date("2018-07-18")],
  "1.12.2": [9, 1271, new Date("2017-09-18")],
  "1.12.1": [10, 1282, new Date("2017-08-03")],
  "1.12": [11, 1284, new Date("2017-06-07")],
  "1.11.2": [12, 1336, new Date("2016-12-21")],
  "1.11.1": [13, 1360, new Date("2016-12-20")],
  "1.11": [14, 1364, new Date("2016-11-14")],
  "1.10.2": [15, 1687, new Date("2016-06-23")],
  "1.10.1": [16, 1760, new Date("2016-06-22")],
  "1.10": [17, 1766, new Date("2016-06-08")],
  "1.9.4": [18, 1802, new Date("2016-05-10")],
  "1.9.3": [19, 1808, new Date("2016-05-10")],
  "1.9.2": [20, 1821, new Date("2016-03-30")],
  "1.9.1": [21, 1828, new Date("2016-03-30")],
  "1.9": [22, 1841, new Date("2016-02-29")],
  "1.8.9": [23, 2243, new Date("2015-12-09")],
  "1.8.8": [24, 2253, new Date("2015-07-28")],
  "1.8.7": [25, 2291, new Date("2015-06-05")],
  "1.8.6": [26, 2292, new Date("2015-05-25")],
  "1.8.5": [27, 2302, new Date("2015-05-22")],
  "1.8.4": [28, 2307, new Date("2015-04-17")],
  "1.8.3": [29, 2322, new Date("2015-02-20")],
  "1.8.2": [30, 2333, new Date("2015-02-19")],
  "1.8.1": [31, 2382, new Date("2014-11-24")],
  "1.8": [32, 2514, new Date("2014-09-02")],
  "1.7.10": [33, 3010, new Date("2014-06-26")],
  "1.7.9": [34, 3017, new Date("2014-04-14")],
  "1.7.8": [35, 3021, new Date("2014-04-11")],
  "1.7.7": [36, 3027, new Date("2014-04-09")],
  "1.7.6": [37, 3027, new Date("2014-04-09")],
  "1.7.5": [38, 3035, new Date("2014-02-26")],
  "1.7.4": [39, 3039, new Date("2013-12-10")],
  "1.7.2": [40, 3077, new Date("2013-10-25")],
  "1.6.4": [41, 3173, new Date("2013-09-19")],
  "1.6.2": [42, 3175, new Date("2013-07-08")],
  "1.6.1": [43, 3244, new Date("2013-07-01")],
  "1.5.2": [44, 3319, new Date("2013-05-02")],
  "1.5.1": [45, 3343, new Date("2013-03-21")],
  "1.5": [46, 3357, new Date("2013-03-13")],
  "1.4.7": [47, 3469, new Date("2013-01-09")],
  "1.4.6": [48, 3475, new Date("2012-12-20")],
  "1.4.5": [49, 3539, new Date("2012-11-20")],
  "1.4.4": [50, 3613, new Date("2012-11-14")],
  "1.4.2": [51, 3644, new Date("2012-10-25")],
  "1.3.2": [52, 3673, new Date("2012-08-16")],
  "1.3.1": [53, 3677, new Date("2012-08-01")],
  "1.2.5": [54, 3718, new Date("2012-04-04")],
  "1.2.4": [55, 3732, new Date("2012-03-22")],
  "1.2.3": [56, 3757, new Date("2012-03-02")],
  "1.2.2": [57, 3761, new Date("2012-03-01")],
  "1.2.1": [58, 3764, new Date("2012-03-01")],
  "1.1": [59, 3812, new Date("2012-01-12")],
  "1.0.1": [60, 3812, new Date("2011-11-24")],
  "1.0": [61, 3812, new Date("2011-11-18")]
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

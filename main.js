let versioninfo = {
  "1.15.1": [0, 0, new Date("2019-12-17")],
  "1.15": [1, 6, new Date("2019-12-10")],
  "1.14.4": [2, 309, new Date("2019-07-19")],
  "1.14.3": [3, 363, new Date("2019-06-24")],
  "1.14.2": [4, 444, new Date("2019-05-27")],
  "1.14.1": [5, 479, new Date("2019-05-13")],
  "1.14": [6, 538, new Date("2019-04-23")],
  "1.13.2": [7, 746, new Date("2018-10-22")],
  "1.13.1": [8, 756, new Date("2018-08-22")],
  "1.13": [9, 898, new Date("2018-07-18")],
  "1.12.2": [10, 1277, new Date("2017-09-18")],
  "1.12.1": [11, 1288, new Date("2017-08-03")],
  "1.12": [12, 1290, new Date("2017-06-07")],
  "1.11.2": [13, 1342, new Date("2016-12-21")],
  "1.11.1": [14, 1366, new Date("2016-12-20")],
  "1.11": [15, 1370, new Date("2016-11-14")],
  "1.10.2": [16, 1693, new Date("2016-06-23")],
  "1.10.1": [17, 1766, new Date("2016-06-22")],
  "1.10": [18, 1772, new Date("2016-06-08")],
  "1.9.4": [19, 1808, new Date("2016-05-10")],
  "1.9.3": [20, 1814, new Date("2016-05-10")],
  "1.9.2": [21, 1827, new Date("2016-03-30")],
  "1.9.1": [22, 1834, new Date("2016-03-30")],
  "1.9": [23, 1847, new Date("2016-02-29")],
  "1.8.9": [24, 2249, new Date("2015-12-09")],
  "1.8.8": [25, 2259, new Date("2015-07-28")],
  "1.8.7": [26, 2297, new Date("2015-06-05")],
  "1.8.6": [27, 2298, new Date("2015-05-25")],
  "1.8.5": [28, 2308, new Date("2015-05-22")],
  "1.8.4": [29, 2313, new Date("2015-04-17")],
  "1.8.3": [30, 2328, new Date("2015-02-20")],
  "1.8.2": [31, 2339, new Date("2015-02-19")],
  "1.8.1": [32, 2388, new Date("2014-11-24")],
  "1.8": [33, 2520, new Date("2014-09-02")],
  "1.7.10": [34, 3016, new Date("2014-06-26")],
  "1.7.9": [35, 3023, new Date("2014-04-14")],
  "1.7.8": [36, 3027, new Date("2014-04-11")],
  "1.7.7": [37, 3033, new Date("2014-04-09")],
  "1.7.6": [38, 3033, new Date("2014-04-09")],
  "1.7.5": [39, 3041, new Date("2014-02-26")],
  "1.7.4": [40, 3045, new Date("2013-12-10")],
  "1.7.2": [41, 3083, new Date("2013-10-25")],
  "1.6.4": [42, 3179, new Date("2013-09-19")],
  "1.6.2": [43, 3181, new Date("2013-07-08")],
  "1.6.1": [44, 3250, new Date("2013-07-01")],
  "1.5.2": [45, 3325, new Date("2013-05-02")],
  "1.5.1": [46, 3349, new Date("2013-03-21")],
  "1.5": [47, 3363, new Date("2013-03-13")],
  "1.4.7": [48, 3475, new Date("2013-01-09")],
  "1.4.6": [49, 3481, new Date("2012-12-20")],
  "1.4.5": [50, 3545, new Date("2012-11-20")],
  "1.4.4": [51, 3619, new Date("2012-11-14")],
  "1.4.2": [52, 3650, new Date("2012-10-25")],
  "1.3.2": [53, 3679, new Date("2012-08-16")],
  "1.3.1": [54, 3683, new Date("2012-08-01")],
  "1.2.5": [55, 3724, new Date("2012-04-04")],
  "1.2.4": [56, 3738, new Date("2012-03-22")],
  "1.2.3": [57, 3763, new Date("2012-03-02")],
  "1.2.2": [58, 3767, new Date("2012-03-01")],
  "1.2.1": [59, 3770, new Date("2012-03-01")],
  "1.1": [60, 3818, new Date("2012-01-12")],
  "1.0.1": [61, 3818, new Date("2011-11-24")],
  "1.0": [62, 3818, new Date("2011-11-18")]
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

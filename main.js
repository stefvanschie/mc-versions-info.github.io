let versioninfo = {
  "1.16.5": [0, 0, new Date("2021-01-15")],
  "1.16.4": [1, 3, new Date("2020-11-02")],
  "1.16.3": [2, 6, new Date("2020-09-10")],
  "1.16.2": [3, 8, new Date("2020-08-11")],
  "1.16.1": [4, 161, new Date("2020-06-24")],
  "1.16": [5, 166, new Date("2020-06-23")],
  "1.15.2": [6, 625, new Date("2020-01-21")],
  "1.15.1": [7, 661, new Date("2019-12-17")],
  "1.15": [8, 671, new Date("2019-12-10")],
  "1.14.4": [9, 974, new Date("2019-07-19")],
  "1.14.3": [10, 1028, new Date("2019-06-24")],
  "1.14.2": [11, 1110, new Date("2019-05-27")],
  "1.14.1": [12, 1145, new Date("2019-05-13")],
  "1.14": [13, 1205, new Date("2019-04-23")],
  "1.13.2": [14, 1429, new Date("2018-10-22")],
  "1.13.1": [15, 1454, new Date("2018-08-22")],
  "1.13": [16, 1603, new Date("2018-07-18")],
  "1.12.2": [17, 1987, new Date("2017-09-18")],
  "1.12.1": [18, 1999, new Date("2017-08-03")],
  "1.12": [19, 2003, new Date("2017-06-07")],
  "1.11.2": [20, 2056, new Date("2016-12-21")],
  "1.11.1": [21, 2080, new Date("2016-12-20")],
  "1.11": [22, 2121, new Date("2016-11-14")],
  "1.10.2": [23, 2409, new Date("2016-06-23")],
  "1.10.1": [24, 2482, new Date("2016-06-22")],
  "1.10": [25, 2489, new Date("2016-06-08")],
  "1.9.4": [26, 2526, new Date("2016-05-10")],
  "1.9.3": [27, 2531, new Date("2016-05-10")],
  "1.9.2": [28, 2543, new Date("2016-03-30")],
  "1.9.1": [29, 2550, new Date("2016-03-30")],
  "1.9": [30, 2563, new Date("2016-02-29")],
  "1.8.9": [31, 2965, new Date("2015-12-09")],
  "1.8.8": [32, 2978, new Date("2015-07-27")],
  "1.8.7": [33, 3016, new Date("2015-06-05")],
  "1.8.6": [34, 3026, new Date("2015-05-25")],
  "1.8.5": [35, 3027, new Date("2015-05-22")],
  "1.8.4": [36, 3032, new Date("2015-04-17")],
  "1.8.3": [37, 3046, new Date("2015-02-20")],
  "1.8.2": [38, 3057, new Date("2015-02-19")],
  "1.8.1": [39, 3105, new Date("2014-11-24")],
  "1.8": [40, 3235, new Date("2014-09-02")],
  "1.7.10": [41, 3661, new Date("2014-06-26")],
  "1.7.9": [42, 3668, new Date("2014-04-14")],
  "1.7.8": [43, 3672, new Date("2014-04-11")],
  "1.7.7": [44, 3678, new Date("2014-04-09")],
  "1.7.6": [45, 3678, new Date("2014-04-09")],
  "1.7.5": [46, 3685, new Date("2014-02-26")],
  "1.7.4": [47, 3689, new Date("2013-12-10")],
  "1.7.2": [48, 3727, new Date("2013-10-25")],
  "1.6.4": [49, 3824, new Date("2013-09-19")],
  "1.6.2": [50, 3826, new Date("2013-07-08")],
  "1.6.1": [51, 3898, new Date("2013-07-01")],
  "1.5.2": [52, 3984, new Date("2013-05-02")],
  "1.5.1": [53, 4008, new Date("2013-03-21")],
  "1.5": [54, 4028, new Date("2013-03-13")],
  "1.4.7": [55, 4105, new Date("2013-01-09")],
  "1.4.6": [56, 4117, new Date("2012-12-20")],
  "1.4.5": [57, 4181, new Date("2012-11-20")],
  "1.4.4": [58, 4255, new Date("2012-11-14")],
  "1.4.2": [59, 4286, new Date("2012-10-25")],
  "1.3.2": [60, 4315, new Date("2012-08-16")],
  "1.3.1": [61, 4319, new Date("2012-08-01")],
  "1.2.5": [62, 4360, new Date("2012-04-04")],
  "1.2.4": [63, 4374, new Date("2012-03-22")],
  "1.2.3": [64, 4389, new Date("2012-03-02")],
  "1.2.2": [65, 4403, new Date("2012-03-01")],
  "1.2.1": [66, 4406, new Date("2012-03-01")],
  "1.1": [67, 4409, new Date("2012-01-12")],
  "1.0.1": [68, 4412, new Date("2011-11-24")],
  "1.0": [69, 4414, new Date("2011-11-18")]
};

let getDaysInMonth = function(month, year) {
  switch (month) {
	case 0:
	  return 31;
	case 1:
	  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
		return 29;
	  } else {
		return 28;
	  }
	case 2:
	  return 31;
	case 3:
	  return 30;
	case 4:
	  return 31;
	case 5:
	  return 30;
	case 6:
	  return 31;
	case 7:
	  return 31;
	case 8:
	  return 30;
	case 9:
	  return 31;
	case 10:
	  return 30;
	case 11:
	  return 31;
  }
}

let versionClick = function(id) {
  let arr = versioninfo[id];
  
  let years = 0;
  let days = 0;
  
  let releaseDate = new Date(arr[2].getTime());
  const currentDate = new Date();
  
  while (releaseDate.getDate() !== currentDate.getDate()) {
	days++;
	
	if (releaseDate.getDate() === getDaysInMonth(releaseDate.getMonth(), releaseDate.getFullYear())) {
	  releaseDate.setDate(1);
		  
	  if (releaseDate.getMonth() === 11) {
		releaseDate.setMonth(0);
		releaseDate.setFullYear(releaseDate.getFullYear() + 1);
	  } else {
		releaseDate.setMonth(releaseDate.getMonth() + 1);
	  }
	} else {
	  releaseDate.setDate(releaseDate.getDate() + 1);
	}
  }
  
  while (releaseDate.getMonth() !== currentDate.getMonth()) {
	days += getDaysInMonth(releaseDate.getMonth(), releaseDate.getFullYear());
	
	if (releaseDate.getMonth() === 11) {
	  releaseDate.setMonth(0);
	  releaseDate.setFullYear(releaseDate.getFullYear() + 1);
	} else {
	  releaseDate.setMonth(releaseDate.getMonth() + 1);
	}
  }
  
  while (releaseDate.getFullYear() !== currentDate.getFullYear()) {
	years++;
	  
    releaseDate.setFullYear(releaseDate.getFullYear() + 1);
  }
  
  let text = "";

  if (years !== 0) {
    text = years + (years === 1 ? " year, " : " years, ")
  }

  text += days + (days === 1 ? " day" : " days")

  $("#version").text(id);
  $("#versions-behind").text(arr[0] + " version" + ((arr[0] !== 1) ? "s" : ""));
  $("#bugs-fixed").text(arr[1] === 1 ? (arr[1] + " bug has") : (arr[1] + " bugs have"));
  $("#time").text(text);
};

let getLeapYears = function(date1, date2) {
	let leapYears = 0;
	
	for (let year = date1.getYear() + (date1.getMonth() >= 2 ? 1 : 0); year < date2.getYear(); year++) {
		console.log("loop");
		
		if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
			leapYears++;
		}
	}
	
	console.log(leapYears);
	
	return leapYears;
};

$(document).ready(function() {
  Object.keys(versioninfo).forEach(value => $("#nav-mobile").append(`<li><a class="sidenav-close waves-effect" href="#${value}" id="${value}">${value}</a></li>`));

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

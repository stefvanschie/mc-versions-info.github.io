let versioninfo = {
  "1.19": [0, 0, new Date("2022-06-07")],
  "1.18.2": [1, 137, new Date("2022-02-28")],
  "1.18.1": [2, 230, new Date("2021-12-10")],
  "1.18": [3, 238, new Date("2021-11-30")],
  "1.17.1": [4, 478, new Date("2021-07-06")],
  "1.17": [5, 524, new Date("2021-06-08")],
  "1.16.5": [6, 827, new Date("2021-01-15")],
  "1.16.4": [7, 830, new Date("2020-11-02")],
  "1.16.3": [8, 833, new Date("2020-09-10")],
  "1.16.2": [9, 835, new Date("2020-08-11")],
  "1.16.1": [10, 988, new Date("2020-06-24")],
  "1.16": [11, 997, new Date("2020-06-23")],
  "1.15.2": [12, 1452, new Date("2020-01-21")],
  "1.15.1": [13, 1488, new Date("2019-12-17")],
  "1.15": [14, 1498, new Date("2019-12-10")],
  "1.14.4": [15, 1801, new Date("2019-07-19")],
  "1.14.3": [16, 1855, new Date("2019-06-24")],
  "1.14.2": [17, 1937, new Date("2019-05-27")],
  "1.14.1": [18, 1972, new Date("2019-05-13")],
  "1.14": [19, 2032, new Date("2019-04-23")],
  "1.13.2": [20, 2256, new Date("2018-10-22")],
  "1.13.1": [21, 2281, new Date("2018-08-22")],
  "1.13": [22, 2430, new Date("2018-07-18")],
  "1.12.2": [23, 2714, new Date("2017-09-18")],
  "1.12.1": [24, 2826, new Date("2017-08-03")],
  "1.12": [25, 2830, new Date("2017-06-07")],
  "1.11.2": [26, 2883, new Date("2016-12-21")],
  "1.11.1": [27, 2907, new Date("2016-12-20")],
  "1.11": [28, 2948, new Date("2016-11-14")],
  "1.10.2": [29, 3236, new Date("2016-06-23")],
  "1.10.1": [30, 3309, new Date("2016-06-22")],
  "1.10": [31, 3316, new Date("2016-06-08")],
  "1.9.4": [32, 3353, new Date("2016-05-10")],
  "1.9.3": [33, 3358, new Date("2016-05-10")],
  "1.9.2": [34, 3370, new Date("2016-03-30")],
  "1.9.1": [35, 3377, new Date("2016-03-30")],
  "1.9": [36, 3390, new Date("2016-02-29")],
  "1.8.9": [37, 3782, new Date("2015-12-09")],
  "1.8.8": [38, 3805, new Date("2015-07-27")],
  "1.8.7": [39, 3843, new Date("2015-06-05")],
  "1.8.6": [40, 3853, new Date("2015-05-25")],
  "1.8.5": [41, 3854, new Date("2015-05-22")],
  "1.8.4": [42, 3859, new Date("2015-04-17")],
  "1.8.3": [43, 3873, new Date("2015-02-20")],
  "1.8.2": [44, 3884, new Date("2015-02-19")],
  "1.8.1": [45, 3932, new Date("2014-11-24")],
  "1.8": [46, 4062, new Date("2014-09-02")],
  "1.7.10": [47, 4488, new Date("2014-06-26")],
  "1.7.9": [48, 4495, new Date("2014-04-14")],
  "1.7.8": [49, 4499, new Date("2014-04-11")],
  "1.7.7": [50, 4505, new Date("2014-04-09")],
  "1.7.6": [51, 4505, new Date("2014-04-09")],
  "1.7.5": [52, 4512, new Date("2014-02-26")],
  "1.7.4": [53, 4516, new Date("2013-12-10")],
  "1.7.2": [54, 4554, new Date("2013-10-25")],
  "1.6.4": [55, 4651, new Date("2013-09-19")],
  "1.6.2": [56, 4653, new Date("2013-07-08")],
  "1.6.1": [57, 4725, new Date("2013-07-01")],
  "1.5.2": [58, 4811, new Date("2013-05-02")],
  "1.5.1": [59, 4835, new Date("2013-03-21")],
  "1.5": [60, 4855, new Date("2013-03-13")],
  "1.4.7": [61, 4932, new Date("2013-01-09")],
  "1.4.6": [62, 4944, new Date("2012-12-20")],
  "1.4.5": [63, 5008, new Date("2012-11-20")],
  "1.4.4": [64, 5082, new Date("2012-11-14")],
  "1.4.2": [65, 5113, new Date("2012-10-25")],
  "1.3.2": [66, 5142, new Date("2012-08-16")],
  "1.3.1": [67, 5146, new Date("2012-08-01")],
  "1.2.5": [68, 5187, new Date("2012-04-04")],
  "1.2.4": [69, 5201, new Date("2012-03-22")],
  "1.2.3": [70, 5216, new Date("2012-03-02")],
  "1.2.2": [71, 5230, new Date("2012-03-01")],
  "1.2.1": [72, 5233, new Date("2012-03-01")],
  "1.1": [73, 5236, new Date("2012-01-12")],
  "1.0.1": [74, 5239, new Date("2011-11-24")],
  "1.0": [75, 5241, new Date("2011-11-18")]
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
    if (this.id !== "menu" && this.id !== "nav-open" && this.id !== "toggle-mode") {
      versionClick(this.id);
    }
  });
  
  $('#toggle-mode').click(function() {
	if ($("body").hasClass("light-mode")) {
	  $("body").addClass("dark-mode");
	  $("body").removeClass("light-mode");
	  
	  $("#toggle-mode i").text("brightness_3");
	} else {
	  $("body").addClass("light-mode");
	  $("body").removeClass("dark-mode");
	  
	  $("#toggle-mode i").text("brightness_high");
	}
  });
});

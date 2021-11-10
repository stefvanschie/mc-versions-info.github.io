let versioninfo = {
  "1.17.1": [0, 0, new Date("2021-07-06")],
  "1.17": [1, 46, new Date("2021-06-08")],
  "1.16.5": [2, 349, new Date("2021-01-15")],
  "1.16.4": [3, 352, new Date("2020-11-02")],
  "1.16.3": [4, 355, new Date("2020-09-10")],
  "1.16.2": [5, 357, new Date("2020-08-11")],
  "1.16.1": [6, 510, new Date("2020-06-24")],
  "1.16": [7, 515, new Date("2020-06-23")],
  "1.15.2": [8, 974, new Date("2020-01-21")],
  "1.15.1": [9, 1010, new Date("2019-12-17")],
  "1.15": [10, 1020, new Date("2019-12-10")],
  "1.14.4": [11, 1323, new Date("2019-07-19")],
  "1.14.3": [12, 1377, new Date("2019-06-24")],
  "1.14.2": [13, 1459, new Date("2019-05-27")],
  "1.14.1": [14, 1494, new Date("2019-05-13")],
  "1.14": [15, 1554, new Date("2019-04-23")],
  "1.13.2": [16, 1778, new Date("2018-10-22")],
  "1.13.1": [17, 1803, new Date("2018-08-22")],
  "1.13": [18, 1952, new Date("2018-07-18")],
  "1.12.2": [19, 2236, new Date("2017-09-18")],
  "1.12.1": [20, 2348, new Date("2017-08-03")],
  "1.12": [21, 2352, new Date("2017-06-07")],
  "1.11.2": [22, 2405, new Date("2016-12-21")],
  "1.11.1": [23, 2429, new Date("2016-12-20")],
  "1.11": [24, 2470, new Date("2016-11-14")],
  "1.10.2": [25, 2758, new Date("2016-06-23")],
  "1.10.1": [26, 2831, new Date("2016-06-22")],
  "1.10": [27, 2838, new Date("2016-06-08")],
  "1.9.4": [28, 2875, new Date("2016-05-10")],
  "1.9.3": [29, 2880, new Date("2016-05-10")],
  "1.9.2": [30, 2892, new Date("2016-03-30")],
  "1.9.1": [31, 2899, new Date("2016-03-30")],
  "1.9": [32, 2912, new Date("2016-02-29")],
  "1.8.9": [33, 3314, new Date("2015-12-09")],
  "1.8.8": [34, 3327, new Date("2015-07-27")],
  "1.8.7": [35, 3365, new Date("2015-06-05")],
  "1.8.6": [36, 3375, new Date("2015-05-25")],
  "1.8.5": [37, 3376, new Date("2015-05-22")],
  "1.8.4": [38, 3381, new Date("2015-04-17")],
  "1.8.3": [39, 3395, new Date("2015-02-20")],
  "1.8.2": [40, 3406, new Date("2015-02-19")],
  "1.8.1": [41, 3454, new Date("2014-11-24")],
  "1.8": [42, 3584, new Date("2014-09-02")],
  "1.7.10": [43, 4010, new Date("2014-06-26")],
  "1.7.9": [44, 4017, new Date("2014-04-14")],
  "1.7.8": [45, 4021, new Date("2014-04-11")],
  "1.7.7": [46, 4027, new Date("2014-04-09")],
  "1.7.6": [47, 4027, new Date("2014-04-09")],
  "1.7.5": [48, 4034, new Date("2014-02-26")],
  "1.7.4": [49, 4038, new Date("2013-12-10")],
  "1.7.2": [50, 4076, new Date("2013-10-25")],
  "1.6.4": [51, 4173, new Date("2013-09-19")],
  "1.6.2": [52, 4175, new Date("2013-07-08")],
  "1.6.1": [53, 4247, new Date("2013-07-01")],
  "1.5.2": [54, 4333, new Date("2013-05-02")],
  "1.5.1": [55, 4357, new Date("2013-03-21")],
  "1.5": [56, 4377, new Date("2013-03-13")],
  "1.4.7": [57, 4454, new Date("2013-01-09")],
  "1.4.6": [58, 4466, new Date("2012-12-20")],
  "1.4.5": [59, 4530, new Date("2012-11-20")],
  "1.4.4": [60, 4604, new Date("2012-11-14")],
  "1.4.2": [61, 4635, new Date("2012-10-25")],
  "1.3.2": [62, 4664, new Date("2012-08-16")],
  "1.3.1": [63, 4668, new Date("2012-08-01")],
  "1.2.5": [64, 4709, new Date("2012-04-04")],
  "1.2.4": [65, 4723, new Date("2012-03-22")],
  "1.2.3": [66, 4738, new Date("2012-03-02")],
  "1.2.2": [67, 4752, new Date("2012-03-01")],
  "1.2.1": [68, 4755, new Date("2012-03-01")],
  "1.1": [69, 4758, new Date("2012-01-12")],
  "1.0.1": [70, 4761, new Date("2011-11-24")],
  "1.0": [71, 4763, new Date("2011-11-18")]
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

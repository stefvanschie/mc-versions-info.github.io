let versioninfo = {
  "1.17": [0, 0, new Data("2021-06-08")],
  "1.16.5": [1, 303, new Date("2021-01-15")],
  "1.16.4": [2, 306, new Date("2020-11-02")],
  "1.16.3": [3, 309, new Date("2020-09-10")],
  "1.16.2": [4, 311, new Date("2020-08-11")],
  "1.16.1": [5, 464, new Date("2020-06-24")],
  "1.16": [6, 469, new Date("2020-06-23")],
  "1.15.2": [7, 928, new Date("2020-01-21")],
  "1.15.1": [8, 964, new Date("2019-12-17")],
  "1.15": [9, 974, new Date("2019-12-10")],
  "1.14.4": [10, 1277, new Date("2019-07-19")],
  "1.14.3": [11, 1331, new Date("2019-06-24")],
  "1.14.2": [12, 1413, new Date("2019-05-27")],
  "1.14.1": [13, 1448, new Date("2019-05-13")],
  "1.14": [14, 1508, new Date("2019-04-23")],
  "1.13.2": [15, 1732, new Date("2018-10-22")],
  "1.13.1": [16, 1757, new Date("2018-08-22")],
  "1.13": [17, 1906, new Date("2018-07-18")],
  "1.12.2": [18, 2190, new Date("2017-09-18")],
  "1.12.1": [19, 2302, new Date("2017-08-03")],
  "1.12": [20, 2306, new Date("2017-06-07")],
  "1.11.2": [21, 2359, new Date("2016-12-21")],
  "1.11.1": [22, 2383, new Date("2016-12-20")],
  "1.11": [23, 2424, new Date("2016-11-14")],
  "1.10.2": [24, 2712, new Date("2016-06-23")],
  "1.10.1": [25, 2785, new Date("2016-06-22")],
  "1.10": [26, 2792, new Date("2016-06-08")],
  "1.9.4": [27, 2829, new Date("2016-05-10")],
  "1.9.3": [28, 2834, new Date("2016-05-10")],
  "1.9.2": [29, 2846, new Date("2016-03-30")],
  "1.9.1": [30, 2853, new Date("2016-03-30")],
  "1.9": [31, 2866, new Date("2016-02-29")],
  "1.8.9": [32, 3268, new Date("2015-12-09")],
  "1.8.8": [33, 3281, new Date("2015-07-27")],
  "1.8.7": [34, 3319, new Date("2015-06-05")],
  "1.8.6": [35, 3329, new Date("2015-05-25")],
  "1.8.5": [36, 3330, new Date("2015-05-22")],
  "1.8.4": [37, 3335, new Date("2015-04-17")],
  "1.8.3": [38, 3349, new Date("2015-02-20")],
  "1.8.2": [39, 3360, new Date("2015-02-19")],
  "1.8.1": [40, 3408, new Date("2014-11-24")],
  "1.8": [41, 3538, new Date("2014-09-02")],
  "1.7.10": [42, 3964, new Date("2014-06-26")],
  "1.7.9": [43, 3971, new Date("2014-04-14")],
  "1.7.8": [44, 3975, new Date("2014-04-11")],
  "1.7.7": [45, 3981, new Date("2014-04-09")],
  "1.7.6": [46, 3981, new Date("2014-04-09")],
  "1.7.5": [47, 3988, new Date("2014-02-26")],
  "1.7.4": [48, 3992, new Date("2013-12-10")],
  "1.7.2": [49, 4030, new Date("2013-10-25")],
  "1.6.4": [50, 4127, new Date("2013-09-19")],
  "1.6.2": [51, 4129, new Date("2013-07-08")],
  "1.6.1": [52, 4201, new Date("2013-07-01")],
  "1.5.2": [53, 4287, new Date("2013-05-02")],
  "1.5.1": [54, 4311, new Date("2013-03-21")],
  "1.5": [55, 4331, new Date("2013-03-13")],
  "1.4.7": [56, 4408, new Date("2013-01-09")],
  "1.4.6": [57, 4420, new Date("2012-12-20")],
  "1.4.5": [58, 4484, new Date("2012-11-20")],
  "1.4.4": [59, 4558, new Date("2012-11-14")],
  "1.4.2": [60, 4589, new Date("2012-10-25")],
  "1.3.2": [61, 4618, new Date("2012-08-16")],
  "1.3.1": [62, 4622, new Date("2012-08-01")],
  "1.2.5": [63, 4663, new Date("2012-04-04")],
  "1.2.4": [64, 4677, new Date("2012-03-22")],
  "1.2.3": [65, 4692, new Date("2012-03-02")],
  "1.2.2": [66, 4706, new Date("2012-03-01")],
  "1.2.1": [67, 4709, new Date("2012-03-01")],
  "1.1": [68, 4712, new Date("2012-01-12")],
  "1.0.1": [69, 4715, new Date("2011-11-24")],
  "1.0": [70, 4717, new Date("2011-11-18")]
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

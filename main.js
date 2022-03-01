let versioninfo = {
  "1.18.2": [0, 0, new Date("2022-02-28")],
  "1.18.1": [1, 93, new Date("2021-12-10")],
  "1.18": [2, 101, new Date("2021-11-30")],
  "1.17.1": [3, 341, new Date("2021-07-06")],
  "1.17": [4, 387, new Date("2021-06-08")],
  "1.16.5": [5, 690, new Date("2021-01-15")],
  "1.16.4": [6, 693, new Date("2020-11-02")],
  "1.16.3": [7, 696, new Date("2020-09-10")],
  "1.16.2": [8, 698, new Date("2020-08-11")],
  "1.16.1": [9, 851, new Date("2020-06-24")],
  "1.16": [10, 856, new Date("2020-06-23")],
  "1.15.2": [11, 1315, new Date("2020-01-21")],
  "1.15.1": [12, 1351, new Date("2019-12-17")],
  "1.15": [13, 1361, new Date("2019-12-10")],
  "1.14.4": [14, 1664, new Date("2019-07-19")],
  "1.14.3": [15, 1718, new Date("2019-06-24")],
  "1.14.2": [16, 1800, new Date("2019-05-27")],
  "1.14.1": [17, 1835, new Date("2019-05-13")],
  "1.14": [18, 1895, new Date("2019-04-23")],
  "1.13.2": [19, 2119, new Date("2018-10-22")],
  "1.13.1": [20, 2144, new Date("2018-08-22")],
  "1.13": [21, 2293, new Date("2018-07-18")],
  "1.12.2": [22, 2577, new Date("2017-09-18")],
  "1.12.1": [23, 2689, new Date("2017-08-03")],
  "1.12": [24, 2693, new Date("2017-06-07")],
  "1.11.2": [25, 2746, new Date("2016-12-21")],
  "1.11.1": [26, 2770, new Date("2016-12-20")],
  "1.11": [27, 2811, new Date("2016-11-14")],
  "1.10.2": [28, 3099, new Date("2016-06-23")],
  "1.10.1": [29, 3172, new Date("2016-06-22")],
  "1.10": [30, 3179, new Date("2016-06-08")],
  "1.9.4": [31, 3216, new Date("2016-05-10")],
  "1.9.3": [32, 3221, new Date("2016-05-10")],
  "1.9.2": [33, 3233, new Date("2016-03-30")],
  "1.9.1": [34, 3240, new Date("2016-03-30")],
  "1.9": [35, 3253, new Date("2016-02-29")],
  "1.8.9": [36, 3645, new Date("2015-12-09")],
  "1.8.8": [37, 3668, new Date("2015-07-27")],
  "1.8.7": [38, 3706, new Date("2015-06-05")],
  "1.8.6": [39, 3716, new Date("2015-05-25")],
  "1.8.5": [40, 3717, new Date("2015-05-22")],
  "1.8.4": [41, 3722, new Date("2015-04-17")],
  "1.8.3": [42, 3736, new Date("2015-02-20")],
  "1.8.2": [43, 3747, new Date("2015-02-19")],
  "1.8.1": [44, 3795, new Date("2014-11-24")],
  "1.8": [45, 3925, new Date("2014-09-02")],
  "1.7.10": [46, 4351, new Date("2014-06-26")],
  "1.7.9": [47, 4358, new Date("2014-04-14")],
  "1.7.8": [48, 4362, new Date("2014-04-11")],
  "1.7.7": [49, 4368, new Date("2014-04-09")],
  "1.7.6": [50, 4368, new Date("2014-04-09")],
  "1.7.5": [51, 4375, new Date("2014-02-26")],
  "1.7.4": [52, 4379, new Date("2013-12-10")],
  "1.7.2": [53, 4417, new Date("2013-10-25")],
  "1.6.4": [54, 4514, new Date("2013-09-19")],
  "1.6.2": [55, 4516, new Date("2013-07-08")],
  "1.6.1": [56, 4588, new Date("2013-07-01")],
  "1.5.2": [57, 4674, new Date("2013-05-02")],
  "1.5.1": [58, 4698, new Date("2013-03-21")],
  "1.5": [59, 4718, new Date("2013-03-13")],
  "1.4.7": [60, 4795, new Date("2013-01-09")],
  "1.4.6": [61, 4807, new Date("2012-12-20")],
  "1.4.5": [62, 4871, new Date("2012-11-20")],
  "1.4.4": [63, 4945, new Date("2012-11-14")],
  "1.4.2": [64, 4976, new Date("2012-10-25")],
  "1.3.2": [65, 5005, new Date("2012-08-16")],
  "1.3.1": [66, 5009, new Date("2012-08-01")],
  "1.2.5": [67, 5050, new Date("2012-04-04")],
  "1.2.4": [68, 5064, new Date("2012-03-22")],
  "1.2.3": [69, 5079, new Date("2012-03-02")],
  "1.2.2": [70, 5093, new Date("2012-03-01")],
  "1.2.1": [71, 5096, new Date("2012-03-01")],
  "1.1": [72, 5099, new Date("2012-01-12")],
  "1.0.1": [73, 5102, new Date("2011-11-24")],
  "1.0": [74, 5104, new Date("2011-11-18")]
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

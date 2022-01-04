let versioninfo = {
  "1.18.1": [0, 0, new Date("2021-12-10")],
  "1.18": [1, 8, new Date("2021-11-30")],
  "1.17.1": [2, 248, new Date("2021-07-06")],
  "1.17": [3, 294, new Date("2021-06-08")],
  "1.16.5": [4, 597, new Date("2021-01-15")],
  "1.16.4": [5, 600, new Date("2020-11-02")],
  "1.16.3": [6, 603, new Date("2020-09-10")],
  "1.16.2": [7, 605, new Date("2020-08-11")],
  "1.16.1": [8, 758, new Date("2020-06-24")],
  "1.16": [9, 763, new Date("2020-06-23")],
  "1.15.2": [10, 1222, new Date("2020-01-21")],
  "1.15.1": [11, 1258, new Date("2019-12-17")],
  "1.15": [12, 1268, new Date("2019-12-10")],
  "1.14.4": [13, 1571, new Date("2019-07-19")],
  "1.14.3": [14, 1625, new Date("2019-06-24")],
  "1.14.2": [15, 1707, new Date("2019-05-27")],
  "1.14.1": [16, 1742, new Date("2019-05-13")],
  "1.14": [17, 1802, new Date("2019-04-23")],
  "1.13.2": [18, 2026, new Date("2018-10-22")],
  "1.13.1": [19, 2051, new Date("2018-08-22")],
  "1.13": [20, 2200, new Date("2018-07-18")],
  "1.12.2": [21, 2484, new Date("2017-09-18")],
  "1.12.1": [22, 2596, new Date("2017-08-03")],
  "1.12": [23, 2600, new Date("2017-06-07")],
  "1.11.2": [24, 2653, new Date("2016-12-21")],
  "1.11.1": [25, 2677, new Date("2016-12-20")],
  "1.11": [26, 2718, new Date("2016-11-14")],
  "1.10.2": [27, 3006, new Date("2016-06-23")],
  "1.10.1": [28, 3079, new Date("2016-06-22")],
  "1.10": [29, 3086, new Date("2016-06-08")],
  "1.9.4": [30, 3123, new Date("2016-05-10")],
  "1.9.3": [31, 3128, new Date("2016-05-10")],
  "1.9.2": [32, 3140, new Date("2016-03-30")],
  "1.9.1": [33, 3147, new Date("2016-03-30")],
  "1.9": [34, 3160, new Date("2016-02-29")],
  "1.8.9": [35, 3562, new Date("2015-12-09")],
  "1.8.8": [36, 3575, new Date("2015-07-27")],
  "1.8.7": [37, 3613, new Date("2015-06-05")],
  "1.8.6": [38, 3623, new Date("2015-05-25")],
  "1.8.5": [39, 3624, new Date("2015-05-22")],
  "1.8.4": [40, 3629, new Date("2015-04-17")],
  "1.8.3": [41, 3643, new Date("2015-02-20")],
  "1.8.2": [42, 3654, new Date("2015-02-19")],
  "1.8.1": [43, 3702, new Date("2014-11-24")],
  "1.8": [44, 3832, new Date("2014-09-02")],
  "1.7.10": [45, 4258, new Date("2014-06-26")],
  "1.7.9": [46, 4265, new Date("2014-04-14")],
  "1.7.8": [47, 4269, new Date("2014-04-11")],
  "1.7.7": [48, 4275, new Date("2014-04-09")],
  "1.7.6": [49, 4275, new Date("2014-04-09")],
  "1.7.5": [50, 4282, new Date("2014-02-26")],
  "1.7.4": [51, 4286, new Date("2013-12-10")],
  "1.7.2": [52, 4324, new Date("2013-10-25")],
  "1.6.4": [53, 4421, new Date("2013-09-19")],
  "1.6.2": [54, 4423, new Date("2013-07-08")],
  "1.6.1": [55, 4495, new Date("2013-07-01")],
  "1.5.2": [56, 4581, new Date("2013-05-02")],
  "1.5.1": [57, 4605, new Date("2013-03-21")],
  "1.5": [58, 4625, new Date("2013-03-13")],
  "1.4.7": [59, 4702, new Date("2013-01-09")],
  "1.4.6": [60, 4714, new Date("2012-12-20")],
  "1.4.5": [61, 4778, new Date("2012-11-20")],
  "1.4.4": [62, 4852, new Date("2012-11-14")],
  "1.4.2": [63, 4883, new Date("2012-10-25")],
  "1.3.2": [64, 4912, new Date("2012-08-16")],
  "1.3.1": [65, 4916, new Date("2012-08-01")],
  "1.2.5": [66, 4957, new Date("2012-04-04")],
  "1.2.4": [67, 4971, new Date("2012-03-22")],
  "1.2.3": [68, 4986, new Date("2012-03-02")],
  "1.2.2": [69, 5000, new Date("2012-03-01")],
  "1.2.1": [70, 5003, new Date("2012-03-01")],
  "1.1": [71, 5006, new Date("2012-01-12")],
  "1.0.1": [72, 5009, new Date("2011-11-24")],
  "1.0": [73, 5011, new Date("2011-11-18")]
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

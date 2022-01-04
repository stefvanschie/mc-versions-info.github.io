let versioninfo = {
  "1.18": [0, 0, new Date("2021-11-30")],
  "1.17.1": [1, 240, new Date("2021-07-06")],
  "1.17": [2, 286, new Date("2021-06-08")],
  "1.16.5": [3, 589, new Date("2021-01-15")],
  "1.16.4": [4, 592, new Date("2020-11-02")],
  "1.16.3": [5, 595, new Date("2020-09-10")],
  "1.16.2": [6, 597, new Date("2020-08-11")],
  "1.16.1": [7, 750, new Date("2020-06-24")],
  "1.16": [8, 755, new Date("2020-06-23")],
  "1.15.2": [9, 1214, new Date("2020-01-21")],
  "1.15.1": [10, 1250, new Date("2019-12-17")],
  "1.15": [11, 1260, new Date("2019-12-10")],
  "1.14.4": [12, 1563, new Date("2019-07-19")],
  "1.14.3": [13, 1617, new Date("2019-06-24")],
  "1.14.2": [14, 1699, new Date("2019-05-27")],
  "1.14.1": [15, 1734, new Date("2019-05-13")],
  "1.14": [16, 1794, new Date("2019-04-23")],
  "1.13.2": [17, 2018, new Date("2018-10-22")],
  "1.13.1": [18, 2043, new Date("2018-08-22")],
  "1.13": [19, 2192, new Date("2018-07-18")],
  "1.12.2": [20, 2476, new Date("2017-09-18")],
  "1.12.1": [21, 2588, new Date("2017-08-03")],
  "1.12": [22, 2592, new Date("2017-06-07")],
  "1.11.2": [23, 2645, new Date("2016-12-21")],
  "1.11.1": [24, 2669, new Date("2016-12-20")],
  "1.11": [25, 2710, new Date("2016-11-14")],
  "1.10.2": [26, 2998, new Date("2016-06-23")],
  "1.10.1": [27, 3071, new Date("2016-06-22")],
  "1.10": [28, 3078, new Date("2016-06-08")],
  "1.9.4": [29, 3115, new Date("2016-05-10")],
  "1.9.3": [30, 3120, new Date("2016-05-10")],
  "1.9.2": [31, 3132, new Date("2016-03-30")],
  "1.9.1": [32, 3139, new Date("2016-03-30")],
  "1.9": [33, 3152, new Date("2016-02-29")],
  "1.8.9": [34, 3554, new Date("2015-12-09")],
  "1.8.8": [35, 3567, new Date("2015-07-27")],
  "1.8.7": [36, 3605, new Date("2015-06-05")],
  "1.8.6": [37, 3615, new Date("2015-05-25")],
  "1.8.5": [38, 3616, new Date("2015-05-22")],
  "1.8.4": [39, 3621, new Date("2015-04-17")],
  "1.8.3": [40, 3635, new Date("2015-02-20")],
  "1.8.2": [41, 3646, new Date("2015-02-19")],
  "1.8.1": [42, 3694, new Date("2014-11-24")],
  "1.8": [43, 3824, new Date("2014-09-02")],
  "1.7.10": [44, 4250, new Date("2014-06-26")],
  "1.7.9": [45, 4257, new Date("2014-04-14")],
  "1.7.8": [46, 4261, new Date("2014-04-11")],
  "1.7.7": [47, 4267, new Date("2014-04-09")],
  "1.7.6": [48, 4267, new Date("2014-04-09")],
  "1.7.5": [49, 4274, new Date("2014-02-26")],
  "1.7.4": [50, 4278, new Date("2013-12-10")],
  "1.7.2": [51, 4316, new Date("2013-10-25")],
  "1.6.4": [52, 4413, new Date("2013-09-19")],
  "1.6.2": [53, 4415, new Date("2013-07-08")],
  "1.6.1": [54, 4487, new Date("2013-07-01")],
  "1.5.2": [55, 4573, new Date("2013-05-02")],
  "1.5.1": [56, 4597, new Date("2013-03-21")],
  "1.5": [57, 4617, new Date("2013-03-13")],
  "1.4.7": [58, 4694, new Date("2013-01-09")],
  "1.4.6": [59, 4706, new Date("2012-12-20")],
  "1.4.5": [60, 4770, new Date("2012-11-20")],
  "1.4.4": [61, 4844, new Date("2012-11-14")],
  "1.4.2": [62, 4875, new Date("2012-10-25")],
  "1.3.2": [63, 4904, new Date("2012-08-16")],
  "1.3.1": [64, 4908, new Date("2012-08-01")],
  "1.2.5": [65, 4949, new Date("2012-04-04")],
  "1.2.4": [66, 4963, new Date("2012-03-22")],
  "1.2.3": [67, 4978, new Date("2012-03-02")],
  "1.2.2": [68, 4992, new Date("2012-03-01")],
  "1.2.1": [69, 4995, new Date("2012-03-01")],
  "1.1": [70, 4998, new Date("2012-01-12")],
  "1.0.1": [71, 5001, new Date("2011-11-24")],
  "1.0": [72, 5003, new Date("2011-11-18")]
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

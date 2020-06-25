let versioninfo = {
  "1.15.2": [0, 0, new Date("2020-01-21")],
  "1.15.1": [1, 32, new Date("2019-12-17")],
  "1.15": [2, 38, new Date("2019-12-10")],
  "1.14.4": [3, 342, new Date("2019-07-19")],
  "1.14.3": [4, 395, new Date("2019-06-24")],
  "1.14.2": [5, 476, new Date("2019-05-27")],
  "1.14.1": [6, 511, new Date("2019-05-13")],
  "1.14": [7, 570, new Date("2019-04-23")],
  "1.13.2": [8, 778, new Date("2018-10-22")],
  "1.13.1": [9, 788, new Date("2018-08-22")],
  "1.13": [10, 930, new Date("2018-07-18")],
  "1.12.2": [11, 1309, new Date("2017-09-18")],
  "1.12.1": [12, 1320, new Date("2017-08-03")],
  "1.12": [13, 1322, new Date("2017-06-07")],
  "1.11.2": [14, 1374, new Date("2016-12-21")],
  "1.11.1": [15, 1398, new Date("2016-12-20")],
  "1.11": [16, 1402, new Date("2016-11-14")],
  "1.10.2": [17, 1725, new Date("2016-06-23")],
  "1.10.1": [18, 1798, new Date("2016-06-22")],
  "1.10": [19, 1804, new Date("2016-06-08")],
  "1.9.4": [20, 1840, new Date("2016-05-10")],
  "1.9.3": [21, 1846, new Date("2016-05-10")],
  "1.9.2": [22, 1859, new Date("2016-03-30")],
  "1.9.1": [23, 1866, new Date("2016-03-30")],
  "1.9": [24, 1879, new Date("2016-02-29")],
  "1.8.9": [25, 2281, new Date("2015-12-09")],
  "1.8.8": [26, 2291, new Date("2015-07-28")],
  "1.8.7": [27, 2329, new Date("2015-06-05")],
  "1.8.6": [28, 2330, new Date("2015-05-25")],
  "1.8.5": [29, 2340, new Date("2015-05-22")],
  "1.8.4": [30, 2345, new Date("2015-04-17")],
  "1.8.3": [31, 2360, new Date("2015-02-20")],
  "1.8.2": [32, 2371, new Date("2015-02-19")],
  "1.8.1": [33, 2420, new Date("2014-11-24")],
  "1.8": [34, 2552, new Date("2014-09-02")],
  "1.7.10": [35, 3048, new Date("2014-06-26")],
  "1.7.9": [36, 3055, new Date("2014-04-14")],
  "1.7.8": [37, 3059, new Date("2014-04-11")],
  "1.7.7": [38, 3065, new Date("2014-04-09")],
  "1.7.6": [39, 3065, new Date("2014-04-09")],
  "1.7.5": [40, 3073, new Date("2014-02-26")],
  "1.7.4": [41, 3077, new Date("2013-12-10")],
  "1.7.2": [42, 3115, new Date("2013-10-25")],
  "1.6.4": [43, 3211, new Date("2013-09-19")],
  "1.6.2": [44, 3213, new Date("2013-07-08")],
  "1.6.1": [45, 3282, new Date("2013-07-01")],
  "1.5.2": [46, 3357, new Date("2013-05-02")],
  "1.5.1": [47, 3381, new Date("2013-03-21")],
  "1.5": [48, 3395, new Date("2013-03-13")],
  "1.4.7": [49, 3507, new Date("2013-01-09")],
  "1.4.6": [50, 3512, new Date("2012-12-20")],
  "1.4.5": [51, 3577, new Date("2012-11-20")],
  "1.4.4": [52, 3651, new Date("2012-11-14")],
  "1.4.2": [53, 3682, new Date("2012-10-25")],
  "1.3.2": [54, 3711, new Date("2012-08-16")],
  "1.3.1": [55, 3715, new Date("2012-08-01")],
  "1.2.5": [56, 3756, new Date("2012-04-04")],
  "1.2.4": [57, 3770, new Date("2012-03-22")],
  "1.2.3": [58, 3795, new Date("2012-03-02")],
  "1.2.2": [59, 3799, new Date("2012-03-01")],
  "1.2.1": [60, 3802, new Date("2012-03-01")],
  "1.1": [61, 3850, new Date("2012-01-12")],
  "1.0.1": [62, 3850, new Date("2011-11-24")],
  "1.0": [63, 3850, new Date("2011-11-18")]
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
  $("#bugs-fixed").text(arr[1]);
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

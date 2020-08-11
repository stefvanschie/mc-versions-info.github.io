let versioninfo = {
  "1.16.2": [0, 0, new Date("2020-08-11")],
  "1.16.1": [1, 153, new Date("2020-06-24")],
  "1.16": [2, 158, new Date("2020-06-23")],
  "1.15.2": [3, 617, new Date("2020-01-21")],
  "1.15.1": [4, 652, new Date("2019-12-17")],
  "1.15": [5, 662, new Date("2019-12-10")],
  "1.14.4": [6, 966, new Date("2019-07-19")],
  "1.14.3": [7, 1020, new Date("2019-06-24")],
  "1.14.2": [8, 1102, new Date("2019-05-27")],
  "1.14.1": [9, 1137, new Date("2019-05-13")],
  "1.14": [10, 1197, new Date("2019-04-23")],
  "1.13.2": [11, 1421, new Date("2018-10-22")],
  "1.13.1": [12, 1446, new Date("2018-08-22")],
  "1.13": [13, 1595, new Date("2018-07-18")],
  "1.12.2": [14, 1979, new Date("2017-09-18")],
  "1.12.1": [15, 1991, new Date("2017-08-03")],
  "1.12": [16, 1995, new Date("2017-06-07")],
  "1.11.2": [17, 2048, new Date("2016-12-21")],
  "1.11.1": [18, 2072, new Date("2016-12-20")],
  "1.11": [19, 2113, new Date("2016-11-14")],
  "1.10.2": [20, 2401, new Date("2016-06-23")],
  "1.10.1": [21, 2474, new Date("2016-06-22")],
  "1.10": [22, 2481, new Date("2016-06-08")],
  "1.9.4": [23, 2518, new Date("2016-05-10")],
  "1.9.3": [24, 2523, new Date("2016-05-10")],
  "1.9.2": [25, 2535, new Date("2016-03-30")],
  "1.9.1": [26, 2542, new Date("2016-03-30")],
  "1.9": [27, 2555, new Date("2016-02-29")],
  "1.8.9": [28, 2957, new Date("2015-12-09")],
  "1.8.8": [29, 2970, new Date("2015-07-27")],
  "1.8.7": [30, 3008, new Date("2015-06-05")],
  "1.8.6": [31, 3018, new Date("2015-05-25")],
  "1.8.5": [32, 3019, new Date("2015-05-22")],
  "1.8.4": [33, 3024, new Date("2015-04-17")],
  "1.8.3": [34, 3038, new Date("2015-02-20")],
  "1.8.2": [35, 3049, new Date("2015-02-19")],
  "1.8.1": [36, 3097, new Date("2014-11-24")],
  "1.8": [37, 3227, new Date("2014-09-02")],
  "1.7.10": [38, 3653, new Date("2014-06-26")],
  "1.7.9": [39, 3660, new Date("2014-04-14")],
  "1.7.8": [40, 3664, new Date("2014-04-11")],
  "1.7.7": [41, 3670, new Date("2014-04-09")],
  "1.7.6": [42, 3670, new Date("2014-04-09")],
  "1.7.5": [43, 3677, new Date("2014-02-26")],
  "1.7.4": [44, 3681, new Date("2013-12-10")],
  "1.7.2": [45, 3719, new Date("2013-10-25")],
  "1.6.4": [46, 3816, new Date("2013-09-19")],
  "1.6.2": [47, 3818, new Date("2013-07-08")],
  "1.6.1": [48, 3890, new Date("2013-07-01")],
  "1.5.2": [49, 3976, new Date("2013-05-02")],
  "1.5.1": [50, 4000, new Date("2013-03-21")],
  "1.5": [51, 4020, new Date("2013-03-13")],
  "1.4.7": [52, 4097, new Date("2013-01-09")],
  "1.4.6": [53, 4109, new Date("2012-12-20")],
  "1.4.5": [54, 4173, new Date("2012-11-20")],
  "1.4.4": [55, 4247, new Date("2012-11-14")],
  "1.4.2": [56, 4278, new Date("2012-10-25")],
  "1.3.2": [57, 4307, new Date("2012-08-16")],
  "1.3.1": [58, 4311, new Date("2012-08-01")],
  "1.2.5": [59, 4352, new Date("2012-04-04")],
  "1.2.4": [60, 4366, new Date("2012-03-22")],
  "1.2.3": [61, 4381, new Date("2012-03-02")],
  "1.2.2": [62, 4395, new Date("2012-03-01")],
  "1.2.1": [63, 4398, new Date("2012-03-01")],
  "1.1": [64, 4401, new Date("2012-01-12")],
  "1.0.1": [65, 4404, new Date("2011-11-24")],
  "1.0": [66, 4406, new Date("2011-11-18")]
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

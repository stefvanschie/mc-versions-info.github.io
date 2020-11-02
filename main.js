let versioninfo = {
  "1.16.4": [0, 0, new Date("2020-11-02")],
  "1.16.3": [1, 3, new Date("2020-09-10")],
  "1.16.2": [2, 5, new Date("2020-08-11")],
  "1.16.1": [3, 158, new Date("2020-06-24")],
  "1.16": [4, 163, new Date("2020-06-23")],
  "1.15.2": [5, 622, new Date("2020-01-21")],
  "1.15.1": [6, 658, new Date("2019-12-17")],
  "1.15": [7, 668, new Date("2019-12-10")],
  "1.14.4": [8, 971, new Date("2019-07-19")],
  "1.14.3": [9, 1025, new Date("2019-06-24")],
  "1.14.2": [10, 1107, new Date("2019-05-27")],
  "1.14.1": [11, 1142, new Date("2019-05-13")],
  "1.14": [12, 1202, new Date("2019-04-23")],
  "1.13.2": [13, 1426, new Date("2018-10-22")],
  "1.13.1": [14, 1451, new Date("2018-08-22")],
  "1.13": [15, 1600, new Date("2018-07-18")],
  "1.12.2": [16, 1984, new Date("2017-09-18")],
  "1.12.1": [17, 1996, new Date("2017-08-03")],
  "1.12": [18, 2000, new Date("2017-06-07")],
  "1.11.2": [19, 2053, new Date("2016-12-21")],
  "1.11.1": [20, 2077, new Date("2016-12-20")],
  "1.11": [21, 2118, new Date("2016-11-14")],
  "1.10.2": [22, 2406, new Date("2016-06-23")],
  "1.10.1": [23, 2479, new Date("2016-06-22")],
  "1.10": [24, 2486, new Date("2016-06-08")],
  "1.9.4": [25, 2523, new Date("2016-05-10")],
  "1.9.3": [26, 2528, new Date("2016-05-10")],
  "1.9.2": [27, 2540, new Date("2016-03-30")],
  "1.9.1": [28, 2547, new Date("2016-03-30")],
  "1.9": [29, 2560, new Date("2016-02-29")],
  "1.8.9": [30, 2962, new Date("2015-12-09")],
  "1.8.8": [31, 2975, new Date("2015-07-27")],
  "1.8.7": [32, 3013, new Date("2015-06-05")],
  "1.8.6": [33, 3023, new Date("2015-05-25")],
  "1.8.5": [34, 3024, new Date("2015-05-22")],
  "1.8.4": [35, 3029, new Date("2015-04-17")],
  "1.8.3": [36, 3043, new Date("2015-02-20")],
  "1.8.2": [37, 3054, new Date("2015-02-19")],
  "1.8.1": [38, 3102, new Date("2014-11-24")],
  "1.8": [39, 3232, new Date("2014-09-02")],
  "1.7.10": [40, 3658, new Date("2014-06-26")],
  "1.7.9": [41, 3665, new Date("2014-04-14")],
  "1.7.8": [42, 3669, new Date("2014-04-11")],
  "1.7.7": [43, 3675, new Date("2014-04-09")],
  "1.7.6": [44, 3675, new Date("2014-04-09")],
  "1.7.5": [45, 3682, new Date("2014-02-26")],
  "1.7.4": [46, 3686, new Date("2013-12-10")],
  "1.7.2": [47, 3724, new Date("2013-10-25")],
  "1.6.4": [48, 3821, new Date("2013-09-19")],
  "1.6.2": [49, 3823, new Date("2013-07-08")],
  "1.6.1": [50, 3895, new Date("2013-07-01")],
  "1.5.2": [51, 3981, new Date("2013-05-02")],
  "1.5.1": [52, 4005, new Date("2013-03-21")],
  "1.5": [53, 4025, new Date("2013-03-13")],
  "1.4.7": [54, 4102, new Date("2013-01-09")],
  "1.4.6": [55, 4114, new Date("2012-12-20")],
  "1.4.5": [56, 4178, new Date("2012-11-20")],
  "1.4.4": [57, 4252, new Date("2012-11-14")],
  "1.4.2": [58, 4283, new Date("2012-10-25")],
  "1.3.2": [59, 4312, new Date("2012-08-16")],
  "1.3.1": [60, 4316, new Date("2012-08-01")],
  "1.2.5": [61, 4357, new Date("2012-04-04")],
  "1.2.4": [62, 4371, new Date("2012-03-22")],
  "1.2.3": [63, 4386, new Date("2012-03-02")],
  "1.2.2": [64, 4400, new Date("2012-03-01")],
  "1.2.1": [65, 4403, new Date("2012-03-01")],
  "1.1": [66, 4406, new Date("2012-01-12")],
  "1.0.1": [67, 4409, new Date("2011-11-24")],
  "1.0": [68, 4411, new Date("2011-11-18")]
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

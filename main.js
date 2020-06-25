let versioninfo = {
  "1.16": [0, 0, new Date("2020-06-23")],
  "1.15.2": [1, 458, new Date("2020-01-21")],
  "1.15.1": [2, 490, new Date("2019-12-17")],
  "1.15": [3, 596, new Date("2019-12-10")],
  "1.14.4": [4, 800, new Date("2019-07-19")],
  "1.14.3": [5, 853, new Date("2019-06-24")],
  "1.14.2": [6, 934, new Date("2019-05-27")],
  "1.14.1": [7, 969, new Date("2019-05-13")],
  "1.14": [8, 1028, new Date("2019-04-23")],
  "1.13.2": [9, 1236, new Date("2018-10-22")],
  "1.13.1": [10, 1246, new Date("2018-08-22")],
  "1.13": [11, 1388, new Date("2018-07-18")],
  "1.12.2": [12, 1767, new Date("2017-09-18")],
  "1.12.1": [13, 1778, new Date("2017-08-03")],
  "1.12": [14, 1780, new Date("2017-06-07")],
  "1.11.2": [15, 1832, new Date("2016-12-21")],
  "1.11.1": [16, 1856, new Date("2016-12-20")],
  "1.11": [17, 1860, new Date("2016-11-14")],
  "1.10.2": [18, 2183, new Date("2016-06-23")],
  "1.10.1": [19, 2256, new Date("2016-06-22")],
  "1.10": [20, 2262, new Date("2016-06-08")],
  "1.9.4": [21, 2298, new Date("2016-05-10")],
  "1.9.3": [22, 2304, new Date("2016-05-10")],
  "1.9.2": [23, 2317, new Date("2016-03-30")],
  "1.9.1": [24, 2324, new Date("2016-03-30")],
  "1.9": [25, 2337, new Date("2016-02-29")],
  "1.8.9": [26, 2739, new Date("2015-12-09")],
  "1.8.8": [27, 2749, new Date("2015-07-28")],
  "1.8.7": [28, 2787, new Date("2015-06-05")],
  "1.8.6": [29, 2788, new Date("2015-05-25")],
  "1.8.5": [30, 2798, new Date("2015-05-22")],
  "1.8.4": [31, 2803, new Date("2015-04-17")],
  "1.8.3": [32, 2818, new Date("2015-02-20")],
  "1.8.2": [33, 2829, new Date("2015-02-19")],
  "1.8.1": [34, 2878, new Date("2014-11-24")],
  "1.8": [35, 3010, new Date("2014-09-02")],
  "1.7.10": [36, 3506, new Date("2014-06-26")],
  "1.7.9": [37, 3513, new Date("2014-04-14")],
  "1.7.8": [38, 3517, new Date("2014-04-11")],
  "1.7.7": [39, 3523, new Date("2014-04-09")],
  "1.7.6": [40, 3523, new Date("2014-04-09")],
  "1.7.5": [41, 3531, new Date("2014-02-26")],
  "1.7.4": [42, 3535, new Date("2013-12-10")],
  "1.7.2": [43, 3573, new Date("2013-10-25")],
  "1.6.4": [44, 3669, new Date("2013-09-19")],
  "1.6.2": [45, 3671, new Date("2013-07-08")],
  "1.6.1": [46, 3740, new Date("2013-07-01")],
  "1.5.2": [47, 3815, new Date("2013-05-02")],
  "1.5.1": [48, 3839, new Date("2013-03-21")],
  "1.5": [49, 3853, new Date("2013-03-13")],
  "1.4.7": [50, 3965, new Date("2013-01-09")],
  "1.4.6": [51, 3970, new Date("2012-12-20")],
  "1.4.5": [52, 4035, new Date("2012-11-20")],
  "1.4.4": [53, 4109, new Date("2012-11-14")],
  "1.4.2": [54, 4140, new Date("2012-10-25")],
  "1.3.2": [55, 4169, new Date("2012-08-16")],
  "1.3.1": [56, 4173, new Date("2012-08-01")],
  "1.2.5": [57, 4214, new Date("2012-04-04")],
  "1.2.4": [58, 4228, new Date("2012-03-22")],
  "1.2.3": [59, 4253, new Date("2012-03-02")],
  "1.2.2": [60, 4257, new Date("2012-03-01")],
  "1.2.1": [61, 4260, new Date("2012-03-01")],
  "1.1": [62, 4308, new Date("2012-01-12")],
  "1.0.1": [63, 4308, new Date("2011-11-24")],
  "1.0": [64, 4308, new Date("2011-11-18")]
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

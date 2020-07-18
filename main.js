let versioninfo = {
  "1.16.1": [0, 0, new Date("2020-06-24")],
  "1.16": [1, 5, new Date("2020-06-23")],
  "1.15.2": [2, 463, new Date("2020-01-21")],
  "1.15.1": [3, 495, new Date("2019-12-17")],
  "1.15": [4, 601, new Date("2019-12-10")],
  "1.14.4": [5, 805, new Date("2019-07-19")],
  "1.14.3": [6, 858, new Date("2019-06-24")],
  "1.14.2": [7, 939, new Date("2019-05-27")],
  "1.14.1": [8, 974, new Date("2019-05-13")],
  "1.14": [9, 1033, new Date("2019-04-23")],
  "1.13.2": [10, 1241, new Date("2018-10-22")],
  "1.13.1": [11, 1251, new Date("2018-08-22")],
  "1.13": [12, 1393, new Date("2018-07-18")],
  "1.12.2": [13, 1772, new Date("2017-09-18")],
  "1.12.1": [14, 1783, new Date("2017-08-03")],
  "1.12": [15, 1785, new Date("2017-06-07")],
  "1.11.2": [16, 1837, new Date("2016-12-21")],
  "1.11.1": [17, 1861, new Date("2016-12-20")],
  "1.11": [18, 1865, new Date("2016-11-14")],
  "1.10.2": [19, 2188, new Date("2016-06-23")],
  "1.10.1": [20, 2261, new Date("2016-06-22")],
  "1.10": [21, 2267, new Date("2016-06-08")],
  "1.9.4": [22, 2303, new Date("2016-05-10")],
  "1.9.3": [23, 2309, new Date("2016-05-10")],
  "1.9.2": [24, 2322, new Date("2016-03-30")],
  "1.9.1": [25, 2329, new Date("2016-03-30")],
  "1.9": [26, 2342, new Date("2016-02-29")],
  "1.8.9": [27, 2744, new Date("2015-12-09")],
  "1.8.8": [28, 2754, new Date("2015-07-28")],
  "1.8.7": [29, 2792, new Date("2015-06-05")],
  "1.8.6": [30, 2793, new Date("2015-05-25")],
  "1.8.5": [31, 2803, new Date("2015-05-22")],
  "1.8.4": [32, 2808, new Date("2015-04-17")],
  "1.8.3": [33, 2823, new Date("2015-02-20")],
  "1.8.2": [34, 2834, new Date("2015-02-19")],
  "1.8.1": [35, 2883, new Date("2014-11-24")],
  "1.8": [36, 3015, new Date("2014-09-02")],
  "1.7.10": [37, 3511, new Date("2014-06-26")],
  "1.7.9": [38, 3518, new Date("2014-04-14")],
  "1.7.8": [39, 3522, new Date("2014-04-11")],
  "1.7.7": [40, 3528, new Date("2014-04-09")],
  "1.7.6": [41, 3528, new Date("2014-04-09")],
  "1.7.5": [42, 3536, new Date("2014-02-26")],
  "1.7.4": [43, 3540, new Date("2013-12-10")],
  "1.7.2": [44, 3578, new Date("2013-10-25")],
  "1.6.4": [45, 3674, new Date("2013-09-19")],
  "1.6.2": [46, 3676, new Date("2013-07-08")],
  "1.6.1": [47, 3745, new Date("2013-07-01")],
  "1.5.2": [48, 3820, new Date("2013-05-02")],
  "1.5.1": [49, 3844, new Date("2013-03-21")],
  "1.5": [50, 3858, new Date("2013-03-13")],
  "1.4.7": [51, 3970, new Date("2013-01-09")],
  "1.4.6": [52, 3975, new Date("2012-12-20")],
  "1.4.5": [53, 4040, new Date("2012-11-20")],
  "1.4.4": [54, 4114, new Date("2012-11-14")],
  "1.4.2": [55, 4145, new Date("2012-10-25")],
  "1.3.2": [56, 4174, new Date("2012-08-16")],
  "1.3.1": [57, 4178, new Date("2012-08-01")],
  "1.2.5": [58, 4219, new Date("2012-04-04")],
  "1.2.4": [59, 4233, new Date("2012-03-22")],
  "1.2.3": [60, 4258, new Date("2012-03-02")],
  "1.2.2": [61, 4262, new Date("2012-03-01")],
  "1.2.1": [62, 4265, new Date("2012-03-01")],
  "1.1": [63, 4313, new Date("2012-01-12")],
  "1.0.1": [64, 4313, new Date("2011-11-24")],
  "1.0": [65, 4313, new Date("2011-11-18")]
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

let versioninfo = {
  "1.16.3": [0, 0, new Date("2020-09-10")],
  "1.16.2": [1, 2, new Date("2020-08-11")],
  "1.16.1": [2, 155, new Date("2020-06-24")],
  "1.16": [3, 160, new Date("2020-06-23")],
  "1.15.2": [4, 619, new Date("2020-01-21")],
  "1.15.1": [5, 655, new Date("2019-12-17")],
  "1.15": [6, 665, new Date("2019-12-10")],
  "1.14.4": [7, 968, new Date("2019-07-19")],
  "1.14.3": [8, 1022, new Date("2019-06-24")],
  "1.14.2": [9, 1104, new Date("2019-05-27")],
  "1.14.1": [10, 1139, new Date("2019-05-13")],
  "1.14": [11, 1199, new Date("2019-04-23")],
  "1.13.2": [12, 1423, new Date("2018-10-22")],
  "1.13.1": [13, 1448, new Date("2018-08-22")],
  "1.13": [14, 1597, new Date("2018-07-18")],
  "1.12.2": [15, 1981, new Date("2017-09-18")],
  "1.12.1": [16, 1993, new Date("2017-08-03")],
  "1.12": [17, 1997, new Date("2017-06-07")],
  "1.11.2": [18, 2050, new Date("2016-12-21")],
  "1.11.1": [19, 2074, new Date("2016-12-20")],
  "1.11": [20, 2115, new Date("2016-11-14")],
  "1.10.2": [21, 2403, new Date("2016-06-23")],
  "1.10.1": [22, 2476, new Date("2016-06-22")],
  "1.10": [23, 2483, new Date("2016-06-08")],
  "1.9.4": [24, 2520, new Date("2016-05-10")],
  "1.9.3": [25, 2525, new Date("2016-05-10")],
  "1.9.2": [26, 2537, new Date("2016-03-30")],
  "1.9.1": [27, 2544, new Date("2016-03-30")],
  "1.9": [28, 2557, new Date("2016-02-29")],
  "1.8.9": [29, 2959, new Date("2015-12-09")],
  "1.8.8": [30, 2972, new Date("2015-07-27")],
  "1.8.7": [31, 3010, new Date("2015-06-05")],
  "1.8.6": [32, 3020, new Date("2015-05-25")],
  "1.8.5": [33, 3021, new Date("2015-05-22")],
  "1.8.4": [34, 3026, new Date("2015-04-17")],
  "1.8.3": [35, 3040, new Date("2015-02-20")],
  "1.8.2": [36, 3051, new Date("2015-02-19")],
  "1.8.1": [37, 3099, new Date("2014-11-24")],
  "1.8": [38, 3229, new Date("2014-09-02")],
  "1.7.10": [39, 3655, new Date("2014-06-26")],
  "1.7.9": [40, 3662, new Date("2014-04-14")],
  "1.7.8": [41, 3666, new Date("2014-04-11")],
  "1.7.7": [42, 3672, new Date("2014-04-09")],
  "1.7.6": [43, 3672, new Date("2014-04-09")],
  "1.7.5": [44, 3679, new Date("2014-02-26")],
  "1.7.4": [45, 3683, new Date("2013-12-10")],
  "1.7.2": [46, 3721, new Date("2013-10-25")],
  "1.6.4": [47, 3818, new Date("2013-09-19")],
  "1.6.2": [48, 3820, new Date("2013-07-08")],
  "1.6.1": [49, 3892, new Date("2013-07-01")],
  "1.5.2": [50, 3978, new Date("2013-05-02")],
  "1.5.1": [51, 4002, new Date("2013-03-21")],
  "1.5": [52, 4022, new Date("2013-03-13")],
  "1.4.7": [53, 4099, new Date("2013-01-09")],
  "1.4.6": [54, 4111, new Date("2012-12-20")],
  "1.4.5": [55, 4175, new Date("2012-11-20")],
  "1.4.4": [56, 4249, new Date("2012-11-14")],
  "1.4.2": [57, 4280, new Date("2012-10-25")],
  "1.3.2": [58, 4309, new Date("2012-08-16")],
  "1.3.1": [59, 4313, new Date("2012-08-01")],
  "1.2.5": [60, 4354, new Date("2012-04-04")],
  "1.2.4": [61, 4368, new Date("2012-03-22")],
  "1.2.3": [62, 4383, new Date("2012-03-02")],
  "1.2.2": [63, 4397, new Date("2012-03-01")],
  "1.2.1": [64, 4400, new Date("2012-03-01")],
  "1.1": [65, 4403, new Date("2012-01-12")],
  "1.0.1": [66, 4406, new Date("2011-11-24")],
  "1.0": [67, 4408, new Date("2011-11-18")]
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

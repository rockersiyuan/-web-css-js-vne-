(function(){
	var datepicker = {};
	
	datepicker.getMonthData = function(year,month){
		var ret = [];
		if(!year || !month){
			var today = new Date();
			year = today.getFullYear();
			month = today.getMonth() + 1;
		}
		
		var firstDay = new Date(year,month-1,1);
		var firstDayWeekDay = firstDay.getDay();
		if(firstDayWeekDay === 0) firstDayWeekDay = 7;
		
		
		year = firstDay.getFullYear();
		month  = firstDay.getMonth() + 1; 
		
		var lastDayOfLastMonth = new Date(year,month-1,0);
		var lastDateOfLastMonth = lastDayOfLastMonth.getDate();
		var preMonthDayCount = firstDayWeekDay - 1;
		
		
		var lastDay = new Date(year, month, 0);
		var lastDate = lastDay.getDate();
		
		for(var i =0 ; i<7*6; i++){
			var date = i + 1 -preMonthDayCount;
			var showDate = date;
			var thismonth = month;
		
			if(date<=0){
				//上一月
				thismonth = month-1;
				showDate = lastDateOfLastMonth + date;
			}else if(date>lastDate){
				//下一个月
				thismonth = month+1;
				showDate = showDate - lastDate;
				
			}
			if(thismonth ===0) thismonth = 12;
			if(thismonth ===13) thismonth = 1;
			
			ret.push({
				month: thismonth,
				date: date,
				showDate : showDate
				
			});
		}
		
		return {
			year:year,
			month:month,
			days:ret
		};
		
	}
	
	
	window.datepicker = datepicker;
})();

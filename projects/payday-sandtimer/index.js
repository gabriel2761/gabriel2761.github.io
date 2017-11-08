$(function() {
	var interval = 1000
	var sandHeight = 0
	var $dayTimer = $('#day-timer')
	var $dayTimerSand = $('#day-timer .sandtimer-sand')
	var $dayTimerText = $('#day-timer .sandtimer-text')

	var payPerFornight = 1711.38
	var payPerDay = payPerFornight / 10
	var payPerSecond = payPerDay / 8 / 60 / 60

	var timer = setInterval(function() {
		var currentTime = moment()
		var startTime = moment().hour(9).minute(0).second(0)
		var endTime = moment().hour(17).minute(0).second(0)

		var currentDuration = moment.duration(currentTime.diff(startTime))
		var totalDuration = moment.duration(endTime.diff(startTime))

		var earningsToday = (currentDuration / totalDuration) * payPerDay

		if (currentTime.isAfter(endTime)) {
			$dayTimerSand.css({ 'height': 100 + '%' })
			$dayTimerText.text('$' + payPerDay)
		} else if (currentTime.isBefore(startTime)) {
			$dayTimerSand.css({ 'height': 0 + '%' })
			$dayTimerText.text('$' + 0)
		} else {
			earningsToday += payPerSecond
			var earningsPercentage = earningsToday / payPerDay * 100

			$dayTimerSand.css({ 'height': earningsPercentage + '%' })
			$dayTimerText.text('$' + parseFloat(earningsToday).toFixed(4))
		}
	}, interval)

})

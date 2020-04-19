# timer-on-JavaScript

Сomponents

1. 'getTimeRemaining' returns an object with time data (hours, minutes, seconds) - the time from "Now" to "Deadline"

2. 'setСlock' creates various variables that it takes from the page. Id-using id, we get a block with a timer on the page. Through it, we get the components of the timer. The 'endTime' parameter contains a deadline.

3. 'updateClock' gets the time difference using 'getTimeRemaining' (the remaining time before the deadline) and writes this data to the page

4. The 'checkDigit' function checks the value of the passed parameter (if it is unique, it adds 0 to the beginning)

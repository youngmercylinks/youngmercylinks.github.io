function calendarDownload(eventStart,eventEnd,eventTitle,eventLocation,eventDescription,eventURL,eventUID,UTCstamp) {
  var SEPARATOR = (navigator.appVersion.indexOf('Win') !== -1) ? '\r\n' : '\n';
  var calendarStartElement = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'METHOD:PUBLISH',
    'PRODID:-//yml.org.au//Jekyll//EN'
  ].join(SEPARATOR);
  var calendarTimezoneElement = [
    'BEGIN:VTIMEZONE',
    'TZID:Australia/Melbourne',
    'BEGIN:STANDARD',
    'TZOFFSETFROM:+1100',
    'RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU',
    'DTSTART:20080406T030000',
    'TZNAME:AEST',
    'TZOFFSETTO:+1000',
    'END:STANDARD',
    'BEGIN:DAYLIGHT',
    'TZOFFSETFROM:+1000',
    'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU',
    'DTSTART:20081005T020000',
    'TZNAME:AEDT',
    'TZOFFSETTO:+1100',
    'END:DAYLIGHT',
    'END:VTIMEZONE'
  ].join(SEPARATOR);
  var eventElement = [
    'BEGIN:VEVENT',
    'TRANSP:OPAQUE',
    'DTEND;TZID=Australia/Melbourne:' + eventEnd,
    'UID:' + eventUID,
    'DTSTAMP:' + UTCstamp,
    'DTSTART;TZID=Australia/Melbourne:' + eventStart,
    'LOCATION:' + eventLocation,
    'SUMMARY:Young Mercy Links: ' + eventTitle,
    'DESCRIPTION:' + eventDescription,
    'URL:' + eventURL,
    'END:VEVENT'
  ].join(SEPARATOR);
  var calendarEndElement = SEPARATOR + 'END:VCALENDAR';
  var calendarContent = calendarStartElement + SEPARATOR + calendarTimezoneElement + SEPARATOR + eventElement + SEPARATOR + calendarEndElement;
  var theCalendarDownloadButton = document.createElement('button')
  theCalendarDownloadButton.setAttribute('class', 'btn btn-primary')
  theCalendarDownloadButton.setAttribute('href', 'btn btn-primary')

  document.getElementById('calendarDownloadButton').innerHTML = theCalendarDownloadButton;
}

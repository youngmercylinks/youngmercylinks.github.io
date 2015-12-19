var nowDate = new Date();

var allEvents = document.getElementById('event-list').getElementsByClassName('event-list__event');
function groupByDate() {
  for (var thisEvent = 0; thisEvent < allEvents.length; thisEvent++) {
    var theDate = new Date(allEvents[thisEvent].querySelector('*[itemprop="endDate"]').getAttribute("content"));
    var recentLimit = 5*86400000;
    if (theDate.getTime() >= nowDate.getTime()) {
      allEvents[thisEvent].setAttribute('relativedate','upcoming');
    } else if ((nowDate.getTime() - theDate.getTime()) <= recentLimit) {
      allEvents[thisEvent].setAttribute('relativedate','recent');
    } else if ((nowDate.getTime() - theDate.getTime()) > recentLimit) {
      allEvents[thisEvent].setAttribute('relativedate','past');
    } else {
      console.log("Error: relative date calculation failed");
    }
  }

  var titleUpcoming = document.createElement('div');
  titleUpcoming.setAttribute('class','row text-row-wide');
  titleUpcoming.innerHTML = '<div class="col-xs-12 center-block text-col">\
    <h2>Upcoming events</h2>\
  </div>';

  var titleRecent = document.createElement('div');
  titleRecent.setAttribute('class','row text-row-wide');
  titleRecent.innerHTML = '<div class="col-xs-12 center-block text-col">\
    <h2>Recent events</h2>\
  </div>';

  var titlePast = document.createElement('div');
  titlePast.setAttribute('class','row text-row-wide');
  titlePast.innerHTML = '<div class="col-xs-12 center-block text-col">\
    <h2>Past events</h2>\
  </div>';

  var firstUpcoming = document.querySelector('div[relativedate="upcoming"]');
  if (typeof(firstUpcoming) != 'undefined' && firstUpcoming != null) {
    firstUpcoming.parentNode.insertBefore(titleUpcoming, firstUpcoming);
  }
  var firstRecent = document.querySelector('div[relativedate="recent"]');
  if (typeof(firstRecent) != 'undefined' && firstRecent != null) {
    firstRecent.parentNode.insertBefore(titleRecent, firstRecent);
  }
  var firstPast = document.querySelector('div[relativedate="past"]');
  if (typeof(firstPast) != 'undefined' && firstPast != null) {
    firstPast.parentNode.insertBefore(titlePast, firstPast);
  }
}

document.addEventListener('DOMContentLoaded', groupByDate(), false);
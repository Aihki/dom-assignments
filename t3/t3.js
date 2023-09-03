'use strict';

const browserInfo = navigator.userAgent;
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const availableScreenWidht = window.innerWidth;
const availableScreenHeight = window.innerHeight;
const CurrentDateAndTime = new Date();
const finishLocalization = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZoneName: 'short',
  timeZone: 'Europe/Helsinki',
};

const informations = document.getElementById('target');
informations.insertAdjacentHTML(
  'beforeend',
  `<p>this is the browser info: ${browserInfo}</p>`
);
informations.insertAdjacentHTML(
  'beforeend',
  `<p>this is the screen width: ${screenWidth} and height: ${screenHeight}</p>`
);

informations.insertAdjacentHTML(
  'beforeend',
  `<p>this is the screen available width: ${availableScreenWidht} and height: ${availableScreenHeight}</p>`
);

informations.insertAdjacentHTML(
  'beforeend',
  `<p>this is the local time in finland: ${CurrentDateAndTime.toLocaleDateString(
    'fi-FI',
    finishLocalization
  )}</p>`
);

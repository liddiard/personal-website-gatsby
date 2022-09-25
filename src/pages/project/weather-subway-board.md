---
title: Weather & subway info LED board
description: Get essential data from a fridge magnet before heading out the door
order: 50
involvement: creator
skills: JavaScript, HTML Canvas API, graphics, Python, hardware
github: liddiard/weather-subway-board
media:
  - type: image
    filename: board_photo.jpg
    caption: The LED matrix, attached to my fridge with magnetic screws. Raspberry Pi and “bonnet” board on the right edge.
  - type: image
    filename: board_explanation.png
    caption: Explanation of what each item on the board means. (Click image to enlarge.)
type: software
---

Leaving my apartment used to involve a ritual of checking two apps: Android Weather to decide what to wear, and [Citymapper](https://citymapper.com/) to see when the next trains were arriving. But now, I just glance at my fridge.

A smart fridge? Nope – far from it. But it’s a fridge with a very smart magnet, a [64x32 RGB LED matrix](https://smile.amazon.com/gp/product/B07SDMWX9R/) driven by a Raspberry Pi. 

I designed the display from scratch to show information I want to know before leaving: current and forecast weather, along with upcoming train departures from my local subway station. This display eliminates nearly all of the ‟use cases” where I had to check my phone on the way out the door.

I’m pulling data from the free [weather.gov API](https://www.weather.gov/documentation/services-web-api) and [New York MTA realtime data feeds](https://api.mta.info/#/landing) with a Node.js app. I then generate the image to show on the matrix using [node-canvas](https://www.npmjs.com/package/canvas), which implements the [HTML Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

This project posed unique design challenges in how to convey information within the constraints of a low-resolution display, like designing tiny weather icons that are still understandable. If there’s rain, for example, a degree of cloud cover is implied so I omit the cloud icon.

Since I wasn’t using a graphing library, I also had to implement details like positioning the high and low temperature forecast labels right above their corresponding peaks and valleys on the line graph. This alone ended up taking [roughly 200 lines of code](https://github.com/liddiard/weather-subway-board/blob/main/src/display/forecast.js), identifying increasing and decreasing temperature intervals, centering labels, and checking bounding boxes. 
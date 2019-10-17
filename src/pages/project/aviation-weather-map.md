---
title: Aviation Weather Map
description: Visualize winds and flight conditions with hardware + software
order: 25
involvement: contributor / creator
skills: Python, animation, hardware
github: liddiard/aviation-weather-map
media:
  - type: image
    filename: ifr_morning.png
    caption: A typical Bay Area fall/winter morning with clouds and fog around the Bay
  - type: image
    filename: vfr_day.png
    caption: A nice, clear day that looks great for flying!
  - type: video
    filename: wind_animation.mp4
    caption: Wind animation, from strong gusts to comparitively calm conditions
type: software
---

As a pilot in training, it’s important to know the weather conditions before taking to the skies. In particular, strong winds and low visibility can be hazardous to flying. 

There’s a standard way to represent visibility and cloud ceilings on aviation maps: Green represents good, VFR (Visual Flight Rules) conditions, while blue, red, and magenta represent progressively poorer weather. 

Normally you’d check a website for this information, but what’s more fun and easy to check than a physical map with LEDs representing flight conditions at nearby airports?

Inspired by and building off the great open-source software and build instructions from [Philip Rueker’s blog post](https://slingtsi.rueker.com/making-a-led-powered-metar-map-for-your-wall/), I created my own version using a printed map, a Raspberry Pi, and individually-adressable RGB LEDs.

I rewrote Philip’s code with an event loop to support user-initiated actions and to dynamically adjust LED brightness based on ambient light detected with a photoresistor. 

I also added a wind animation to oscillate the LEDs’ brightness. It uses a cosine function with randomly varied amplitude and frequency based on wind speeds, and a basic Markov-like state machine for wind gusts to simulate how a candle’s flame would flicker in the wind.

The result is a useful map and cool conversation starter that I can glance at to instantly get a sense of winds, visibility, and cloud ceilings at airports in the Bay Area and its surroundings.

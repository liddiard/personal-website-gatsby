---
title: Slack Meetups
description: Bot that pairs people for one-on-one chats
year: 2020
involvement: creator
skills: Python, Django, Slack API, database design, D3.js, data visualization
github: liddiard/slack-meetups
media:
  - type: image
    filename: ask_for_introduction.png
    caption: Slack interaction asking a new participant to introduce themselves to complete onboarding
  - type: image
    filename: create_round.png
    caption: Creating a new pairing round in the admin interface
  - type: image
    filename: people_list.png
    caption: View and update information about participants in the admin interface
  - type: image
    filename: match_received.png
    caption: Each participant is paired with another in a Slack group direct message
  - type: image
    filename: stats_leaderboard.png
    caption: Stats page showing figures on pairing and a leaderboard
  - type: image
    filename: stats_pairing_graph.png
    caption: Stats page showing the connections a person has made through the bot. Orange lines show pairs that met, while gray lines show pairs that didn’t. Circles are sized based on the number of people each person has met.
type: software
---

Talking with someone one-on-one is a great way to form new connections in a company or organization. Slack is prevelant these days, and though the idea of randomly pairing people to grab lunch or coffee with each other isn’t new, existing bots like [Donut](https://www.donut.com) and [randomcoffee](https://www.random-coffee.com/) are paid and/or closed source.

I made an open-source alternative that people can build on and deploy, fully knowing how their Slack data is being used instead of trusting an unknown third party application, which is a must for a lot of corporate information security policies.

My Slack application is designed to be user-friendly and flexible. It supports configuring multiple pairing pools in different Slack channels and creating rounds with custom frequency and duration. The bot onboards people, asks their availability, randomly pairs them group messages to meet up, and collects feedback on who actually met.

Leveraging Django’s admin interface, there are handy dashboards to configure pairing pools, create new rounds, and view pairings. To provide transparency and encourage participation, the bot automatically generates leaderboards and data visualzations with D3.js showing past pairings.

As of June 2020, the bot is being actively used by hundreds of employees across several organizations within PayPal, from data scientists to interns, to meet new people, keep team culture alive, and bring back some of the “randomly running into people in the hallway” serendipity during the COVID-19 work-from-home situation.
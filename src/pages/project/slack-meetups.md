---
title: Slack Meetups
description: Slack bot that randomly pairs people for 1:1 meetups
order: 19
involvement: creator
skills: Python, Django, Slack API, database design
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
    filename: ask_if_met.png
    caption: Collecting feedback on who met up
type: software
---

Talking with someone one-on-one is one of the best ways to form new, meaningful connections with others in a company or organization.

Slack is prevelant in most organizations these days, and the idea of randomly pairing people to grab lunch or coffee with each other isn’t new. There are plenty of paid or closed-source Slack applications like [Donut](https://www.donut.com) and [randomcoffee](https://www.random-coffee.com/).

I made an open-source alternative that people can build on and deploy, fully knowing how their Slack data is being used instead of trusting an unknown third party application, which is a must for a lot of corporate information security policies.

The Slack application is designed to be user-friendly and flexible. It supports configuring multiple pairing pools in different Slack channels and creating rounds with custom frequency and duration. The bot onboards people with an introduction, asks their availability, randomly pairs people in a group message to meet up, and it collects feedback on who actually met up.

Leveraging Django's admin interface, there are handy admin dashboards to configure pairing pools, create new rounds, view pairings, and analyze participation.

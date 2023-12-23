---
title: kikl.co
description: The link shortener for easy to type and remember URLs
year: 2014
involvement: creator
skills: Django, PostgreSQL, SQL queries, rate limiting, user accounts
link: http://kikl.co
github: liddiard/kikl
media:
  - type: image
    filename: front.png
  - type: image
    filename: link_added.png
  - type: image
    filename: link_time.png
  - type: image
    filename: multiple_links_time.png
type: software
---

Sometimes you just need to get a link from one place to another, and the most convenient method of transport is your memory. Links like `http://bit.ly/1loNbfX/` are short, but they’re very impractical to remember.

Instead of random number/letter links, kikl.co gives you fun and easy-to-remember URLs like `kikl.co/fat-walrus`, perfect for remembering, sharing by word of mouth, and typing easily.

Links are automatically generated and last for 24 hours (though you can add more time if you log in). This way, kikl.co can keep reusing really short and memorable URLs without tying `fat-walrus` to your page for eternity.

The app contains some fun SQL queries [like this one](https://github.com/liddiard/kikl/blob/36b6215b6813fcebe070c1f1e952c4a570950354/shortener/views.py#L183) to efficiently select random words while maintaining unique adjective-noun combinations for active links.

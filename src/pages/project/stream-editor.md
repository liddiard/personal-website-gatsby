---
title: Stream Editor
description: Interactive online text processing with Unix utilities
order: 12
involvement: creator
skills: React, Flask, Bash, Sass, web development
github: liddiard/stream-editor
media:
  - type: image
    filename: 1.png
  - type: image
    filename: 2.png
    caption: Using sed to remove the citation notes from a Wikipedia article. Removals shown in red.
  - type: image
    filename: 3.png
    caption: Full Unicode support. 很好。
  - type: image
    filename: 4.png
  - type: image
    filename: 5.png
    caption: Examine the effect of chaining multiple operations together at every step.
type: software
---

When you need more powerful text manipulation than your text editor's find and replace provides, the go-to approach is tried-and-tested Unix utilities like sed, awk, grep. 

These utilities are heavy on features, documentation, and examples, but they're a pain to use quickly. If your input is of any substantial length, you need to create a shell script and a file to hold your input text then read it in. Debugging or otherwise "testing things out" is also full of time-consuming overhead that usually involves a lot of echo statements and console scrolling.

Stream Editor is a web application that provides access to all the features of powerful Unix text manipulation utilities without all the setup and debugging pain of console work. Simply paste your input text in the left half of the screen, choose your utility, enter your arguments, and watch the right half of the screen update in real time with a visual diff.

Chaining commands is incredibly easy with Stream Editor's horizontal flow model, and you can inspect the effect of every operation at each step of the way.

Came up with a command you want to use later? Stream Editor generates a unique URL for each set of operations that you can bookmark, document, or share with others.

Stream Editor has full unicode support and comes with other handy features like synced scrolling across panes and a quick command reference.

*Note: Stream Editor is not deployed publicly yet because I am working on configuring a jailed environment that ensures server security by preventing arbitrary code execution and restricting file access.*

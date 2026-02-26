---
layout: post
title: Pixyll Does YouTube
date: 2026-02-26 04:30
summary: Pixyll now handles YouTube embeds.
categories: jekyll pixyll
---


## Embed YouTube Videos

Simply include `youtube.html` with an appropriate video ID [^1] and you'll get an embedded player. The include currently embeds the default IFrame player, specifying the dimensions and enabling fullscreen playback. [Additional parameters](https://developers.google.com/youtube/player_parameters) are available for further customizations.

{% raw %}`{% include youtube.html video_ID="yLrx1tNW4-c"%}`{% endraw %}

And you'll get this:

{% include youtube.html video_ID="yLrx1tNW4-c"%}



---
[^1]: The include file expects a value for `video_ID`. Failing to specify a video ID will display an error message in place of the video player. Using a non-existant video ID will load a blank player that will show an error message upon user interaction.
---
draft: false
title: What is this?
date: "2017-06-09T16:08:53.557Z"
layout: post
---

If you're using the [Beaker Browser](https://github.com/beakerbrowser/beaker)
and looking at this post over the dat protocol at
<dat://d62aa262608e6ccfa81364764632265668a7046f25206d3ded8480f14e8b7c42/2017-06-09-what/>
then congratulations, you're using the P2P web!

Then again, maybe you don't have Beaker yet ([go install it!](https://beakerbrowser.com/docs/install/)).
In that case, perhaps you're reading this post over got old https at
<https://datproject.org/d62aa262608e6ccfa81364764632265668a7046f25206d3ded8480f14e8b7c42/contents/2017-06-09-what/index.html>

Notice the ```d62aa262608e6ccfa81364764632265668a7046f25206d3ded8480f14e8b7c42``` string?
That's how you reach this content, wherever it may reside.
Yikes, that's worst than an IPv6 address! How are we supposed to remember that?
Eventually, I'm going to map that address over a domain name, so you could
for instance access it at <dat://super-duper.example.com>
(if I owned example.com, which I don't).

So great, P2P hosting! That means the more visitor you have simultaneously,
the more bandwith you have. Think of it like bittorrent for websites,
except with dat, you can update the content whereas a torrent holds static content.

What well you ask? What about React on the front-end? Sure!
From the hundreds of [static site generators out there](https://staticsitegenerators.net/),
a few are build with React in mind. For the visitors, that means a pleasant
viewing experience, less latency and all that good stuff.

In this case, I decided to give [Gatsby](https://github.com/gatsbyjs/gatsby)
a try and this is the result. Note that I'm using an alpha version, so
a few things may break. Feel free to report an
[issue](https://github.com/millette/fortyfive/issues) over at GitHub.

Another cool feature of Gatsby is its integration with Service Workers,
which make it possible to use websites offline. Unfortunately,
a current Chromium bug (used in Electron, which is used by Beaker)
prevents this neat feature from working over custom protocols (like dat://).

Want to know more? You'll find the
[source of fortyfive](https://github.com/millette/fortyfive) on GitHub.

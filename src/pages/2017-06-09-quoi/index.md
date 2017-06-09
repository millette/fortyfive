---
draft: false
title: Qu'est-ce?
date: "2017-06-09T18:21:53.557Z"
layout: post
---

Si vous utilisez [Beaker Browser](https://github.com/beakerbrowser/beaker)
et que vous lisez ce billet via le protocole dat à
<dat://d62aa262608e6ccfa81364764632265668a7046f25206d3ded8480f14e8b7c42/2017-06-09-what/>
alors félicitations, vous utilisez le web P2P!

Peut-être que vous n'avez pas encore Beaker
([allez l'installer!](https://beakerbrowser.com/docs/install/)).
Dans ce cas, vous lisez probablement ce billet via le bon vieux https à
<https://datproject.org/d62aa262608e6ccfa81364764632265668a7046f25206d3ded8480f14e8b7c42/contents/2017-06-09-quoi/index.html>

Vous remarquez la chaîne ```d62aa262608e6ccfa81364764632265668a7046f25206d3ded8480f14e8b7c42```?
Cet identifiant permet d'obtenir le contenu, peu importe où il réside.
Mais *yuk*, c'est pire qu'une adresse IPv6! Comment est-on supposé retenir ça?
Éventuellement, je vais *mapper* cette adresse sur un nom de domaine,
pour qu'on puisse y accéder, par exemple, via <dat://super-duper.example.com>
(si example.com m'appartenait, ce qui n'est pas le cas).

Hourra pour l'hébergement P2P! Ça signifie que plus il y a de visiteurs
simultanément, plus vous aurez de bande-passante. C'est comme le
bittorrent pour sites web, sauf qu'avec dat, on peut mettre à jour le
contenu, tandis qu'il demeure statique dans avec un torrent.

Et quoi d'autre? Pourquoi pas React sur le *front-end*? Parfaitement!
Des centaines de [generateurs de sites statiques](https://staticsitegenerators.net/),
quelques uns reponsent sur React. Pour les visiteurs, ça veut dire une
expérience plus plaisante, moins de latence et tout le reste.

Dans ce cas-ci, j'ai opté pour [Gatsby](https://github.com/gatsbyjs/gatsby)
et voici le résultat. Notez que j'utilise une version alpha, quelques
*bugs* pourraient se produire. Sentez-vous à l'aise pour
[rapporter les problèmes](https://github.com/millette/fortyfive/issues) sur GitHub.

Une autre fonction intéressante de Gatsby est son intégration des *Service Workers*,
qui rend possible l'utilisation de sites web même hors-ligne. Malheureusement,
un *bug* de Chromium (utilisé par Electron, lui-même utilisé par Beaker)
empêche cette fonction sur les protocoles sur mesure (comme dat://).

Vous voulez en savoir plus? Consultez les sources
[source of fortyfive](https://github.com/millette/fortyfive) sur GitHub.

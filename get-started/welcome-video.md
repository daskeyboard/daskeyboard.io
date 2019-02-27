---
layout: page
title: "Q Desktop Overview Video"
permalink: /get-started/welcome-video/
---

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

Whatch this short video and you'll be ready to enjoy the Q.

<div class="embed-container" id="app">
<div v-if="info == '200'">
<iframe width="1280" height="720" src="https://www.youtube.com/embed/xUenSxpZp2s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<div v-else>
<img src="{{ 'images/q-applet.gif'  | relative_url }}"
alt="Welcome gif"
width="1280" height="720">
</div>
</div>

## Next step

You are all set. Start Q desktop on your computer and add some applets. Enjoy!

<script src="{{ "js/vue-variables.js"  | relative_url }}"></script>

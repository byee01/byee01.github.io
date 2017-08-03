---
layout: default
---

<div class="container">
  <ul class="unstyled">
  {% for post in site.posts %}
    <li class="{{ post.category }}"><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
</div>

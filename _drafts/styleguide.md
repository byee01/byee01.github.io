---
layout: default
---

# Turning over a new leaf.

This is a style guide so I can figure out what stuff will look like. How do you like it? This is going to sound kind of rambly but let's just get it over with. What if it were really long though? What then?

Who knows. Check out my Instagram: [@byee01](http://instagram.com/byee01 "Follow me!").

Oh, by the way. *This text* has been *emphasized*. While **this guy** has very **strong** text.

## Posts

They'll go here. There's HTML below this guy.

<div class="container">
  <ul class="unstyled">
  {% for post in site.posts %}
    <li class="{{ post.category }}"><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
</div>

## Lists

*   This is a list item with two paragraphs.

    This is the second paragraph in the list item. You're
only required to indent the first line. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit.

*   Another item in the same list.

<sup>Surprise horizontal rule and supertext!</sup>
***

*   A list item with a blockquote:

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    > consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    > Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
    > 
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    > id sem consectetuer libero luctus adipiscing.

### Extra stuff

Code blocks look like this:

    body {
      color: #222;
      background: #fafafa;
      max-width: 940px;
      padding: 0 4%;
      margin: 20px auto;

      font-family: serif;
      font-size: 125%;
      line-height: 1.5;
      vertical-align: baseline;
    }

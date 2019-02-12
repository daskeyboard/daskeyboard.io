# Das Keyboard Q Documentation Website

This is the source files repo for [https://www.daskeyboard.io](https://www.daskeyboard.io).

[![Build Status](https://travis-ci.com/daskeyboard/daskeyboard.io.svg?branch=master)](https://travis-ci.com/daskeyboard/daskeyboard.io/)
[![Site Status](https://montastic.com/checkpoints/status_badge?badge_token=ca2ffbb3a6e6d95f891298aff1074f9a4f7d8b9b)](https://montastic.com)

## Issues, bugs, and requests

We welcome contributions and feedback on our website!
Please file a request in our
[issue tracker](https://github.com/DasKeyboard/q/issues/new)
and we'll take a look.

## Dev env installation

A tldr version follows:

1. Ensure you have [Ruby](https://www.ruby-lang.org/en/documentation/installation/) installed; you need version 2.2.2 or later:

`ruby --version`

1. Ensure you have [Bundler](http://bundler.io/) installed; if not install with:

`gem install bundler`

1. Install all dependencies:

`bundle install`

## View Site in dev mode

    bundle exec jekyll serve

or
  
    jekyll serve -w --force_polling

## Testing

    rake checklinks

Some form of broken links prevention is done automatically by `rake checklinks`
on every commit (through `tool/travis.sh`). But this won't see any Firebase
redirects (`rake checklinks` doesn't run the Firebase server) and it won't
check incoming links.

Before we can move the more complete
[automated `linkcheck` solution](https://github.com/dart-lang/site-webdev/blob/master/scripts/check-links-using-fb.sh)
from dartlang.org, we recommend manually running the following.

* First time setup:

    pub global activate linkcheck
    npm install -g superstatic

* Start the localhost Firebase server:

    superstatic --port 3474

* Run the link checker:

    linkcheck :3474
  
Even better, to check that old URLs are correctly redirected:

    linkcheck :3474 --input tool/sitemap.txt

### Adding next/previous page links

If you have a document that spans multiple pages, you can add next and previous
page links to make navigating these pages easier. It involves adding some information
to the front matter of each page, and including some HTML.

```
---
layout: tutorial
title: "Constraints"

permalink: /tutorials/layout/constraints.html
prev-page: /tutorials/layout/properties.html
prev-page-title: "Container Properties"
next-page: /tutorials/layout/create.html
next-page-title: "Create a Layout"
---

{% include prev-next-nav.html %}

{:toc}

<!-- PAGE CONTENT -->

{% include prev-next-nav.html %}
```

Omit the "prev-page" info for the first page, and the "next-page" info for the
last page.

## Syntax highlighting

The website uses [prism.js](http://prismjs.com/) for syntax
highlighting. This section covers how to use syntax highlighting, and
how to update our syntax highlighter for new languages.

### Supported languages

This website can syntax highlight the following languages:

* shell
* dart
* html
* css
* javascript
* java
* objectivec
* swift
* go
* php
* python
* ruby

### Using syntax highlighting

The easiest way to syntax highlight a block of code is to wrap
it with triple backticks followed by the language.

Here's an example:

<!-- skip -->

```dart
class SomeCode {
  String name;
}
```


See the list of supported languages above for what to use
following the first triple backticks.

### Adding more languages for syntax highlighting

The  website uses a custom build of prism, which
includes only the languages the website requires. To improve
load times and user experience, we do not support every
language that prism supports.

To add a new language for syntax highlighting, you will need
to generate a new copy of the `prism.js` file.

Follow these steps to generate a new copy of `prism.js`:

* Open `js/prism.js`
* Copy the URL in the comment of the first line of the file
* Paste it into a browser window/tab
* Add the new language that you wish to syntax highlight
* DO NOT change the other plugins, languages, or settings
* Download the generated JavaScript, and use it to replace `js/prism.js`
* Download the generated CSS, and use it to replace `_sass/_prism.scss`

## Including a region of a file

You can include a specific range of lines from a file:

```ruby
{% include includelines filename=PATH start=INT count=INT %}
```

`PATH` must be inside of `_include`. If you are including source code,
place that code into `_include/code` to follow our convention.

# Pixyll-lighter

## What the hell is this?

This is a very stripped-down version of [John Otander](https://johno.com)'s Jekyll Theme, [Pixyll](https://pixyll.com). I'd always been fond of the design, and wanted to use it for my blog.

As I started to dig through the customizations, I realized that the theme was overengineered for my needs and I started removing and minimizing.


### <mark>I strongly encourage you to fork the [upstream Pixyll repo](https://github.com/johno/pixyll), and not this one 😏</mark> [^Note]


### Some of things I did (so far):

- Updated dependencies
- Removed `categories` since simple `tags` will suffice
- Removed all the PWA related stuff
- Removed Discus and GTM stuff
- Added an include to simplify embedding YouTube videos
- Updated the text style for `meta`, `post-meta` and syntax highlighting to meet accessibility requirements for contrast (tsk, tsk...)

### TODO:

- Improved syntax highlighting
- An include for embedding Instagram posts
- An include for embedding Twitch videos



[^Note]:  My fork is highly opinionated, in ways that may make absolutely no sense. I have yet to determine that they make sense _for me_.

    **If you're going to use Pixyll:** please make sure to adjust the type styles to meet accessibility guidelines.
    Specifically, use a darker color for `code` in `sass/_code.scss` and for `meta` and `post-meta` in `sass/_posts.scss`


# Class: 11 HTML Audio / Video

## Reading: Sprites

- Sprites??
  - Logos?
  - Reusing images in different places ( different website )
  - Animations.
  - Hosting ( where do web resource live? )
    - No need to have that image file in your project directory
  - Multiple versions of images exists, to balance load times on your page.

## Warm Up

- See warm-up folder

## HTML A/V

- HTML 5 offers us a couple of interesting element for handling native audio and video file decoding.
  - It functions much like an image element, but the path to a source file just needs to contain supported audio / video formats.
  - Both offer browser specific controls ( if supported ).  Gives the user a default interface for manipulating audio files.
  - Two syntaxes
    - Audio (.mp3 / .mp4 / .ogg)

### Audio

```js

// Default, it looks a lot like an <img>
// in order to autoplay, you must have volume muted by default
<audio src="/http(s)/path/to/an/audio/file" controls muted autoplay>

<audio controls muted>
  <source src="/http(s)/path/to/an/audio/file">
</audio>

```

### Video

- Video(.mov / .mp4 / )

```js
// two flavors of the same endgoal
<video src="/http(s)/path/to/an/video/file" controls muted autoplay>

// allows more than one source, allowing you to offer different codecs for different browser
<video controls muted>
  <source src="/http(s)/path/to/an/video/file">
</video>

```

## Busmall: Vote Tracking

- If presented with a list of options, the user can select which one product they like, and our app can store and save those votes, as the user clicks on different images.
  - Presented the user with different images each time they click.
  - Incrementing a number for every image.
- How to store user data, per object?
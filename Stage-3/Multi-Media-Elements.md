# Multimedia Elements in HTML

HTML provides various elements to embed multimedia content such as images, audio, and video into web pages. Here are some of the key elements:

## Images

To embed images, use the `<img>` tag:
```html
<img src="path/to/image.jpg" alt="Description of image">
```

## Audio

To embed audio files, use the `<audio>` tag:
```html
<audio controls>
    <source src="path/to/audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

## Video

To embed video files, use the `<video>` tag:
```html
<video width="320" height="240" controls>
    <source src="path/to/video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

## Embedding YouTube Videos

To embed YouTube videos, use the `<iframe>` tag:
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

## Conclusion

Using these HTML elements, you can easily add multimedia content to your web pages to enhance user experience.

<div align="center">

[Intro Stage-3](/Stage-3/) --- [Go Back](/Stage-3/Semantic-Elements.md)  ---  [Next](/Stage-3/tips.md)

</div>
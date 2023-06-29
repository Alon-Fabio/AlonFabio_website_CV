# AlonFabio website CSS dox

> Hi! Hope you're not here because you're screwed and frustrated, if so (here's a good old Steve Urkel) I'm sooooooorry :nerd_face: .

## Position

### flex Center

> location: index.scss
> description: Adds flex and center all.

```css
.flexCenter {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
```

## Decorations

### Under-line with animation.

> location: src\styles\scss\elements.scss
> description: Adds an underlie gradient in the secund base color color with a slid from the left animation.

```css
.underlineWAni {
  margin: 0.5rem 1rem;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(242, 105, 68, 0.1),
    rgba(242, 105, 68, 1),
    rgba(242, 105, 68, 0.1)
  );
  // animation: 0.8s in-out forwards;
}
```

### Slide right.

> location: src\styles\scss\elements.scss
> description: Slide into view from the left with opacity effect.

```css
.slideLeftAni {
  opacity: 0;
  animation: slidRight 1s cubic-bezier(0.175, 0.885, 0.32, 1.275), fade 0.8s
      ease-in forwards;
}
@keyframes slidRight {
  0% {
    left: -300px;
  }
  100% {
    left: 0px;
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
```

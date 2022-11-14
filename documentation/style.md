# AlonFabio website CSS dox

> Hi! Hope you're not here because you're screwed and frustrated, if so (heres a good old Steve Urkel) I'm sooooooorry :nerd_face: .

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

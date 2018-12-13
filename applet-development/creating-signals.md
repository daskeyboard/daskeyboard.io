---
layout: page
title: "Creating Signals"
permalink: /applet-development/signals/
---

As an alternative to loading the applet inside Q desktop, a developer can use
 the the command line and the buit-in Q desktop logging facility.

An applet communicates with the Das Keyboard Signal Center by returning
`Signal` objects. A `Signal` object includes a 2-D array of `Point` objects,
along with an optional `name` and `description`.

For example, the simplest `Signal` object would be:

```javascript
  return new q.Signal({ points: [[new q.Point('#FF0000)]] });
```

To light up a row of keys, send a single row of Points, e.g.:

```javascript
  return new q.Signal({
    points: [[
      new q.Point('#FF0000),
      new q.Point('#00FF00),
      new q.Point('#0000FF),
      ]],
    name: 'My Applet Name',
    description: 'Some description of the signal'  
    });
```

To light up a rectangular region, send multiple rows of points, e.g:

```javascript
  return new q.Signal({
    points: [
      [new q.Point('#FF0000), new q.Point('#00FF00), new q.Point('#0000FF)],
      [new q.Point('#FF0000), new q.Point('#00FF00), new q.Point('#0000FF)],
      [new q.Point('#FF0000), new q.Point('#00FF00), new q.Point('#0000FF)],
      ]});
```

## Signal options

The `Signal` class takes the following options in its constructor:

- `points`: A 2-D array of `Point` objects.
- `name`: Will be displayed as the title of any signal dialog.
- `message`: Detailed message that will be displayed within a signal dialog.
- `isMuted`: Boolean value. If set to `false`, the signal will invoke an on-screen notification.
- `action`: The action of the signal, typically `DRAW`. This is the default. Possible values are:
  - `DRAW`: Light a key until the signal is dismissed.
  - `ERROR`: The signal will relay an error message to the host service.
  - `FLASH`: The signal will cause the key(s) to flash.
- `errors`: In the case of an `ERROR` action, `errors` should contain an
  array of error messages.

## Creating a signal within a callback function

There are cases when a `run()` function may have to use a callback, and so
cannot directly pass a `Signal` object as its return. In this case, a developer can either return a promise, or use the `this.signal()` function, e.g.:

```javascript
  this.signal(new q.Signal({ points: [[new q.Point('#FF0000)]] }));
```

## The Point Class

Each `Point` should specify, at a minimum, the RGB color that the key should
be illuminated to:

```javascript
  let point = new q.Point('#FF0000');
```

An effect can also be specified:

```javascript
  let point = new q.Point('#FF0000', q.Effects.BLINK);
```
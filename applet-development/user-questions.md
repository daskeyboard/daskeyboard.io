---
layout: page
title: "Q Applet User Option"
permalink: /applet-development/user-questions/
---

Q Applet frameworks sports a facily to collect user options at
applet installation time. These are called `questions` in the Q applet context.

![Q Marketplace](../images/questions.png "Q Marketplace")

## Creating questions

The questions are declared as JSON in the `package.json` in the `questions` fields in the `qConfig`.

The control type is set using the field ``controlType`. Supported field types are:

- textbox
- textbox with option to add click + and add new field (`"isArray": true`)
- checkbox
- dropdown
- color
- effect
- dropdown with dynamic population (`"dynamic": true`)
- search

The JSON snippet for the above example is as follows:

```json
"qConfig": {
  //...,
  "questions": [{
      "key": "name",
      "label": "Your name",
      "placeholder": "bob or alice?",
      "required": true,
      "order": 1,
      "controlType": "textbox"
    }, {
      "key": "planets",
      "label": "Enter planets to visit",
      "help": "Enter search terms like 'Orion'. Click [+] to add more",
      "placeholder": "Start name of planet name...",
      "required": true,
      "order": 2,
      "controlType": "textbox",
      "isArray": true
    }, {
      "key": "useOverdrive",
      "label": "Use overdrive?",
      "help": "Whether to travel faster with overdrive (+$9K)",
      "order": 3,
      "controlType": "checkbox"
    }, {
      "key": "concent",
      "label": "Research",
      "value": "I give permission to share my data with other interstellar voyagers.",
      "order": 4,
      "controlType": "textbox"
    },{
      "key": "congelationOption",
      "label": "Favorite congelation method?",
      "help": "During your trip your body will be congelated. Choose how.",
      "required": true,
      "order": 5,
      "controlType": "dropdown",
      "options": [{
        "key": "cryogenic",
        "value": "Cryogenic freezing"
      }, {
        "key": "quantumSplit",
        "value": "Quantum molecule split"
      }]
    }]
}
```

### Tip: Accessing questions from Javascript

The object  `this.config` is used access the questions values in `index.js`:

    logger.info(this.config.name); // => bob
    logger.info(this.config.congelationOption); // => cryogenic
    etc...

### Color control type

The color control type will display a color picker:

```json
      {
        "key": "reminderColor",
        "label": "Choose the color of the reminder",
        "help": "",
        "required": true,
        "order": 6,
        "value": "#F6FF00",
        "controlType": "color"
      }
```

![ControlTypeColor](../images/controlTypeColor.png "ControlTypeColor")

### Effect control type

The effect control type will display a list of available RGB effects:
The effects available are depending on the device that is used.

```json
      {
        "key": "reminderEffect",
        "label": "Choose the effect of the reminder",
        "help": "",
        "required": true,
        "order": 6,
        "value": "BLINK",
        "controlType": "effect"
      }
```

![ControlTypeEffect](../images/controlTypeEffect.png "ControlTypeEffect")

### Dynamic dropdown control type

A dropdown that dynamically retrieves a list of options from a server for example.

![ControlTypeDropdownDynamic](../images/controlTypeDropdownDynamic.png "ControlTypeDropdownDynamic")

Use the dropdown controlType with the dynamic attribute set to `true` in the `package.json`:

```json
      {
        "key": "zoneId",
        "value": "TXZ211",
        "label": "Choose a location",
        "help": "select a location from the list",
        "required": true,
        "order": 1,
        "controlType": "dropdown",
        "dynamic": true
      }
```

In this case the applet needs to implement the async method `options(questionKey)`

This method should return a list of options using a key/value format:

```json
[{
  "key": "2",
  "value": "Austin, TX"
},
{
  "key": "3",
  "value": "Dallas, TX"
}]
```

Example implementation inside the weather applet that retrieves the cities dynamically from a
 local text file using the `fetch` method implementend somewhere else.

```javascript
class WeatherApplet extends q.DesktopApp {
  async options(questionKey) {
    const options = [];
    // fetch data asynchronously (from a server for example)
    return this.fetch().then(results => {
      results.forEach(result => {
        return options.push({
          key: result.key,
          value: result.value
        });
      })
    });
  }
}
```

Note: With the dynamic dropdown, the call to the `options` method will be made only once to get
*all* the options at the same time.

### Search control type

The `search` controlType is a typeahead search field.
It calls the async `options` method every time the user changes the search input after a debounce time.
The `options` method has 2 parameters `options(questionKey, searchTerm)`

![ControlTypeSearch](../images/controlTypeSearch.png "ControlTypeSearch")

Use the controlType `search` in the `package.json` to display the typeahead search:

```json
      {
        "key": "cityId",
        "label": "Choose a city",
        "help": "select a location from the list",
        "required": true,
        "order": 1,
        "value": "http://www.yr.no/place/United_States/Texas/Austin/forecast.xml",
        "valueLabel": "Austin, Texas (United States)",
        "controlType": "search"
      }
```

This method should return a list of options using a key/value format:

```json
[{
  "key": "http://www.yr.no/place/United_States/Texas/Austin/forecast.xml",
  "value": "Austin, TX"
},
{
  "key": "http://www.yr.no/place/United_States/Texas/Dallas/forecast.xml",
  "value": "Dallas, TX"
}]
```

Example implementation inside the international weather applet that retrieves the cities dynamically from a
 local text file using the `loadCities` method implementend somewhere else.

```javascript
class WeatherAppletInternational extends q.DesktopApp {
  async options(questionKey, searchTerm) {
    // fetch data asynchronously (from a server for example)
    return loadCities().then(results => {
      results.forEach(result => {
        return options.push({
          key: result.key,
          value: result.value
        })
        // for a better user experience. Slice the result to a maximum number of options
        .slice(0, MAX_SEARCH_RESULTS);
      })
    });
  }
}
```

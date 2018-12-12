---
layout: page
title: "Q Applet User Option"
permalink: /applet-development/user-questions/
---

Q Applet frameworks sports a facily to collect user options at 
applet installation time. These are called `questions` in the Q applet context.

<div class="row">
    <div class="col-md-12">
        <img src="{{ './images/questions.png' }}"
                    alt="Q Marketplace">
    </div>
</div>

## Creating questions

The questions are declared as JSON in the `package.json` in the `questions` fields.

The control type is set using the field ``controlType`. Supported field types are:

- textbox
- textbox with option to add click + and add new field (`"isArray": true`)
- checkbox
- dropdown
- dropdown with dynamic population (`"dynamic": true`)

The JSON snippet for the above example is as follows:

```json
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
```

### Accessing questions from Javascript

The object  `this.config` is used access the questions values in `index.js`:

    logger.info(this.config.name); // => bob
    logger.info(this.config.congelationOption); // => cryogenic
    etc...

### Dynamic dropdown control type

TODO

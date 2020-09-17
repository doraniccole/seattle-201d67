# Class 09: HTML Forms!!

## Warm Up

- Combine the Pokemon constructor function with our knowledge of prompts
  - Use the `prompt` to create and display pokemon information on a web page.

```js

function Pokemon(name, hp, att, def) {
  this.name = name;
  this.health = hp;
  this.attack = att;
  this.defense = def;
}

prompt('What is your pokemon name?');
prompt('how much health do they have?');
prompt('..');

```

## Wireframe Excercise

- Resizing images
- Getting our table to populate and look as expected (from a list)

## Forms Elements

- <Form>
  - Element that has some built attributes for sending data across an http connection.
  - event for submitted data input by the user
  - can speak to it's children that are form type.
- <input> / <button> / <label> 
  - Elements that have specific form events.
  - Buttons within a form by default try and submit

## HTML Events

- Are specific intertaction points on an HTML element

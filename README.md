# React Multi Fields Input component

React Multi Fields Input component comes with zero styles to allow you style it in accordance to your style guidelines.

Example:

![react-multi-fields-input component no styles](https://github.com/snikidev/react-multi-fields-input/raw/master/assets/rmfi-example-base.png)

Example with styles:

![react-multi-fields-input component](https://github.com/snikidev/react-multi-fields-input/raw/master/assets/rmfi-example.png)



```js
const inputs = [
  {
    type: 'number',
    maxLength: 2,
    placeholder: '00'
  },
  {
    type: 'number',
    maxLength: 2,
    placeholder: '00'
  },
  {
    type: 'number',
    maxLength: 2,
    placeholder: '00'
  }
];

<MultiFieldsInput
  label="Sort Code"
  name="codeSort"
  inputs={inputs}
  value="202020"
  isValid={false}
  onBlur={() => {}}
  onChange={() => {}}
/>;
```

See more live examples on the [website](https://react-multi-fields-input.sniki.dev/).

## Props

| prop        | required    | type              | default        |
|-------------|:-----------:|:-----------------:|----------------|
| inputs      | yes         | `Input[]`         |                |
| name        | yes         | `string`          |                |
| onBlur      | yes         | `function`        |                |
| onChange    | no          | `function`        | `undefined`    |
| isValid     | no          | `function`        | `true`         |
| value       | no          | `string`          | ` '' `         |
| autoFocus   | no          | `function`        | `true`         |


`Input[]` is an array of objects with following properties

| prop        | required    | type                 | default        |
|-------------|:-----------:|:--------------------:|----------------|
| maxLength   | yes         | `number`             |                |
| placeholder | no          | `string`             | ` '' `         |


The object that is being returned `onBlur` and `onChange`:

```js static
{ name: '', value: ''}
```

## Develop

```
yarn
yarn start
```

Storybook starts on `localhost:3001`.

## Build

```
yarn build
```

Build script builds component only. Storybook is built with `storybook:build` by [Netlify](https://www.netlify.com/)
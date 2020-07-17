# React Multi Fields Input component

[![codecov](https://codecov.io/gh/snikidev/react-multi-fields-input/branch/master/graph/badge.svg)](https://codecov.io/gh/snikidev/react-multi-fields-input) ![npm](https://img.shields.io/npm/v/react-multi-fields-input) [![CircleCI](https://circleci.com/gh/snikidev/react-multi-fields-input/tree/master.svg?style=svg)](https://circleci.com/gh/snikidev/react-multi-fields-input/tree/master)

React Multi Fields Input component comes with zero styles to allow you style it in accordance to your style guidelines.

```js
<MultiFieldsInput
  label="Sort Code"
  name="codeSort"
  inputs={[
    {
      maxLength: 2,
      placeholder: '00',
    },
    {
      maxLength: 2,
      placeholder: '00',
    },
    {
      maxLength: 2,
      placeholder: '00',
    },
  ]}
  value="202020"
  error={`Invalid input`}
  onBlur={() => {}}
  onChange={() => {}}
/>
```

See more live examples on the [website](https://react-multi-fields-input.sniki.dev/).

### Props

| prop      | required |    type    | default     |
| --------- | :------: | :--------: | ----------- |
| inputs    |   yes    | `Input[]`  |             |
| name      |   yes    |  `string`  |             |
| onBlur    |   yes    | `function` |             |
| onChange  |   no     | `function` | `undefined` |
| error     |   no     | `string`   | ` '' `      |
| value     |   no     |  `string`  | ` '' `      |
| autoFocus |   no     | `boolean`  | `true`      |
| styles    |   no     |  `object`  | `{}`        |

`Input[]` is an array of objects with following properties

| prop        | required |   type   | default |
| ----------- | :------: | :------: | ------- |
| maxLength   |   yes    | `number` |         |
| placeholder |    no    | `string` | `''`    |

`styles` prop is an object with properties to style each part of the component. You could then give it custom styles as you normally would for inline, e.g.

```js
const styles = {
  container: {
    width: 'auto',
  },
  label: {
    width: '100%',
    color: '#4A5568',
    fontWeight: 'bold',
    marginBottom: '0.3em',
    fontSize: '15px',
    display: 'block',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    borderRadius: '5px',
    padding: '0.75em 1em',
    border: '1px solid #A0AEC0',
    color: '#2D3748',
    maxWidth: '7em',
  },
  error: {
    boxSizing: 'border-box',
    marginTop: '0.7em',
    padding: '0.75em 1em',
    backgroundColor: '#FED7D7',
    display: 'block',
    borderRadius: '5px',
    fontWeight: 'bold',
    color: '#C53030',
    fontSize: '13px',
    width: '100%',
  },
}
```

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

Build script builds component only. Storybook is built with `storybook:build` by [Netlify](https://www.netlify.com/).

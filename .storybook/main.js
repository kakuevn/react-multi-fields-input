const custom = require('../webpack.config')

module.exports = {
  stories: ['../src/**/*.stories.[tj]sx'],
  webpackFinal: config => {
    config.module.rules.push(custom.module.rules[4])
    config.resolve.extensions.push(...custom.resolve.extensions)
    return config
  },
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
  ],
}

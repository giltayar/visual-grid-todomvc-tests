/* eslint-env node */
module.exports = {
  batchName: 'visual-grid-todomvc-test storybook',
  appName: 'visual-grid-todomvc-test storybook',
  appName: 'visual-grid-todomvc-test storybook',
  puppeteerOptions: {args: ['--no-sandbox']},
  runInDocker: true,
  browser: [
    {width: 400, height: 500, name: 'chrome'},
    // {width: 1024, height: 768, name: 'chrome'},
    // {width: 1280, height: 1024, name: 'chrome'},
    // {deviceName: 'iPhone X'},
    // {deviceName: 'iPad Pro'},
    // {width: 400, height: 500, name: 'firefox'},
    // {width: 1024, height: 768, name: 'firefox'},
    // {width: 1280, height: 1024, name: 'firefox'},
  ],
}

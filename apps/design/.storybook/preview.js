import { setup } from '@storybook/vue3';
import { createPinia } from 'pinia';

//👇 Shared CSS for the library, see preview-head.html instead.
// import '../../../packages/library/src/index.css';

//👇 Registers a global Pinia instance inside Storybook to be consumed by existing stories
setup((app) => {
  app.use(createPinia());
});

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;

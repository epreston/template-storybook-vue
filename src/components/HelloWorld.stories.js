import HelloWorld from './HelloWorld.vue';

export default {
  title: 'Screens/HelloWorld',
  component: HelloWorld,
  tags: ['autodocs']
};

export const Default = {};

export const Error = {
  args: { error: true }
};

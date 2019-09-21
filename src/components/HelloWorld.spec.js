import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld', () => {
  it('Should have the correct default data', () => {
    expect(typeof HelloWorld.data).toBe('function');
    const defaultData = HelloWorld.data();
    expect(defaultData.msg).toBe('Hello World!');
  });

  it('Should correctly sets the message when created', () => {
    const vm = new Vue(HelloWorld).$mount();
    expect(vm.msg).toBe('Hello World!');
  });
});

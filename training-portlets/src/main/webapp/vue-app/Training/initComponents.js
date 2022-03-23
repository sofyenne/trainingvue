import firstapp from './components/first.vue';
import childoff from './components/childoffirst.vue';

const components = {
  firstapp,childoff,
};

for (const key in components) {
  Vue.component(key, components[key]);
}

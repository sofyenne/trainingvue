import firstapp from './components/first.vue';
import childoff from './components/childoffirst.vue';
import exodrawer from './components/exodrawer.vue';


const components = {
  firstapp,childoff,exodrawer
};

for (const key in components) {
  Vue.component(key, components[key]);
}

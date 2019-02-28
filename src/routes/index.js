import { Main } from '/src/components/Main.js';
import { HomeComponent } from '/src/components/Home.js';
import { mySimpleComponent } from '/src/components/index.js';

const routes = {
  '/': Main,
  '/home/': mySimpleComponent,
  '/user/': HomeComponent
};

export default routes;

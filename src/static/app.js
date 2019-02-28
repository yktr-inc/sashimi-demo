import Sashimi from '/node_modules/sashimi/lib/index.js';
import { Main } from '/src/components/Main.js';
import routes from '/src/routes/index.js';

const Root = Sashimi.createElement('div', null, Main);

Sashimi.boot(routes);

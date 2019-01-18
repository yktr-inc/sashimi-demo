import Sashimi from '/node_modules/sashimi/lib/index.js';
import { Main } from '/src/components/Main.js';

const Root = Sashimi.createElement('div', null, Main);
Sashimi.renderRoot(Root);

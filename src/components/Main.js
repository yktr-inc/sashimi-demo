import { createElement } from '/node_modules/sashimi/lib/utils/sashimi.js';
import { Advanced } from '/src/components/AdvancedComp/index.js';

export const Main = () => createElement( 'div', { class: "container-fluid"}, Advanced );

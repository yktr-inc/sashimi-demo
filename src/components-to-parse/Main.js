import { createElement } from '/node_modules/sashimi/lib/utils/sashimi.js';
import { AdvancedComponent } from '/src/components/AdvancedComp/index.js';

export const Main = () => <div class="container-fluid">
                            <p class"salut-mec">Salut mec</p>
                            <div>
                              <AdvancedComponent/>
                              <AdvancedComponent/>
                            </div>
                            <div>
                              <AdvancedComponent/>
                              <AdvancedComponent/>
                            </div>
                          </div>;

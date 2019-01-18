class Hello {
  render() {
    return Sashimi.createElement('div', null, `Hello World`);
  }
}

const child2 = Sashimi.createElement('div', null, 'Mais ouesh frr', 'lol', 'mdr');
const child1 = Sashimi.createElement('div', null, 'Mais ouesh frr', 'lol', 'mdr');

const parent = Sashimi.createElement('p', null, child1, child2);

const helloWorld = Sashimi.createElement('div', null, parent);

SashimiEngine.render(helloWorld, document.getElementById('root'));

(() => {
  // make it generic
  function createComponent(element, props, children) {
    const aDiv = document.createElement(element);
    const childrenDivs = handleChildren(children);
    childrenDivs.forEach( child => aDiv.appendChild(child));
    return aDiv;
  }

  function createElement(element, props, ...children) {
    return createComponent(element, props, children);
  };

  function handleChildren(children){

    arrChildren = Object.values(children);

    childrenDiv = arrChildren.map( child => renderChild(child));

    return childrenDiv;
  }

  function renderChild(child){
    const childDiv = document.createElement('div');

    if (typeof child === "string"){
      const childrenContent = document.createTextNode(child);
      childDiv.appendChild(childrenContent);

    }else{
      childDiv.appendChild(child);
    }
    return childDiv;
  }

  window.Sashimi = {
    createElement
  };

  window.SashimiEngine = {
    render: (el, domEl) => {
      domEl.appendChild(el);
    }
  };
})();

function customrender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;
    for (let prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

const mainContainer = document.querySelector('#root');
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Visit Google"
}

customrender(reactElement, mainContainer);
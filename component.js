class Component extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<p>hola mundo</p>`;
    }
}

customElements.define("team-abc", Component);

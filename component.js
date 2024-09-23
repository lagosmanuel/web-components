class Component extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<p>Masculin Féminin &#129326;</p>`;
    }
}

customElements.define("team-abc", Component);

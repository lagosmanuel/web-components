class Component extends HTMLComponent {
    constructor() {
        super()
        this.innerHTML = `<p>hola mundo</p>`
    }
}

customElements.define("team-abc", Component)

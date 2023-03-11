/**
 * Sample Class to learn WebComponent.
 */
export class NavBarButton extends HTMLElement
{
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    get cssClass() { return this.getAttribute("cssClass"); }
    set cssClass(newValue) { this.setAttribute("cssClass"); }

    get link() { return this.getAttribute("link"); }
    set link(newValue) { this.setAttribute("link"); }

    get name() { return this.getAttribute("name"); }
    set name(newValue) { this.setAttribute("name"); }

    static get observedAttributes() {
        return ["cssClass", "link", "name"];
    }

    /**
     * call when attribut is changed.
     * @param {string} name 
     * @param {*} oldValue 
     * @param {*} newValue 
     */
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attribut update');
        this.render
    }

    /**
     * Call when Component is attach
     * here is use to init render.
     */
    connectedCallback() {
        this.render();
    }

    render ()
    {
        this.shadowRoot.innerHTML =
        `
        <a class="${this.cssClass}" href="${this.link}">${this.name}</a>
        `;
    }
}

/** 
 * define a customer html Element here `<app-nav-bar></app-nav-bar>`
 */
customElements.define('nav-bar-button', NavBarButton);
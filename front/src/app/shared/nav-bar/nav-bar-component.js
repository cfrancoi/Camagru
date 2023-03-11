import "./nav-bar-button/nav-bar-button-conponent.js";

/**
 * Sample Class to learn WebComponent.
 */
export class NavBar extends HTMLElement
{
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    get title() {
        return this.getAttribute("title");
    }

    set title(newValue) {
        this.setAttribute("title");
    }

    static get observedAttributes() {
        return ["title"];
    }

    /**
     * call when attribut is changed.
     * @param {string} name 
     * @param {*} oldValue 
     * @param {*} newValue 
     */
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attribut update');
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
        <h1>${this.title}</h1>
        <div> hello world </div>
        <ul>
            <a class="${this.cssClass}" href="${this.link}">${this.name}</a>
            <li><a href="index.html">News</a></li>
            <li><a href="index.html">Contact</a></li>
            <li><a href="index.html">About</a></li>
        </ul>
        `;
    }
}


/**
 * define a customer html Element here `<app-nav-bar></app-nav-bar>`
 */
customElements.define('app-nav-bar', NavBar);
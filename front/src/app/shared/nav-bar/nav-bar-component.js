import { checkLogin } from "../auth/auth-utils.js";
import { NavBarButton } from "./nav-bar-button/nav-bar-button-component.js";
/**
 * Sample Class to learn WebComponent.
 */
class NavBar extends HTMLElement
{
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        checkLogin();
    }

    get title() {
        return this.getAttribute("title");
    }

    set title(newValue) {
        this.setAttribute("title", newValue);
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
            <nav-bar-button class="" link="index.html" nam="name"></nav-bar-button>
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

customElements.define('nav-bar-button', NavBarButton);
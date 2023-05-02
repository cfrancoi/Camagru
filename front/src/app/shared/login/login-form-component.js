/**
 * Sample Class to learn WebComponent.
 */
class LoginForm extends HTMLElement
{
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    get username() {
        return this.getAttribute("username");
    }

    set username(newValue) {
        this.setAttribute("username", newValue);
    }

    get password() {
        return this.getAttribute("password");
    }

    set password(newValue) {
        this.setAttribute("password", newValue);
    }

    static get observedAttributes() {
        return ["username", "password"];
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

    handleSubmit(event) {
        event.preventDefault();
        console.log("submit");
        console.log(event);
        //TODO submit login form redirect ...
    }

    render ()
    {
        this.shadowRoot.innerHTML =
        `
        <form>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username"><br><br>
          <label for="password">password:</label>
          <input type="password" id="password" name="password"><br><br>
          <input type="submit" value="Submit">
        </form>
        `;

        this.shadowRoot.querySelector('form').addEventListener('submit', this.handleSubmit.bind());
        
    }
}

customElements.define('login-form', LoginForm);
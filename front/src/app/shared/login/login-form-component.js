/**
 * Sample Class to learn WebComponent.
 */
class LoginForm extends HTMLElement
{
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
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

    handleSubmit() {
        let formData = new FormData(this.form);
        console.log(this.form);

        fetch('/api/login', {
            method: 'POST',
            body: formData
        })
        .then((response) => {
            if (response.ok) {
                console.log('success login');
            }
            else {
                console.error('error login');
                console.error(`code d\'erreur: ${response.status}`);

            };
            //TODO
        })
    }

    render ()
    {
        this.shadowRoot.innerHTML =
        `
        <form id="login-form">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required><br><br>
          <label for="password">password:</label>
          <input type="password" id="password" name="password" required><br><br>
          <input type="submit" value="Submit">
        </form>
        `;

        this.form = this.shadowRoot.getElementById('login-form');
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

    }
}

customElements.define('login-form', LoginForm);
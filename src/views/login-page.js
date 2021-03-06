/*
 * *********************************************************************
 * |                                                                    
 * | File: \src\views\login-page.js
 * | Project: foodex2-smart-coding-app-frontend
 * | Created Date: 2nd April 2020
 * | Author: Alban Shahaj (shahaal)
 * | Email: data.collection@efsa.europa.eu
 * | -----------------------------------------------------------------  
 * | Modified By: Alban Shahaj (shahaal)
 * | -----------------------------------------------------------------  
 * | Copyright (c) 2021 European Food Safety Authority (EFSA)
 * |                                                                    
 * *********************************************************************
 */



import {
    LitElement,
    html,
    css
} from 'lit-element';

import config from "../../config.js";

import '@polymer/paper-input/paper-input.js';
import '@cwmr/paper-password-input/paper-password-input.js';


class User {
    constructor(username, token) {
        this.username = username;
        this.token = token;
    }

    getUsername() {
        return this.username;
    }

    isLoggedIn() {
        return (this.username != null && this.token != null);
    }
}

export class LoginPage extends LitElement {

    static get properties() {
        return {
            url: {
                type: Object
            },
            user: {
                type: Object
            },
            activatePb: {
                type: Boolean
            }
        }
    }

    static get styles() {
        return css`
        .flex-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            height: 100%;
        }

        paper-input {
            min-width: 300px;
            max-width:700px;
        }

        paper-button {
            background-color: lightgray;
            color: black;
        }

        paper-button:hover {
            background-color: var(--primary-color); 
            color: white;
        }
        `;
    }

    constructor() {
        super();
        this.user = new User();
        this.activatePb = false;
        this.url = new URL(config.BASE_URL + 'get_codes');
    }

    /**
     * show username info if logged in
     * @param {*} username 
     * @returns 
     */
    showLoggedInInfo(username) {
        return html`
                    <label>Username: ${username}</label>
                    <paper-button raised @click="${this.logout}">Logout</paper-button>
                    `;
    }

    /**
     * show form to be filled in order to login
     * @returns 
     */
    showNotLoggedInInfo() {
        return html`
                    <iron-form id="iron-form">
                        <form>
                            <paper-input type="username" name="username" label="Username" required auto-validate error-message="Please provide a username"></paper-input>
                            <paper-password-input name="token" label="Token" required auto-validate error-message="Please provide a token"></paper-password-input>
                        </form>
                    </iron-form>
                    <paper-button raised @click="${this.login}">Login</paper-button>
                    `;
    }

    render() {
        return html`
        <div class="flex-container">
            ${this.user.isLoggedIn()
                ? this.showLoggedInInfo(this.user.getUsername())
                : this.showNotLoggedInInfo()
            }

            <label>You ${this.user.isLoggedIn() ? "are" : "are not"} logged in</label>
        </div>
        <progress-bar-component .activate="${this.activatePb}"></progress-bar-component>
        `
    }

    /* Called after the element’s DOM has been updated the first time, immediately before updated is called. */
    firstUpdated() {
        // get the item from default object
        let u = JSON.parse(localStorage.getItem('user'));
        // if user already logged
        this.user = (u != null) ? new User(u.username, u.token) : new User();
        // update user status
        this.updateUser();
    }

    /* save new status on local storage */
    updateUser() {
        // hide progress bar dialog
        this.activatePb = false;
        // save new user on local storage
        localStorage.setItem('user', JSON.stringify(this.user));
        // fire event to parent
        this.dispatchEvent(new CustomEvent('userStatus', { detail: this.user.isLoggedIn() }));
    }

    /* method used for performing login (limited users) */
    login() {

        // get form item
        const form = this.shadowRoot.getElementById("iron-form");

        // if the form contains not valid values
        if (!form.validate()) {
            alert("The fields cannot be empty.");
            return;
        }

        // show progress bar dialog
        this.activatePb = true;

        // jsonify the object
        var data = form.serializeForm();

        // check if correct credentials
        var body = JSON.stringify({ "n": 1 });

        this.postLoginRequest(this.url, data, body);
    }

    /* method used for performing logout */
    logout() {
        // clean user data
        this.user = new User();
        // fire event to parent
        this.updateUser();
    }

    /**
     * Post request to back-end API
     * 
     * @param {*} url // url to fetch
     * @param {*} token // x-access-token
     * @param {*} data // body data
     */
    postLoginRequest(url, user, data) {
        var error_msg = "Oops sorry, something went wrong.\nTry again using a valid password."
        var success_msg = "Logged in successfully."
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': user.token
            },
            body: data,
        }).then(res => res.json()
        ).then(res => {
            if (res.message == undefined) {
                alert(success_msg);
                this.user = new User(user.username, user.token);
                this.updateUser();
            } else {
                alert(error_msg);
            }
        }).catch(err => alert(error_msg, err));
    }
}

customElements.define('login-page', LoginPage)
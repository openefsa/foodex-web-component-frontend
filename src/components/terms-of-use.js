/*
 * *********************************************************************
 * |                                                                    
 * | File: \src\components\terms-of-use.js
 * | Project: foodex2-smart-coding-app-frontend
 * | Created Date: 6th October 2020
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

import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';

class TermsOfUse extends LitElement {

    static get properties() {
        return {
            dialog: { type: String }
        }
    }

    static get styles() {
        return css`
            h4 {
                text-align: center;
            }

            h5 {
                font-size: 14px;
            }

            mark {
                background-color: lightgray;
            }

            br {
                display: block;
                content: "";
                margin-top: 10px;
            }
        `;
    }

    constructor() {
        super();
        this.dialog = "scrolling";
    }

    render() {

        return html`
            <paper-dialog id="${this.dialog}" no-cancel-on-outside-click>
                <h4> EFSA FoodEx2 Smart Coding Application</br>Terms of Use</br>Version 2.0 - 9 June 2021</h4>
                <paper-dialog-scrollable>
                    </br>
                    The present Terms and Conditions of Use (hereinafter "Terms of Use") apply to the FoodEx2 Smart Coding application (hereinafter “FoodEx2 SCA”) website located at <a href="https://r4eu.efsa.europa.eu/app/FoodEx2-SCA">https://r4eu.efsa.europa.eu/app/FoodEx2-SCA</a>.  
                    </br>
                    FoodEx2 SCA is the property of the European Food Safety Authority (EFSA).
                    </br>
                    <center>
                        BY USING <i>FoodEx2 SCA</i>, YOU AGREE TO THESE TERMS OF USE; IF YOU DO NOT AGREE, DO NOT USE <i>FoodEx2</i> SCA. 
                    </center>
                    </br>
                    EFSA reserves the right, at its sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time. It is your responsibility to check these Terms of Use periodically for changes. Your continued use of FoodEx2 SCA following the posting of changes will mean that you accept and agree to the changes. As long as you comply with these Terms of Use, EFSA grants you a personal, non-exclusive, non-transferable, limited privilege to enter and use FoodEx2 SCA. 
                    </br>
                    FoodEx 2 SCA is accessible from the R4EU platform. By registering in the R4EU platform and accessing FoodEx 2 SCA, users accept the <a href="https://sar4euaks.z6.web.core.windows.net/R4EU/Termsofuse-R4EU.html">Terms of use and data protection notice</a> of R4EU platform.
                    </br>
                    The <a href="https://www.efsa.europa.eu/en/legalnotice">legal notice</a> on EFSA’s website applies to the use of EFSA’s logo. 

                    <h5>1. General information and purpose of the FoodEx2 SCA</h5>
                    
                    It is EFSA’s goal to simplify the process of coding food items. The FoodEx2 Smart Coding Application is a platform developed in EFSA which aims to help data providers speed up the coding in accordance with the FoodEx2 classification and description system. 
                    </br>
                    The EFSA FoodEx2 SCA makes use of Natural Language Processing (NLP) techniques, starting from the EFSA Comprehensive European Food Consumption Database and is able to suggest FoodEx2 codes based on a given free text inserted by the user. These techniques are based on artificial intelligence models trained with historical data collected in EFSA and can be updated both for the graphic interface (front-end) and for the logic running behind it (back-end). The FoodEx2 SCA allows feedback to be sent, which will be used to improve the models’ prediction.
                    </br>
                    The <b>FoodEx2 codes</b> provided by the FoodEx2 SCA should be treated as <b>suggestions</b>. Those are strictly dependent on the <b>free text input by the user</b>. Therefore, it is for the user to provide a correct description of the food. Each term suggested by the models is provided with a percentage of accuracy. This percentage is shown next to the name of the term and therefore, allows to help the user during the selection of the code. It is for the user to select the most appropriate FoodEx2 code that fits the description provided and to use the percentage of accuracy as a simple guide.
                    </br>
                    The <b>percentage of accuracy</b> is a value attributed by the various models to each term. This value indicates how certain the model is on suggesting a specific term among all terms available in the database.
                    </br>
                    All the terms suggested by the FoodEx2 SCA system are terms present in the MTX catalogue (FoodEx2 Matrix) which can be browsed with the use of the specific software developed by EFSA (the <a href="https://github.com/openefsa/catalogue-browser/wiki/Official-Guideline">EFSA Catalogue browser</a>). 
                    </br>
                    FoodEx2 SCA is also equipped with a function able to <b>send feedbacks</b>. This will allow EFSA to retrain the models and eventually increase the accuracy of the code proposed. That said, the models will be subject to new training periodically, which could alter the proposed suggestions and the percentage of accuracy attributed to each term. EFSA will take technical details related to the models in use respecting privacy rules in place between EFSA and the data providers. This feature is only accessible to previously nominated FoodEx2 expert users.
                                        
                    <h5>2. Scope</h5>
                    These Terms of Use apply between the user and the European Food Safety Authority (EFSA) and they set out the conditions applicable to the use of the FoodEx2 SCA.
                    </br>
                    The “user” means the natural or legal person (e.g. the individual, company, organisation) subject to the terms and conditions of these terms, who has created a user account to use the Tool.
                    </br>
                    By the acceptance of these terms by the user, EFSA grants the user a revocable, non-exclusive, non-transferable and limited license to use the FoodEx2 SCA solely for personal purposes strictly in accordance with the present Terms of Use. 

                    <h5>3. Intellectual Property Rights & Conditions for Re-use</h5>
                    EFSA owns the FoodEx2 SCA. <b>Copyright (©)</b> is asserted by EFSA for the FoodEx2 SCA, unless otherwise stated. By providing access to the EFSA FoodEx2 SCA to users, EFSA does not waive ownership on the FoodEx2 SCA and reserves all rights to maintain it, update it, or improve it as it sees it fit.  
                    </br>
                    The FoodEx2 SCA does not disclose any commercially sensitive or otherwise confidential information. 
                    </br>
                    EFSA is the owner of the data used by the FoodEx2 SCA which is data mapped according to the EFSA format and which is an emanation of the coding system created by EFSA for ensuring an harmonised way of collecting food consumption data from national competent authorities of the European Union Member States.  
                    </br>
                    The FoodEx2 SCA application is provided by EFSA under the conditions of the European Union Public Licence (EUPL) v. 1.2 as set out by the <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32017D0863&qid=1622037788547">Commission Implementing Decision (EU) 2017/863 of 18 May 2017</a>. The Terms of Use outlined below shall not be interpreted as limiting or substituting in any way the EUPL v.1.2 as defined by the above-mentioned Decision. <b>You can copy, modify, distribute, reproduce and reuse the data produced by means of the FoodEx2 SCA, even for commercial purposes, without asking permission, provided that you comply with the obligations set out in Article 5 of the EUPL v. 1.2 and that:</b>
                    </br>
                    <ul>
                        <li>EFSA is properly acknowledged as source and you provide a link to the license. As an example of citation: “Data provided by the European Food Safety Authority – (https://r4eu.efsa.europa.eu)”.</li>
                        <li>You do not distort the original meaning of the tools and data provided through the R4EU platform and you indicate when any modification is made.</li>
                    </ul>

                    <h5>4. Liability</h5>
                    EFSA’s goal is to keep this information timely and accurate. FoodEx2 SCA is therefore meant as a living software working as a web application, to be <b>regularly updated and maintained by EFSA</b> to the best of its knowledge and available resources in connection to the data collected. FoodEx2 SCA will not store any sensitive information other than those already stored by other EFSA systems, or other data resulting from its use. If factual errors are brought to EFSA’s attention, EFSA intends doing its utmost to correct them as soon as possible. The EFSA FoodEx2 SCA may also be updated to incorporate new information, codes or data resulting from EFSA’s scientific activities and data collections. EFSA does not provide any reassurance on the accuracy or suitability of any document, information, data provided as a result of the use of the FoodEx2 SCA by the user and is without prejudice to the outcome of EFSA’s evaluation processes. 
                    </br>
                    Obtaining access to the FoodEx2 SCA does not establish any contractual relationship between the user and EFSA. By acceding the FoodEx2 SCA, the user also acknowledges that the documents, data or information made available by EFSA may contain inaccuracies or errors. The content of the information provided as a result of the use of the FoodEx2 SCA is for information only.
                    </br>
                    There are inherent dangers in the use of any web applications/software, and users are exclusively responsible for the use of the EFSA FoodEx2 SCA and its compatibility with their equipment or other software installed. EFSA makes no representations or warranties of any kind including in relation to the safety, suitability, viruses, or other harmful components which may arise during the use of the EFSA FoodEx2 SCA.
                    </br>
                    EFSA reserves itself the right to <b>modify, suspend or discontinue, temporarily or permanently, the FoodEx2 SCA</b> or any service to which it connects, with or without prior notice. All this shall not in any case hold EFSA liable towards the user.  
                    </br>
                    EFSA accepts <b>no responsibility or liability</b> (including, but not limited to, any direct or consequential loss or damage that might occur to the user and/or any other third party) <b>arising out of, or in connection with, the information provided by FoodEx2 SCA and its use</b>. EFSA cannot be held liable for errors, inaccuracies or inconsistencies with regard to texts available on its FoodEx2 SCA being different from the scientific and administrative documents officially adopted, issued or endorsed by its responsible bodies. It is EFSA’s goal to minimise disruption caused by technical errors. It is EFSA’s goal to minimise disruption caused by technical errors. However, some data or information on EFSA’s website or FoodEx2 SCA may have been created or structured in files or formats that are not error-free and EFSA cannot guarantee that its service will not be interrupted or otherwise affected by such problems. <b>EFSA accepts no responsibility with regard to such problems incurred as a result of using this FoodEx2 SCA, website or any linked external sites</b>.
                    </br>
                    This disclaimer is not intended to limit EFSA’s liability in contravention of any requirements laid down in applicable national or EU law nor to exclude its liability for matters which may not be excluded under such laws.

                    <h5>5. Restrictions</h5>
                    The user agrees not to license, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise exploit the FoodEx2 SCA as well as to make the use of the FoodEx2 SCA available to any third party provided with the user’s account. The same rules apply to any others who have in any case access to the user account.
                
                </paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm>Close</paper-button>
                </div>
            </paper-dialog>
        `
    }

    /**
     *  Open terms of use paper-dialog.
     */
    open() {
        // get the dialog
        let dialog = this.shadowRoot.getElementById(this.dialog);
        
        // show the dialog
        if (dialog) {
            dialog.open();
        }
    }

}

customElements.define('terms-of-use', TermsOfUse)
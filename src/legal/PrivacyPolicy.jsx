import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Legal.css';

function PrivacyPolicy() {
    return (
        <Container className="legal-container section-padding mt-5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="page-wrapper">
                    <h1 className="legal-title">Privacy Policy</h1>
                    <div className="legal-card">
                        <div className="legal-content">
                            <p>This privacy policy sets out how AREKATIKA MEAT UDYOG LIMITED uses and protects any information that you give AREKATIKA MEAT UDYOG LIMITED when you visit their website and/or agree to purchase from them.</p>

                            <p>AREKATIKA MEAT UDYOG LIMITED is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.</p>

                            <p>AREKATIKA MEAT UDYOG LIMITED may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you adhere to these changes.</p>

                            <h3>We may collect the following information:</h3>
                            <ul className="legal-list">
                                <li>Name</li>
                                <li>Contact information including email address</li>
                                <li>Demographic information such as postcode, preferences and interests, if required</li>
                                <li>Other information relevant to customer surveys and/or offers</li>
                            </ul>

                            <h3>What we do with the information we gather</h3>
                            <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
                            <ul className="legal-list">
                                <li>Internal record keeping.</li>
                                <li>We may use the information to improve our products and services.</li>
                                <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
                                <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail.</li>
                                <li>We may use the information to customise the website according to your interests.</li>
                            </ul>

                            <h3>Security</h3>
                            <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.</p>

                            <h3>How we use cookies</h3>
                            <p>A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>
                            <p>We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.</p>
                            <p>Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.</p>
                            <p>You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>

                            <h3>Controlling your personal information</h3>
                            <p>You may choose to restrict the collection or use of your personal information in the following ways:</p>
                            <ul className="legal-list">
                                <li>whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
                                <li>if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at care@arekatikameat.com</li>
                            </ul>
                            <p>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.</p>
                            <p>If you believe that any information we are holding on you is incorrect or incomplete, please write to # 4-6- 238/A, ESAMIA BAZA NEAR GANESH TEMPLE Stn Kachiguda Hyderabad Himayathnagar Telangana 500027 Stn. Kachiguda H.O TELANGANA 500027 . or contact us at 7989225330 or care@arekatikameat.com as soon as possible. We will promptly correct any information found to be incorrect.</p>

                            <h3>Deletion of Your Account & Data</h3>
                            <p>You have the right to request the deletion of your account and any personal information associated with it. If you wish to delete your account, you may contact us at care@arekatikameat.com or call us at 7989225330.</p>
                            <p>Once we receive your request, we will verify your identity and process the deletion within a reasonable time frame.</p>
                            <p><strong>Please note:</strong></p>
                            <ul className="legal-list">
                                <li>Certain information may be retained as required by law, for fraud prevention, or for legitimate business purposes.</li>
                                <li>After deletion, you may no longer be able to access any services or information linked to your account.</li>
                                <li>Any data retained will be handled securely and only for the duration necessary to fulfill legal or regulatory obligations.</li>
                            </ul>
                            <p>If you believe your data is being retained longer than required, you can reach out to us for clarification or further action at care@arekatikameat.com.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Container>
    );
}

export default PrivacyPolicy;

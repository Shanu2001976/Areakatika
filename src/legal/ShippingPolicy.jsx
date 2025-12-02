import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Legal.css';

function ShippingPolicy() {
    return (
        <Container className="legal-container section-padding mt-5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="page-wrapper">
                    <h1 className="legal-title">Shipping Policy</h1>
                    <div className="legal-card">
                        <div className="legal-content">
                            <p>For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only.</p>

                            <p>Orders are shipped within 1-2 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms.</p>

                            <p>AREKATIKA MEAT UDYOG LIMITED is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 1-2 days rom the date of the order and payment or as per the delivery date agreed at the time of order confirmation.</p>

                            <p>Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration.</p>

                            <p>For any issues in utilizing our services you may contact our helpdesk on 7989225330 or care@arekatikameat.com</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Container>
    );
}

export default ShippingPolicy;

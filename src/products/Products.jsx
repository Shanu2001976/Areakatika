import React from 'react';
import { Container } from 'react-bootstrap';

function Products() {
    return (
        <section className="section-padding bg-light" id="products">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <h5 className="text-primary-custom text-uppercase letter-spacing-2">Our Offerings</h5>
                    <h2 className="display-5 fw-bold">Fresh, Hygienic & Sustainable</h2>
                    <div className="heading-line mx-auto mt-3"></div>
                    <p className="text-muted mt-3 mx-auto" style={{ maxWidth: '700px' }}>
                        Premium goat and sheep meat sourced responsibly and processed with modern hygiene standards using NMRI technology.
                    </p>
                </motion.div>

                <Row className="g-4">
                    {[
                        {
                            title: "Fresh Cuts",
                            desc: "Premium goat & mutton cuts (100% FSSAI-compliant).",
                            img: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2070&auto=format&fit=crop"
                        },
                        {
                            title: "Value-Added Products",
                            desc: "Ready-to-cook meats, marinated cuts, and meatballs.",
                            img: "https://images.unsplash.com/photo-1544025162-d76690b67f11?q=80&w=2070&auto=format&fit=crop"
                        },
                        {
                            title: "By-Products",
                            desc: "Casings, leather, and zero-waste utilization.",
                            img: "https://images.unsplash.com/photo-1589308010603-c4fa8a18832f?q=80&w=2070&auto=format&fit=crop"
                        }
                    ].map((item, index) => (
                        <Col lg={4} md={6} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="product-card bg-white rounded-4 overflow-hidden shadow-sm h-100 position-relative group"
                            >
                                <div className="product-img-wrapper overflow-hidden position-relative" style={{ height: '250px' }}>
                                    <img src={item.img} alt={item.title} className="w-100 h-100 object-fit-cover transition-transform duration-500" />
                                    <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0 transition-opacity duration-300 d-flex align-items-center justify-content-center">
                                        <Button className="btn-primary-custom">View Details</Button>
                                    </div>
                                </div>
                                <div className="p-4 text-center">
                                    <h4 className="fw-bold mb-2">{item.title}</h4>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-5">
                    <Link to="/products">
                        <Button size="lg" className="btn-primary-custom">Explore Our Products</Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}

export default Products;

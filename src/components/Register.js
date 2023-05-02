import React from 'react'

const Register = () => {
    return (
        <div className="register">
            <div className="register_one">
                <div className="row">
                    <div className="col-6">
                        <div className="reg_one">
                            <h1>Quick Delivery</h1>
                            <h2>ORDER A <br></br> PIZZA NOW</h2>
                            <p>Search for Flower Delivery Oklahoma. Instant<br></br> and personalized results
                                is at Visymo Search.
                            </p>
                            <div className="form_page">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="row_one">
                                            <input type="text" className="form_one" placeholder="First Name"></input>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="row_one">
                                            <input type="text" className="form_last" placeholder="Last Name"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row_two">
                                    <div className="col-12">
                                        <input type="text" className="form_two" placeholder="Street Address"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="row_two">
                                            <input type="text" className="form_one" placeholder="Apartment/Room"></input>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="row_two">
                                            <input type="text" className="form_last" placeholder="Phone Number"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row_two">
                                    <div className="col-12">
                                        <input type="text" className="form_two" placeholder="Pizza Type"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="row_two">
                                            <input type="text" className="form_one" placeholder="Enter Number"></input>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="row_two">
                                            <input type="text" className="form_last" placeholder="Size"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn_two">
                                    <button type="button" className = "btn5">Quick Delivery</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="reg_two">
                            <img src="/image/img5.png" alt="img"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register
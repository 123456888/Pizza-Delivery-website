import React from 'react'

const About = () => {
    return (
        <div className="about">
            <div className="row">
                <div className="col-6">
                    <div className="about_two">
                        <h1>About Us</h1>
                        <h2>WELCOME TO<br></br>MAESTRO PIZZINI</h2>
                        <p>Search text message marketing examples to see
                            how Domino's Pizza<br></br> uses GIFs, hashtags, emojis, and links to promote sales,
                            discounts, and new<br></br> products
                        </p>
                        <button type="button" className = "btn2">READ MORE</button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="image_two">
                        <img src="/image/img2.jpg" alt="img"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
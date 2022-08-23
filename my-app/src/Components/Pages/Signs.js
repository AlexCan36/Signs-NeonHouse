import React from 'react';
import Header from "../Header";
import signs1 from "../../Assets/Pics/Screenshot(85).png";
import signs2 from "../../Assets/Pics/Screenshot(84).png";

function Signs() {
    return (
        <div>
            <Header title="Our Work" subtitle="👇" />
            <div class="row">
                <div class="column">
                    <h3>Business and Commercial</h3>
                    <a target='_blank' href="https://www.instagram.com/neon_house_signs/?hl=en"><img border="1" alt="signs1" src={signs1} width="900" height="500"></img></a>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h3>Custom made LED</h3>
                    <a target='_blank' href="https://www.instagram.com/neon_house_signs/?hl=en"><img border="1" alt="signs2" src={signs2} width="900" height="500"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Signs;
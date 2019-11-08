import React from 'react';


class About extends React.Component {

    render(){
        return(
            <div>
                <h1>About us</h1>
                <p>As a team, we understand that mentorship has a major role and effect in one’s life. Positive role models that encourage people to further their education 
                and most importantly pursue what they are truly passionate about. We as a team experienced this first hand within our own apprenticeship as software engineers. 
                We have many resources at hand helping with technology as well as professional development. The value that we gain from this is priceless, 
                and we recognize this as something that should be shared and used for the youth of Charlotte.</p>
                <h2>Our Goals</h2>
                <p>Our main goal is to save the youth from economic mobility through education in exchange of rewards, giving them a platform to
                rise and becoming successful in the near future, putting a stop to economic mobility in the city of Charlotte.</p>
                <h3>Why?</h3>
                <p>We want to help tremendously with saving Charlotte's economic mobility crisis; we believe if we put our best foot forward,
                we can make an ENORMOUS change in our community from within, and stop this problem from growing! Our city is at risk, what will you do? </p>
                <h3>Meet The Team</h3>
                <div className="pic">
                    <img src="./img/G.jpg"/>
                    <img src="./img/E.jpg"/>
                    <img src="./img/AJ.jpg"/>
                </div>
                

            </div>
        )
    }
}

    export default About;
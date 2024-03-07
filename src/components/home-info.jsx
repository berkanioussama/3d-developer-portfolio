import React from "react"
import { Link } from "react-router-dom"
import { arrow } from "../assets/icons" 

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="text-center sm:text-xl font-medium ">
            {text}
        </p>
        <Link className="neo-brutalism-white neo-btn" to={link}>
            {btnText}
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center text-white neo-brutalism-blue py-4 px-8 mx-5">
            Hi i am .
            <span className="font-bold">
                Oussama Ala Eddine 👋
            </span>
            <br/>
            A Frontend Developer from algeria
        </h1>
    ),
    2: (
        <InfoBox 
            text="I'm currently looking for a new challenge and I'm open to new opportunities!" 
            link="/about" 
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text="Led multiple projects to success over the years. Curious about impact?" 
            link="/projects" 
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="Need a projext done or looking for a developer? I'am just a few keystrokes away" 
            link="/contact" 
            btnText="Contact me"
        />
    ),
}
const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null
}
 
export default HomeInfo;
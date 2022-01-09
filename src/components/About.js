import Header from "./Header"
import data from "../data/data"
import Tech from "./Tech"


const About = () => {


    return (

        <>
            <Header />
            <h1 className="about_header">ABOUT ME</h1>
            <div className="about_me">

                <div className="about_text">
                    <h1 className="about_header_data"> {data.about.header}</h1>
                    {data.about.textone}
                    {data.about.texttwo}
                 

                </div>
                <div className="about_img">
                    <img id="aboutme_img" alt="Profile" src={data.about.img} />


                </div>

              



            </div>

            <Tech />
           


        </>





    )
}

export default About

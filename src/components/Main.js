import React from "react";
import data from "./data"
import Header from "./Header";

const Main = () => {


  return (
    <>
    <Header />
      <div className="main_content">
        <div className="text">
          <h1 className="hi_name">Hi, I'm {data.name}<span className="wave" role="img" aria-labelledby="wave">👋🏻</span></h1>
          <h2 className="job">{data.job}</h2>
          <h4>{data.text_main}</h4>


        </div>
        <div className="photo">

          <img id="portfolio" alt="Portfolio" src={data.photo} />
        </div>


      </div>
      <div className="social">
        <ul className="social">
          {data.social.map((social, index) => (
            <div key={index}>

              <li>

                <span >
                  <div className="social_logo">
                    <a href={social.url}> <i className={social.icon}></i></a>
                  </div>
                </span>
              </li>
            </div>



          ))}




        </ul>
      </div>
    </>



  )
}

export default Main;
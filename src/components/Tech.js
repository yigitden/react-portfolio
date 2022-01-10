import data from "../data/data";


const Tech = () => {
    return (



        <div className="tech">
            <div className="tech_text"><h2>Tech I Use </h2></div>
            <div className="tech_names">
                <ul className="tech_names_list">

                    {data.tech.map((tech, index) => (

                        <li>
                            <span>
                                <div id="techuse_name" key={tech.index}>
                                    <i class={tech.icon}>
                                        <p>{tech.name}</p>
                                    </i>
                                </div>
                            </span>


                        </li>







                    ))}







                </ul>
            </div>
        </div>


    )
}

export default Tech
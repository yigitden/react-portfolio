import { Button, Card } from 'react-bootstrap';
import Header from "./Header";
import data from "./data"



const Projects = () => {


    return (
        <><Header/>
        
        <div className="projects">

            <h1 className="text_projects">PROJECTS</h1>
            <h3>{data.project_text}</h3>

            <div className="portfolio">

{data.projects.map((project,index) => (


<Card className="cards" border="info" style={{ width: '18rem', height: '24rem'}}>
<Card.Img style={{ width: '286px', height: '180px'}} variant="top" src={project.img}/>
<Card.Body>
    <Card.Title className="text-dark">{project.name} </Card.Title>
    <Card.Text >
    {project.descriptions}
    </Card.Text>
    <Button href={project.url} variant="outline-dark">Go Project</Button>
</Card.Body>
</Card>





))}




           





            </div>
 
       


        </div>

        </>

    )
}

export default Projects
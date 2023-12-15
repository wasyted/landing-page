import './Projects.css'

export default function Projects(){
    return(
    <>
        <div className="projectsSectionContainer">
            <h1 style={{backgroundColor: 'var(--black)',fontSize: '2.2rem',paddingLeft: '0', paddingRight: '20px', justifyContent: 'end',}} className="sectionHeader">Check out my projects_</h1>
            <div className="projectsContainer">
                <div className='projectContainer' style={{flexWrap: 'wrap-reverse'}}>
                    <div>
                        <h1>laloamasa</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, pariatur sunt laborum harum optio dicta quia eaque architecto excepturi blanditiis sapiente expedita nemo nostrum neque, molestias numquam tempore, corrupti enim!
                        </p>
                    </div>
                    <div className='projectImageContainer'>
                        <img src="../src/assets/mobile (3).png" alt="" />
                    </div>
                </div>
                <div className='projectContainer' style={{flexDirection: 'column'}}>
                    <div className='projectImageContainer' style={{maxWidth: '656px'}}>
                        <img src="../src/assets/mobile (4).png" alt="" />
                    </div>
                    <div>
                        <h1>Huryn</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, pariatur sunt laborum harum optio dicta quia eaque architecto excepturi blanditiis sapiente expedita nemo nostrum neque, molestias numquam tempore, corrupti enim!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
import './ProjectGrid.scss';

export default function ProjectGrid(){
  return(
    <div style={{backgroundColor: 'lightgray', padding: 20}}>
      <h1 className='sectionHeader'>Check out my projects!</h1>
      <div class="projectGridContainer">
        <div class="Project-4">
          
        </div>
        <div class="Project-3"></div>
        <div class="Project-1" style={{padding: 20}}>
          <div style={{maxWidth: '35ch', textAlign: 'justify', color: '#fff'}}>
            <h1>Huryn Web</h1>
            <h2>HTML SASS JAVASCRIPT</h2>
            <p>This is a landing page for a window tint company. It is seamelessly integrated with the client's appointment managing flow '{('Client contacts > Operator   sets up appointement manually > A receipt of the operation is generated and sent to email.')}'.</p>
          </div>
        </div>
        <div class="Project-2"></div>
      </div>
    </div> 
  )
}
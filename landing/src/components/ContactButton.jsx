import './ContactButton.css'

export default function ContactButton(props){
  ContactButton.defaultProps = {
    width: '100px',
  }
  return(
    <>
      <button className='contact-button' style={{
        width: props.width,
        backgroundColor: props.background, 
        borderColor: props.border,
        color: props.color,
      }}>
          Contact me
      </button>
    </>
  )
}
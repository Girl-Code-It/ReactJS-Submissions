import React from "react"
 
function ContactCard(props){
    
    return(
          <div className="contact-card">
           
                <h2>Question: {props.contact.question}</h2>
                <h3>Answer: {props.contact.answer}</h3>  
            </div>
    )
}

export default ContactCard
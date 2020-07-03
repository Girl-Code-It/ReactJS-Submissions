import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
        <ContactCard 
                contact={{question: " How To Kill An Ant? Asked In Exam For 15 Marks. Student’s ",answer: "Mix Chilli Powder With Sugar & Keep It Outside The Ant’s"}}
            />
            
            <ContactCard 
                contact={{question: " Banta Apni Job Ke Liye Ek Company Mein Interview Dene Gaya. Interviewer Ne Banta Se Puchha: Landline Aur Cellphone Mein Kya Farak Hai? ",answer: " Intelli"}}
            />
            
            <ContactCard
                contact={{question: "How can you drop a raw egg onto a concrete floor without cracking it?",answer: " Concrete floors are very hard to crack!"}}
            />
            
            <ContactCard 
                contact={{question: "Approximately how many birthdays does the average Indian woman have?",answer: "Just one. All the others are anniversaries."}}
            />
            <ContactCard 
                contact={{question: ". How can a man go eight days without sleep?",answer: " He sleeps at night."}}
            />
             
        </div>
    )
}

export default App
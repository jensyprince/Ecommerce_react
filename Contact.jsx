import React from 'react'


const Contact = () => {
    return (
        <div className="container">
             <form>
                <label>First Name</label>
                <input type="text" name="firstname" placeholder="Ex:John" />

                <label>Last Name</label>
                <input type="text" name="lastname" placeholder="Ex:Doe" />
                <label>E-Mail</label>
                <input type="text" name="email" placeholder="Ex:johndoe@email.com" />

                <label>Feedback</label>
                <textarea name="subject"></textarea>

                <input type="submit" value="Submit" />
            </form> 
            
        </div>

    )
}

export default Contact
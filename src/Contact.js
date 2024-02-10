import React from 'react'

export default function Contact() {
  return (
    <div id='Contact'>
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>

        <form >
            <div className="input-box">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
            </div>
            <div className="input-box">
                <input type="number" placeholder="Mobile number"/>
                <input type="email" placeholder="Email"/>
            </div>
            <textarea classNamename="" id="" cols="30" rows="10" placeholder="your message"></textarea>
            <input type="submit" value="Send Message" class="btn"/>
        </form>
    </section>
    </div>
  )
}

import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import "./Contact.css"

const Contact = () => {
  return(
    <div className="container">
      <Header />
      <div className="contact_container">
        <form className="form" action="submit">
          <div className="form_elem">
            <label htmlFor="name" className="form">Votre nom</label>
            <input type="text" name="name" id="name" placeholder="Entrez votre nom"/>
          </div>
          <div className="form_elem">
            <label htmlFor="email">Votre email</label>
            <input type="email" name="email" id="email" placeholder="Entrez votre email"/>
          </div>
          <div className="form_elem">
            <label htmlFor="message">Message</label>
            <textarea rows="7" name="message" id="message" placeholder="Exprimez vous..."/>
          </div>
          <div>
            <input className="submit_button" type="submit" value="Envoyer" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
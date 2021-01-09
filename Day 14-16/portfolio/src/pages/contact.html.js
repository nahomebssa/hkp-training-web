import { NavBarRoof } from '../components/inc/NavBar';
import { Header } from "../components/inc/Header";
import { Section } from "../components/inc/Section";

function ContactSection() {
    return (
        <form>
            <div className="input-group">
                <input className="form-control" placeholder="Email Address" />
            </div>
            <div className="input-group">
                <input className="form-control" placeholder="Title" />
            </div>
            <div className="input-group">
                <textarea className="form-control" placeholder="Message" />
            </div>
        </form>
    )
}

export default function IndexPage() {
    const title = "Contact."
    const subtitle = "Let's keep in touch!"
    return (
        <NavBarRoof>
            <Header title={title} subtitle={subtitle} /> 
            <Section id="contact" title="Contact Form" component={ContactSection} />
        </NavBarRoof>
    )
}
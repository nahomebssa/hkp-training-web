import { NavBarRoof } from '../components/inc/NavBar';
import { Header } from "../components/inc/Header";
import { Section } from "../components/inc/Section";
import { Button } from 'react-bootstrap';
import { useTheme } from '../components/theme/ThemeContext';

function ContactSection() {
    const onSubmit = (event) => {
        event.preventDefault()
    }
    const { dark } = useTheme()
    const inputClassName = dark ? 'bg-dark border-secondary' : ''
    return (
        <form onSubmit={onSubmit}>
            <div className="input-group my-2">
                <input className={["form-control p-3", inputClassName].join(" ").trim()} placeholder="Email Address" />
            </div>
            <div className="input-group my-2">
                <input className={["form-control p-3", inputClassName].join(" ").trim()} placeholder="Title" />
            </div>
            <div className="input-group my-2">
                <textarea className={["form-control p-3", inputClassName].join(" ").trim()} placeholder="Message" />
            </div>
            {/* <input type="submit" /> */}
            <Button type="submit">Submit</Button>
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
import { NavBarRoof } from "../components/inc/NavBar";
import { Header } from "../components/inc/Header";
import { Section } from "../components/inc/Section";

function AboutSection() {
    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit non aliquid officia. Reiciendis nostrum, optio modi dignissimos obcaecati totam expedita nobis deleniti officiis omnis maiores mollitia molestiae qui facere.</p>
            <p>Mollitia, eius itaque! Aspernatur, ex nemo distinctio ea eum optio atque veritatis aliquid cum repellendus velit officia maxime, ipsam non fugiat. Autem accusantium molestias, sint tempore quis harum exercitationem placeat?</p>
            <p>Obcaecati deleniti incidunt quibusdam saepe facere tempore nostrum consectetur reprehenderit sint, laudantium cum accusamus aperiam, ipsam facilis unde architecto expedita repudiandae? Vitae sapiente dolorem perspiciatis eius mollitia, quas voluptatem alias!</p>
        </>
    )
}

export default function IndexPage() {
    const title = "About."
    const subtitle = "Hi! My name is Nahom Ebssa, and I am a computer science student at George Mason University."
    return (
        <NavBarRoof>
            <Header title={title} subtitle={subtitle} /> 
            <Section id="about" component={AboutSection} />
        </NavBarRoof>
    )
}
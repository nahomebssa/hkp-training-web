import { NavBarRoof } from "../components/inc/NavBar";
import { Header } from "../components/inc/Header";
import { Section } from "../components/inc/Section";
import { p } from "../components/html";
import { ThemeText } from "../components/theme/ThemeText";

function AboutSection() {
    const blurb = "Hello! My name is Nahom Ebssa, and I am a senior at George Mason University studying computer science. I have taken courses such as Systems Programming, Networking, Databases, Artificial Intelligence, and Algorithms Analysis. Over the course of my career, I have also participated in a couple of projects. I was in a group where we aimed to design and build a mobile-first web app that enables students of different majors to seek out help from other experienced mentors in the field."
    return (
        <>
            {/* <ThemeText as={p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit non aliquid officia. Reiciendis nostrum, optio modi dignissimos obcaecati totam expedita nobis deleniti officiis omnis maiores mollitia molestiae qui facere.</ThemeText> */}
            {/* <ThemeText as={p}>Mollitia, eius itaque! Aspernatur, ex nemo distinctio ea eum optio atque veritatis aliquid cum repellendus velit officia maxime, ipsam non fugiat. Autem accusantium molestias, sint tempore quis harum exercitationem placeat?</ThemeText> */}
            {/* <ThemeText as={p}>Obcaecati deleniti incidunt quibusdam saepe facere tempore nostrum consectetur reprehenderit sint, laudantium cum accusamus aperiam, ipsam facilis unde architecto expedita repudiandae? Vitae sapiente dolorem perspiciatis eius mollitia, quas voluptatem alias!</ThemeText> */}
            <ThemeText as={p}>{blurb}</ThemeText>
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
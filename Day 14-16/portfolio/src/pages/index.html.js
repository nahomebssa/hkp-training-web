import { Header } from "../components/inc/Header";

export default function IndexPage() {
    const title = "Welcome."
    const subtitle = "Hi! My name is Nahom Ebssa, and I am a computer science student at George Mason University."
    return (
        <>
            <Header title={title} subtitle={subtitle} centerStage />
        </>
    )
}
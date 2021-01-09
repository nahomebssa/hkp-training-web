import { NavBarRoof } from "../components/inc/NavBar";
import { Header } from "../components/inc/Header";
import { Section } from "../components/inc/Section";
import { useEffect } from "react";
import { useState } from "react";

const Flex = ({column, ...rest}) => <div className={["d-flex flex-wrap", column ? "flex-column" : ""].join(" ").trim()} {...rest} />

function Works() {
    const [works, setWorks] = useState([])
    
    useEffect(() => {
        fetch('https://api.github.com/users/nahomebssa/repos').catch((e) => {
            console.error(e)
        }).then(res => res.json()).then(json => {
            setTimeout(() => {
                setWorks(json)
                // console.log({works})
            }, 1000)
        })
    }, [setWorks, works])
    

    const loading = works.length < 1
    const loadingComponent = <p><i>Loading...</i></p>
    const worksComponent = works.map(({full_name:fullName, name, description, html_url: repoLink},i) => (
        <div className="card m-2 w-50" key={i}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <p className="card-text">{fullName}</p>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href={repoLink} target="_blank" rel="noreferrer" className="btn btn-primary">Check it out</a>
            </div>
        </div>
    ))
    return (
        loading ? loadingComponent : <Flex>{worksComponent}</Flex> 
    )
}

function WorkSection() {
    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit non aliquid officia. Reiciendis nostrum, optio modi dignissimos obcaecati totam expedita nobis deleniti officiis omnis maiores mollitia molestiae qui facere.</p>
            <Works />
            {/* <Link to="/work">Learn More</Link> */}
        </>
    )
}

export default function WorkPage() {
    return (
        <NavBarRoof>
            <Header title={"Work."} subtitle={"Here's some work..."} />
            <Section id="work" component={WorkSection} />
        </NavBarRoof>
    )
}
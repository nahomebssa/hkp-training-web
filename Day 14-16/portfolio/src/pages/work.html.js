import { NavBarRoof } from "../components/inc/NavBar";
import { Header } from "../components/inc/Header";
import { Section } from "../components/inc/Section";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { p } from "../components/html";
import { ThemeText } from "../components/theme/ThemeText";
import { Card } from 'react-bootstrap'
import { useTheme } from "../components/theme/ThemeContext";
import { ThemeContainer } from "../components/theme/ThemeContainer";

const Flex = ({ column, ...rest }) => <div className={["d-flex flex-wrap", column ? "flex-column" : ""].join(" ").trim()} {...rest} />

function fetchPens() {
    return ([
        { id: "XVOzRG", title: "Material Design App (animated)" },
        { id: "jWwbLQ", title: "File Explorer" },
        { id: "EEgPQP", title: "Onboarding" },
        { id: "ZOpLRp", title: "Search animation" },
        { id: "VmjrZK", title: "Pure CSS Modal" },
    ])
}



const MCard = ({ href, headerIcon: icon, header, title, description, children }) => {
    const linkProps = {href, className: "text-decoration-none hover-text-decoration-underline"}
    return (
        <ThemeContainer as={Card} className="shadow-sm">
            {
                header &&
                <ThemeContainer as={Card.Header} className="px-3">
                    <ThemeText as={Link} {...linkProps}>
                        { icon && <img className="me-2" src={icon.src} alt={icon.alt} /> }
                        {header}
                    </ThemeText>
                </ThemeContainer>
            }
            {children}
            {
                title &&
                <Card.Title className="px-3 pt-3">
                    <ThemeText as={Link} {...linkProps}>{title}</ThemeText>
                </Card.Title>
            }
            {
                description &&
                <ThemeText as={Card.Text} className="px-3 pb-3">{description}</ThemeText>
            }
        </ThemeContainer>
    )
}
function Works() {
    const [works, setWorks] = useState([])
    const addToWorks = (w) => { setWorks(works.concat(w)) }

    useEffect(() => {
        fetch('https://api.github.com/users/nahomebssa/repos').catch((e) => {
            console.error(e)
        }).then(res => res.json()).then(json => {
            setTimeout(() => {
                setWorks(json)
            }, 0)
        })
    }, [setWorks, works])


    const { dark } = useTheme()
    const loading = works.length < 1
    const loadingComponent = <p><i>Loading...</i></p>
    const worksComponent = works.map(({ full_name: fullName, name, description, html_url: repoLink }, i) => (
        (
            <div className="col">
                <MCard href={repoLink} headerIcon={{src:'https://github.com/favicon.ico', alt:'github faivcon'}} header={fullName} title={name} description={description} />
            </div>
        )
    ))

    const penFactory = (pen, i) => {
        const { id: slug, ...rest } = pen
        return (
            <div className="px-2">
                <MCard href={`https://codepen.io/enahom99/full/${slug}`} headerIcon={{src: 'https://codepen.io/favicon.ico'}} {...(pen.id ? {header: `enahom99/${pen.id}`} : {})} {...rest}>
                    <Codepen.Pen height={512} slug={slug} theme={dark ? 'dark' : 'light'} {...rest} />
                </MCard>
                {/* <Card key={i}>
                    <Card.Body>
                        {pen.title && <Card.Header>{pen.title}</Card.Header>}
                        <Codepen.Pen slug={slug} theme={dark ? 'dark' : 'light'} {...rest} />
                    </Card.Body>
                </Card> */}
            </div>
        )
    }
    /*
    <iframe height="265" style="width: 100%;" scrolling="no" title="Onboarding" src="https://codepen.io/enahom99/embed/EEgPQP?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href='https://codepen.io/enahom99/pen/EEgPQP'>Onboarding</a> by Nahom Ebssa
    (<a href='https://codepen.io/enahom99'>@enahom99</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
    */
    // const style = { height: "265px", boxSizing: "borderBox", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid", margin: "1em 0", padding: "1em" }
    return (
        loading ?
            loadingComponent :
            (
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {worksComponent}
                    {fetchPens().map(penFactory)}
                </div>
            )
    )
}

const Codepen = {
    Pen({ slug, title, height, theme }) {
        return (
            <iframe height={height || "265"} style={{ width: '100%' }} scrolling="no" title={title} src={`https://codepen.io/enahom99/embed/${slug}?height=${height || "265"}&theme-id=${theme}&default-tab=result`} frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href={`https://codepen.io/enahom99/pen/${slug}`}>{title}</a> by Nahom Ebssa
                (<a href='https://codepen.io/enahom99'>@enahom99</a>) on <a href='https://codepen.io'>CodePen</a>.
            </iframe>
        )
    }
}

function WorkSection() {
    return (
        <>
            {/* <ThemeText as={p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit non aliquid officia. Reiciendis nostrum, optio modi dignissimos obcaecati totam expedita nobis deleniti officiis omnis maiores mollitia molestiae qui facere.</ThemeText> */}
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
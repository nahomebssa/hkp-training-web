import NavBar from "../inc/NavBar";

// function Main({ container, ...rest}) {
//     const className = container ? {className: "container"} : null
//     return <Main {...className} {...rest} />
// }
function Main({ container=true, ...rest}) {
    return <main style={{background: 'white'}} {...rest} />
}

function Section({ id, title, children, container=true }) {
    const className = container ? {className: "container"} : null
    return (
        <section {...className}>
            <div className="p-5">
                <h4 id={id}>{title}</h4>
                {children}
            </div>
        </section>

    )
}

export default function IndexPage() {
    return (
        <body data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" tabindex="0">
            <div className="wrapper">
                <NavBar />
                <section className="shadow-sm bg-light p-5">
                    <div className="container p-5">
                        <h1>Welcome.</h1>
                        <p>
                            Hi! My name is Nahom Ebssa.
                </p>
                    </div>
                </section>
                <Main>
                    <Section id="about" title="About">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit non aliquid officia. Reiciendis nostrum, optio modi dignissimos obcaecati totam expedita nobis deleniti officiis omnis maiores mollitia molestiae qui facere.
                    </p>
                        <p>
                            Mollitia, eius itaque! Aspernatur, ex nemo distinctio ea eum optio atque veritatis aliquid cum repellendus velit officia maxime, ipsam non fugiat. Autem accusantium molestias, sint tempore quis harum exercitationem placeat?
                    </p>
                        <p>
                            Obcaecati deleniti incidunt quibusdam saepe facere tempore nostrum consectetur reprehenderit sint, laudantium cum accusamus aperiam, ipsam facilis unde architecto expedita repudiandae? Vitae sapiente dolorem perspiciatis eius mollitia, quas voluptatem alias!
                    </p>
                    </Section>

                    <Section id="work" title="Work">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit non aliquid officia. Reiciendis nostrum, optio modi dignissimos obcaecati totam expedita nobis deleniti officiis omnis maiores mollitia molestiae qui facere.
                        </p>
                        <p>
                            Mollitia, eius itaque! Aspernatur, ex nemo distinctio ea eum optio atque veritatis aliquid cum repellendus velit officia maxime, ipsam non fugiat. Autem accusantium molestias, sint tempore quis harum exercitationem placeat?
                        </p>
                        <p>
                            Obcaecati deleniti incidunt quibusdam saepe facere tempore nostrum consectetur reprehenderit sint, laudantium cum accusamus aperiam, ipsam facilis unde architecto expedita repudiandae? Vitae sapiente dolorem perspiciatis eius mollitia, quas voluptatem alias!
                        </p>
                        <a href="/work">Learn More</a>
                    </Section>

                    <Section id="contact" title="Contact">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit non aliquid officia. Reiciendis nostrum, optio modi dignissimos obcaecati totam expedita nobis deleniti officiis omnis maiores mollitia molestiae qui facere.
                        </p>
                        <p>
                            Mollitia, eius itaque! Aspernatur, ex nemo distinctio ea eum optio atque veritatis aliquid cum repellendus velit officia maxime, ipsam non fugiat. Autem accusantium molestias, sint tempore quis harum exercitationem placeat?
                        </p>
                        <p>
                            Obcaecati deleniti incidunt quibusdam saepe facere tempore nostrum consectetur reprehenderit sint, laudantium cum accusamus aperiam, ipsam facilis unde architecto expedita repudiandae? Vitae sapiente dolorem perspiciatis eius mollitia, quas voluptatem alias!
                        </p>
                    </Section>
                </Main>

                {/* <footer className="bg-dark text-light p-3">
                    <div className="container">
                        {'&copy'} Nahom Ebssa 2021
                    </div>
                </footer> */}

            </div>
        </body>
    )
}
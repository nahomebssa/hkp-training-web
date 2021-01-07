import NavBar from "../inc/NavBar";
import PageHeader from "../inc/PageHeader";

export default function WorkPage() {
    return (
        <body>
            <div className="wrapper">
                <NavBar />
                <PageHeader title={"Work."} subtitle={"Here's some work..."} />
                <main className="container">

                    <section>
                        <div className="p-3">
                            <h4 id="work">Work</h4>
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
                        </div>
                    </section>
                </main>

                {/* <footer className="bg-dark text-light p-3">
                    <div className="container">
                        {'&copy'} Nahom Ebssa 2021
                    </div>
                </footer> */}

            </div>
        </body>
    )
}
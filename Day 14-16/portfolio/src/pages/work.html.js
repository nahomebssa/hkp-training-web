import { Link } from "react-router-dom";
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
                            <p>...</p>
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
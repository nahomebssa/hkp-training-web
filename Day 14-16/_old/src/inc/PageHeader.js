export default function PageHeader({title, subtitle}) {
    return (
        <section className="shadow-sm bg-light mb-5 p-5">
            <div className="container p-5">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </section>
    )
}
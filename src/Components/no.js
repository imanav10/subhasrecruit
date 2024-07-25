const No = ({ back }) => {
    return (
        <>
            <section style={{ paddingTop: '122px', textAlign: 'center', height: '50vh' }}>
                <h1>Inpe nhi ye cutie h 🫂</h1>
                <br />
                <button onClick={() => window.history.back()}>back</button>
            </section>
        </>
    );
}

export default No;
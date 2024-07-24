const end = () => {

    return (
        <div>
            <section className="home">
                <h1>The End guys</h1>

                <img src="pfp.jpeg" alt="Welcome" style={{height: '38vh', justifyContent: 'center'}}></img>
                <br />

                <button onClick={() => window.location.href = '/'}>HOME</button>

            </section>
        </div>
    );
}

export default end;
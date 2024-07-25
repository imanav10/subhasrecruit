const lol = () => {
    return (
        <>
            <section style={{paddingTop: '122px',textAlign: 'center', height: '50vh'}}>
                <audio autoPlay>
                    <source src="L.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <p>Lol</p>
                <img src='L.png'style={{height: '42vh'}}></img>
                <br />
                <button onClick={() => window.location.href = '/design'} >back</button>
            </section>
        </>
    );
}

export default lol;
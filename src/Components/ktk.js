const ktk = () => {
    return (
        <>
            <section style={{textAlign: 'center', height: '50vh'}} className="heheh">
                <audio autoPlay>
                    <source src="brazilian.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <h1 style={{textAlign: 'center', justifyContent: 'center'}}>they/them ♥️ </h1>
                <p>say best of luck to me obv for interview 😘</p>
                <img src='kiss.png'style={{height: '42vh'}}></img>
                <img src='kiss2.png'style={{height: '32vh'}}></img>
                <br />
                <button onClick={() => window.location.href = '/phonk'} >prev</button>
                <button onClick={() => window.location.href = '/end'}>End</button>
            </section>
        </>
    );
}

export default ktk;
const ktk = () => {
    return (
        <>
            <section style={{paddingTop: '122px',textAlign: 'center', height: '50vh'}}>
                <audio autoPlay>
                    <source src="brazilian.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <h1 style={{textAlign: 'center', justifyContent: 'center',paddingTop: '12vh'}}>they/them ♥️ </h1>
                <img src='kiss.png'style={{height: '42vh'}}></img>
                <br />
                <button onClick={() => window.location.href = '/phonk'} >prev</button>
                <button onClick={() => window.location.href = '/'}>next</button>
            </section>
        </>
    );
}

export default ktk;
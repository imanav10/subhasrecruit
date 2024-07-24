const Phonk = () => {
    return (
        <>
            <section style={{paddingTop: '122px',textAlign: 'center', height: '50vh'}}>
                <audio autoPlay>
                    <source src="brazilian.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <h1 style={{textAlign: 'center', justifyContent: 'center',padding: '12vh'}}>they love each other ♥️ </h1>
                
                <button onClick={() => window.location.href = '/ziyad'} >prev</button>
                <button onClick={() => window.location.href = '/ktk'}>next</button>
            </section>
        </>
    );
}

export default Phonk;
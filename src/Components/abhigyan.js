const Abhigyan = () => {
    return(
        <>  
            <section style={{paddingTop: '122px',textAlign: 'center', height: '50vh'}}>
                
                <img src="cutie.jpg" style={{width: '22vh'}}></img>
                <br />
                <img src="abhigyan.jpeg" style={{width: '25vh'}}></img>
                <p>he feel good</p>
                <button onClick={() => window.location.href = '/ayush'}>prev</button>
                <button onClick={() => window.location.href = '/ziyad'}>next</button>

            </section>
        </>
    )
}

export default Abhigyan;
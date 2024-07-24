const Ayush = () => {
    return(
        <>  
            <section style={{paddingTop: '122px', textAlign: 'center', height: '50vh'}}>
                <img src="ayush.jpeg" style={{width: '38vh'}}></img>
                <p>me too</p>
                                <button onClick={() => window.location.href = '/design'}>prev</button>
                <button onClick={() => window.location.href = '/abhigyan'}>next</button>

            </section>
        </>
    )
}

export default Ayush;
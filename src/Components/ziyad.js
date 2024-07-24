const Ziyad = () => {
    return(
        <>  
            <section style={{paddingTop: '122px',textAlign: 'center', height: '50vh'}}>
                <img src="ziyad.jpeg" style={{width: '25vh'}}></img>
                <img src="ziyad2.png" style={{width: '21vh', marginLeft: '21px'}}></img>
                <p>mantri ji feel good</p>
                <button onClick={() => window.location.href = '/abhigyan'}>prev</button>
                <button onClick={() => window.location.href = '/phonk'}>next</button>

            </section>
        </>
    )
}

export default Ziyad;
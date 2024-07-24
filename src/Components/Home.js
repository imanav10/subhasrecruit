import { useEffect } from 'react';

const Home = () => {
    
    useEffect(() => {
        const requestAutoplayPermission = () => {
            const audio = new Audio();
            audio.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAABCxAgAEABAAZGF0YQAAAAA=';
            audio.play().then(() => {
                console.log('Autoplay permission granted');
            }).catch(err => {
                console.error('Autoplay permission denied', err);
            });
        };

        requestAutoplayPermission();
    }, []);
    
    return (
        <div>
            <section className="home">
                <h1>hii subhasha recruiters Welcome</h1>

                <img src="img.png" alt="Welcome"></img>
                <br />
                <p>continue by clicking</p>
                <button onClick={() => window.location.href = '/design'}>click me</button>

            </section>
        </div>
    );
}

export default Home;
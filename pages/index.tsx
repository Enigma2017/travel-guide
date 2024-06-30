import { Button } from 'primereact/button';
import { CardMain } from '../components/organisms/cardMain';

export default function Home() {
    return(
        <main className='main'>
            <section>
                <div className='container'>
                    <h1>Home</h1>
                </div>
            </section>
            <section>
                <div className='container'>
                    <CardMain />
                    <CardMain />
                    <CardMain />
                </div>
            </section>
        </main>
    )
} 

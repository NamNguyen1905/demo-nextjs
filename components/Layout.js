
import Navbar from './navbar';
import Head from 'next/head';

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>Demo</title>
                <link rel='stylesheet' href='https://bootswatch.com/4/materia/bootstrap.min.css'/>
            </Head>
            <Navbar/>
            <div className='container'>
                {props.children}
            </div>
        </div>
    )
}
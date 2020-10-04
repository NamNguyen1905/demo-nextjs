
import Layout from '../components/Layout';

export default function Home() {

    return (
        <div>
            <Layout>
                home
                {/* <span hidden><Coin data={props} /></span> */}
            </Layout>

        </div>

    )
}

// Home.getInitialProps = async function () {
//     const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

//     const data = await res.json();

//     return {
//         props: data
//     }
// }





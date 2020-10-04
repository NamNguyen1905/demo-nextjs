import Layout from "../components/Layout";

import React, { Component } from 'react';



class Coin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currency: 'USD'
        }
    }
    render() {
        const data = this.props.data;
        let list = '';
        if (this.state.currency === 'USD') {
            list = <div>
                Tỉ giá bitcoin theo
                    <span class="badge badge-info">{data.bpi.USD.code}</span>:
                    <strong>{data.bpi.USD.rate}</strong> được cập nhật lần cuối lúc:<strong>{" " + data.time.updated}</strong>
            </div>
        } else if (this.state.currency === 'GBP') {
            list = <div>
                Tỉ giá bitcoin theo
                    <span class="badge badge-info">{data.bpi.GBP.code}</span>:
                    <strong>{data.bpi.GBP.rate}</strong> được cập nhật lần cuối lúc:<strong>{" " + data.time.updated}</strong>
            </div>
        } else if (this.state.currency === 'EUR') {
            list = <div>
                Tỉ giá bitcoin theo
                    <span class="badge badge-info">{data.bpi.EUR.code}</span>:
                    <strong>{data.bpi.EUR.rate}</strong> được cập nhật lần cuối lúc:<strong>{" " + data.time.updated}</strong>
            </div>
        }
        return (
            <div>
                <Layout>
                    <select onChange={e => this.setState({ currency: e.target.value })} id="input" class="form-control" required="required">
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                    </select>
                    {list}
                </Layout>
            </div>
        );
    }
}
Coin.getInitialProps = async function () {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

    const temp = await res.json();

    return {
        data: temp
    }
}


export default Coin;


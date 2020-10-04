import Layout from "../components/layout";

import React, { Component } from 'react';

class Github extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            obj: null,
        };
        this.buttonOnClick = this.buttonOnClick.bind(this);
        this.inputOnChange = this.inputOnChange.bind(this);
    }
    async buttonOnClick() {
        const res = await fetch(this.state.url);
        const temp = await res.json();
        this.setState(state => ({
            obj: temp
        }));
    }

    inputOnChange = (e) => {
        const text = "https://api.github.com/users/" + e.target.value;
        this.setState(state => ({
            url: text
        }));
    }


    render() {
        let list = '';
        if (this.state.obj !== null) {
            list = <div>
                <ul class="list-group">
                    <li class="list-group-item">
                        <span class="badge">Avatar</span>
                        <img src={this.state.obj.avatar_url} />
                    </li>
                    <li class="list-group-item">
                        <span class="badge">Github link</span>
                        <p><a href={this.state.obj.html_url}>{this.state.obj.html_url}</a></p>
                    </li>
                    <li class="list-group-item">
                        <span class="badge">User Name</span>
                        <p>{this.state.obj.login}</p>
                    </li>
                    <li class="list-group-item">
                        <span class="badge">Email</span>
                        <p>{this.state.obj.email}</p>
                    </li>
                    <li class="list-group-item">
                        <span class="badge">Date created</span>
                        <p>{this.state.obj.created_at}</p>
                    </li>
                </ul>
            </div>
        }

        return (
            <div>
                <Layout>
                    <input onChange={this.inputOnChange} placeholder="Please enter your github username here" className="form-control" required="required" />
                    <button onClick={this.buttonOnClick} type="button" className="btn btn-success">FETCH</button>
                    {list}
                </Layout>
            </div>
        );
    }
}

export default Github;



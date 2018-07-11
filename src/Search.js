import React from 'react';
import { fetchLcboEndpoint } from "./api/lcbo.js";
import Map from './Map.js';
import styled from 'styled-components';


export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            productNames: []
        };
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
  
        fetchLcboEndpoint("products", {
            q: this.state.value
        }).then(data => {
            console.log('trying to get product', data)
            alert(`${this.state.value} was submitted`)
        });
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    componentDidMount() {

        fetchLcboEndpoint("stores", {
            product_id: "334052"
        }).then(data => {
            data.result.map(product => {
                <Map lat={product.latitude} lng={product.longitude} />
                console.log('product lat', product.latitude)
                console.log('product lng', product.longitude)
            });
        });
    }

    render () {
        const Title = styled.h1`
            font-size: 1.5em;
            font-family: Open Sans
            text-align: center;
            color: palevioletred;
        `;

        const SearchProduct = styled.input`
        width: 25%;
        padding: 15px;
        border-radius: 5px;
        margin: auto;
        display: block;
        border: 1px solid #ccc;
        box-shadow: inset 0 1px 3px #ddd;
        `

        const style = {
            width: '20%',
            padding: '15px',
            display: 'block',
            margin: 'auto'
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <Title>LCBO Mapping</Title>
                        <input style={style} type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <SearchProduct type="submit" value="Find Stores" />
                </form>
            </div>
        );
    }
}
import React, {Component}from 'react';

class SearchInput extends Component {
	constructor(props){
		super(props);
		this.handleStock = this.handleStock.bind(this);
	}

	handleStock(e){
		this.props.onInStock(e.target.checked);
	}

	render() {
		return (<div className="search-box">
				<p><input type="text" placeholder="Search..." value={this.props.value} onChange={this.props.onChange} /></p>
				<p><input type="checkbox" id="showPro" onChange={this.handleStock}/>
				<label htmlFor="#showPro">Only show products in stock</label></p>
			</div>);
	}
}
export default SearchInput;
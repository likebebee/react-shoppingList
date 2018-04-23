import React, {Component}from 'react';
import ReactDom from 'react-dom';
import SearchInput from './components/searchInput';
import ProductList from './components/ProductsList';

class ShoppingList extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleStock = this.handleStock.bind(this);
		let slist = [
		  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
		  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
		  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
		  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
		  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
		  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
		];
		this.state = {
			list: slist,
			showStock: false,
			value: ''
		}
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	handleStock(checked){
		this.setState({
			showStock: checked
		});
	}

	render() {
		return <div>
			<SearchInput onChange={this.handleChange} onInStock={this.handleStock}/>
			<ProductList filterT={this.state.value} list={this.state.list} showStock={this.state.showStock} />
			</div>
	}
}

ReactDom.render(
	<ShoppingList />,
	document.getElementById("root")
)
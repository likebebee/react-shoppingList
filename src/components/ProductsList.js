import React, {Component} from 'react';
 
function TableTitle(props) {
	return <tr style={{fontWeight:'bold'}}><td colSpan='2'>{props.name}</td></tr>;
}

class ProductList extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		let slist = this.props.list;
		let trArr = [];
		let lastC = null;
		let ft = this.props.filterT.toLowerCase();
		let stocked =this.props.showStock;
		trArr.push(<tr style={{fontWeight:'bold'}}><td>Name</td><td>Price</td></tr>);
		slist.map(function(item, i){
			if (item.category != lastC) {
				trArr.push(<TableTitle  name={item.category} />);
				lastC = item.category;
			}
			if(stocked&&item.stocked){
				return ;
			}
			if(item.name.toLowerCase().indexOf(ft)==-1){
				return ;
			}
			trArr.push(<tr><td>{item.name}</td><td>{item.price}</td></tr>);		
		});
		let str = <div>
					<table>
						<tbody>
							{trArr}
						</tbody>
					</table>
				</div>;
		
		return str;
	}
}

export default ProductList;
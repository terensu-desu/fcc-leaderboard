import React, { Component } from 'react'

class Table extends Component{
	mapData(filter) {
		const imgStyle = {
			height: "40px",
			width: "40px",
			marginRight: "15px"
		}
		const dataMap = filter.map((info, i) => {
			return (
				<tr id={ i }>
					<td className="center">{ i }</td>
					<td>{ info.username }<img className="left user-img" alt="user-img" style={ imgStyle } src={ info.img } /></td>
					<td className="center">{ info.recent }</td>
					<td className="center">{ info.alltime }</td>
				</tr>
			)
		})
		return dataMap
	}
	
	displayData() {
		if(this.props.view){
			return this.mapData(this.props.recentData)
		} else {
			return this.mapData(this.props.allTimeData)
		}
	}	
	
	render() {
		const view = this.props.view
		return (
			<table className="bordered">
				<tbody>
					<tr>
						<td className="center">#</td>
						<td>Name</td>
						<td className="center"><a className={ view ? "active" : "" + " sort-btn"} onClick={ this.props.recentSort }>Points in the last 30 days<i className="material-icons md-30">sort</i></a></td>
						<td className="center"><a className={ view ? "" : "active" + " sort-btn"} onClick={ this.props.allTimeSort }>All time points<i className="material-icons md-30">sort</i></a></td>
					</tr>
					{ this.displayData() }
				</tbody>
			</table>
		)
	}
}

export default Table
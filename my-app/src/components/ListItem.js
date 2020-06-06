import React,{Component} from 'react';
class ListItem extends Component{
    render(){
        return(
            <div className='ListItem'>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Company</td>
                            <td>Contact</td>
                            <td>Country</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.company}</td>
                            <td>{this.props.contact}</td>
                            <td>{this.props.country}</td>
                        </tr>

                    </tbody>
                </table>

            </div>
        );
    }
}
export default ListItem;
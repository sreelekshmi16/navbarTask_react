import React, { Component, Fragment } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Input, Table } from 'reactstrap';

import SearchComponent from "../../Components/searchComponent"

class Student extends Component {


    state ={
        searchList: [],
        tablelist: []
    }

   componentDidMount(){
       const{tablelist} = this.props;
       this.setState({
           searchList:tablelist
       })
   }

    // componentDidUpdate = (prevProps) => {
    //     const {tablelist, searchList } = this.props;

       
    //     if (this.props !== prevProps) {
    //         this.setState({
    //         tablelist,
    //         searchList
    //         })
    //     }
    // }


    searchHandler = (event) => {

        const value = event.target.value
        console.log("chechk search", value)
        const { tablelist } = this.props;
        //const {tableliat} = this.state can be used in the case of componentDidupdate function,it has talelist in the state of component
        const searchItem = tablelist.filter(item => {
            // console.log("dccdffff",item)
            const result = item.firstName + ' ' + item.lastName;
            return result.toLowerCase().includes(value.toLowerCase())

        })
        console.log("searchItem", searchItem)
        this.setState({
            input: value,
            searchList: searchItem
        })
    }



 
    renderSearchList = () => (
        <SearchComponent
            searchHandler={this.searchHandler}
        />
    );

    renderTableList = () => {
        const { searchList } = this.state;
        return (
            <Table>
                <thead>
                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {searchList.map(item =>
                   
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.firstName + ' ' + item.lastName}</td>
                            <td>{item.Age}</td>
                        </tr>
                    )}

                </tbody>
            </Table>
        )
    }


    render() {
        const { searchList, tablelist, searchHandler } = this.props;
console.log("this.state=============", this.state)

        return (
            <Fragment>
                {this.renderSearchList()}
                <Row>
                    <Col sm="6">
                        {this.renderTableList()}

                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default Student;
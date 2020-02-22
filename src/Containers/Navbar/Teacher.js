import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SearchComponent from "../../Components/searchComponent"

class Teacher extends Component {

    state ={
        searchname: [],
    }

    componentDidMount () {
        console.log('this.state', this.state)
        const { list } = this.props;
        this.setState({
            searchname: list
        })
    }

   

    searchHandler = (event) => {

        const value = event.target.value
        const { list } = this.props;
        const searchItem = list.filter(item => {
            console.log('item', item)
           console.log("item name",item)
            return item.name.toLowerCase().includes(value.toLowerCase())

        })
        console.log("searchItem", searchItem)
        this.setState({
            input: value,
            searchname: searchItem
        })
    }


    renderSearchBox = () => (
        <SearchComponent
        searchHandler = {this.searchHandler}/>
    );

    render () {
        console.log("this.state=============", this.state)
        const { searchname } = this.state;
        console.log('this.props', this.props);
        return (
            <div>

   {this.renderSearchBox()}
            
            <Row>
                <Col sm="12">
                
                  {searchname && searchname.length > 0 && searchname.map(item => <li key={item.id}> {item.name}</li>
                  )}

                </Col>
              </Row>
              </div>
        )
    }
}
export default Teacher;
import React, { Component, Fragment } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Input, Table } from 'reactstrap';
import classnames from 'classnames';
import  SearchComponent from '../../Components/searchComponent'
import Teacher from "./Teacher"
import Student from "./Student"
// import './App.css';

const list = [{
  id: 1,
  name: "anu11"
},
{
  id: 2,
  name: "arya"
},
{
  id: 3,
  name: "dhanu"
},
{
  id: 4,
  name: "gowri"
}]
const tablelist = [{ id: 1, firstName: "anu", lastName: "rahul", Age: "20" },
{ id: 2, firstName: "Banu", lastName: "athul", Age: "22" },
{ id: 3, firstName: "chinnu", lastName: "nakul", Age: "24" },
{ id: 4, firstName: "Divin", lastName: "kumar", Age: "26" },
{ id: 5, firstName: "Emil", lastName: "pradeep", Age: "29" },
{ id: 6, firstName: "Gowri", lastName: "rajesh", Age: "23" },
{ id: 7, firstName: "Prithvi", lastName: "sudeep", Age: "26" },
{ id: 8, firstName: "Rohan", lastName: "John", Age: "22" }]



class App extends Component {

  state = {
    activeTab: '1',
    list: list,
    input: '',
    // searchList: tablelist,
    tablelist: tablelist,
    // searchname :list
  }


  toggle = (tab) => {
    const { activeTab } = this.state
    if (activeTab !== tab)
      this.setState({
        activeTab: tab
      })
  }

  // searchHandler=(event)=>{
   
  //   const value = event.target.value
  //   console.log("chechk search",value)
  //   const {tablelist} = this.state;
  //  const searchItem = tablelist.filter(item=>
  //   {const result = item.firstName +' '+item.lastName;
  //   return result.toLowerCase().includes(value.toLowerCase())
    
  //  })
  //  console.log("searchItem",searchItem)
  //  this.setState({
  //   input:value,
  //   searchList:searchItem
  //  })
  // }
  


renderNavBar = () => (
  <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1') }}
              >
                Teachers
          </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2') }}
              >
                Student
          </NavLink>
            </NavItem>
          </Nav>
)

renderTabContents = () => (
  <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Teacher 
              list ={this.state.list}
              // searchname ={this.state.searchname}
              />
            </TabPane>
            <TabPane tabId="2">
            <Student
            searchList={this.state.searchList}
            searchHandler ={this.searchHandler}
            
            tablelist = {this.state.tablelist}/>
           
            </TabPane>
          </TabContent>
)

  render() {

    return (


      <Fragment>
        <div>
          {this.renderNavBar()}
          {this.renderTabContents()}
        </div>
      </Fragment>


    );
  }
}

export default App;

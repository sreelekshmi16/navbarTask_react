import React from 'react';

import { Button, Form, FormGroup, Label, Input,Col } from 'reactstrap';
const searchItem =props=>{
    const{input,searchClickHandler,searchHandler} = props;
return(
    <Col md={6}>
    <Form inline>

    <FormGroup className="mr-sm-12">
        {/* <Label for="search" className="mr-sm-2">Password</Label> */}
        <Input type="text" name="" id="" placeholder="type here!!" value={input} onChange={searchHandler}/>
        <Button onClick={e=> searchClickHandler(e)}>Search</Button>
      </FormGroup>
     
    </Form>
    </Col>
);
}

export default searchItem;
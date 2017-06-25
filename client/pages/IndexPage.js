import React, { Component } from 'react';



export default class Home extends Component {

  testCrsf(){
    rest({
      method : 'POST',
      path: '/test/csrf'
    }).then(res=>{
      alert('Successful!');
    }).catch(res=>{
      alert('Something went wrong!');
    });
  }

  render() {
    return (
      <div>
        <button  onClick={this.testCrsf} className='btn btn-default'>Test CSRF</button>
      </div>
    );
  }
}

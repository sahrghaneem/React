import React from "react";


  
class Check extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }
  
 Chekedclick = ()=> {

  document.querySelector('#checkbox3').this.state.checked = true;
  document.querySelector('#checkbox4').this.state.checked = true;

}
render(){
  return(
    
    <div className='check'>
    
    Mockup:
    
    <div className='checkbox'><input type="checkbox" id="checkbox1" value="a"/>
    <label htmlFor="checkbox1" >I read the term of the app</label> </div>
    
    <div><input type="checkbox" id="checkbox2" value="b"/>
    <label htmlFor="checkbox2" >I accept the term of the app</label></div>
    
    <div><input type="checkbox" id="checkbox3" value="c" defaultChecked={!this.state.checked}/>
    <label htmlFor="checkbox3" >I want to get the weekly news letter</label></div>
        
    <div><input type="checkbox" id="checkbox4" value="d" defaultChecked={!this.state.checked}/>
    <label htmlFor="checkbox4" >I want to get sales and offers</label></div>
     
    </div>
  )
}
}
export default Check;

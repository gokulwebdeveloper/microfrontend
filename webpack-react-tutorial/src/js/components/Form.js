import React, { Component,Fragment } from "react";
import ReactDOM from "react-dom";
//import '../../css/form.css';
//import '../../scss/form.scss';

const styles = {
  heading: {
    color: '#000',
    textAlign: 'center',
    marginBottom: 15,
  },
  logo: {
    width: 250,
    heading: 250,
    objectFit: 'cover',
  },
};

 class Form extends Component{
    constructor(props){
      super(props);
      this.loadJs = this.loadJs.bind(this);
    }

   loadJs(url){
    console.log(url);
      var addScript = document.createElement('script');
          addScript.setAttribute('src',url);
        document.getElementsByTagName("head")[0].appendChild(addScript);
   }

   render(){
    return(
           <Fragment>
             <div>
                <a href="#" onClick={() => this.loadJs('http://localhost:8082/main.js')}> Menu one </a> 
                <a href="#" onClick={() => this.loadJs('http://localhost:8081/main.js')}> Menu two </a> 
             </div>
                    <div class="cont" id="container2">
                      test
                    </div>
     </Fragment>
    )

   }
 }




export default Form;
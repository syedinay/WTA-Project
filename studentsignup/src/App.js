import React,{Component} from "react";
import './App.css';


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const regNumber = RegExp(/^\d[a-zA-Z]\w{1}\d{2}[a-zA-Z]\w{1}\d{3}$/
  );

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });


  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};  

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      Name:null,
      email:null,
      password:null,
      formErrors:{
        Name:" ",
        USN:" ",
        email:" ",
        password:" "
      }
    };  
  }
  
  handleSubmit=e=>{
    e.preventDefault();

    if(formValid(this.state)){
      console.log(`
      --SUBMITTING--
      NAME:${this.state.name}
      USN:${this.state.USN}
      EMAIL:${this.state.email}
      PASSWORD:${this.state.password}
      `); 
    }
    else{
      console.error("Form Invalid");
    }
  };    
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "Name":
        formErrors.Name =
          value.length < 3 ? "Minimum 3 characaters required" : "";
        break;
       case "USN":
        formErrors.USN = regNumber.test(value)
          ? ""
          : "Invalid USN";
        break; 

      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "password":
        formErrors.password = 
          value.length < 6 ? "Minimum 6 characaters required " : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render(){
    const{formErrors}  =this.state;
    const handleKeyDown = e => {
      if (e.key === " "){
          e.preventDefault();
      }
      };
    return (
    
    <div className="wrapper">
     <div className="form-wrapper">
       <h1> Create A Student Account</h1>
       <form onSubmit={this.handleSubmit}>
         <div className="Name">
           <label htmlFor="Name">Name</label>
           <input 
          className={formErrors.Name.length > 0 ? "error" : null}    
          placeholder="Enter Name" 
           type="text" 
           name="Name"  
           noValidate
           onChange={this.handleChange} />
          {formErrors.Name.length > 0 && (
                <span className="errorMessage">{formErrors.Name}</span>
              )}
            </div>
        <div className="USN">
           <label htmlFor="USN">USN</label>
           <input 
          className={formErrors.USN.length > 0 ? "error" : null}    
          placeholder="Enter USN" 
           type="text" 
           name="USN" 
           onKeyDown={handleKeyDown}  
           noValidate
           onChange={this.handleChange} />
          {formErrors.USN.length > 0 && (
                <span className="errorMessage">{formErrors.Name}</span>
              )}
        </div>  
         <div className="email">
           <label htmlFor="email">Email ID</label>
           <input 
           className={formErrors.email.length>0?"error":null}
           placeholder="Enter Email-ID" 
           type="email" 
           name="email"    
           noValidate
           onChange={this.handleChange}/>
           {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            
         </div>
         <div className="password">
           <label htmlFor="password">Password</label>
           <input    
           className={formErrors.password.length>0?"error":null}
           placeholder="Enter Password" 
           type="password" 
           name="password" 
           onKeyDown={handleKeyDown} 
           onChange={this.handleChange} />
           {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
         </div>
         <div className="createAccount">
           <button type="submit">
             Create Account   
           </button>
         </div>
       </form>
     </div>
    </div>  
  );
}
}

export default App;

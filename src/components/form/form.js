import React from "react";
import "./style.css";

function Form () {
    return (

<div className="container col-md-6 ml-5 mt-5 mr-5 pt-3 pl-5 pr-5 pb-3" style={{backgroundColor:"rgba(23, 75, 78, 0.46)"}}>
    <div className="controls" >
    
        <div className="row">
            <h1>Contact</h1>
        </div>
        <div className="row">
            <p className="underline"></p>
        </div>
        
        <div className="row">
            <div className="col-md-9">
                <div className="form-group">
                    <label for="form_name">Name </label>
                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Name" required="required" data-error="Firstname is required." />
                    <div className="help-block with-errors"></div>
                </div>
            </div>
        </div>
        
        <div className="row">
            <div className="col-md-9">
                <div className="form-group">
                    <label for="form_email">Email</label>
                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                    <div className="help-block with-errors"></div>
                </div>
            </div>
        </div>
        
        <div className="row">
             <div className="col-md-9">
                <div className="form-group">
                    <label for="form_message">Message</label>
                    <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                    <div className="help-block with-errors"></div>
                </div>
            </div>
        </div>
        
        <div className="row">
            <div className="col-md-4">
                <button type="submit" className="btn btn-info btn-send btn-lg" id="submit" value="Submit">Submit</button>
            </div>
        </div>
    </div>  
 </div>      
    )
}

export default Form;
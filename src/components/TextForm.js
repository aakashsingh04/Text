import React, { useState, useEffect } from "react";
import { useTheme } from '../ThemeContext'; // Import the useTheme hook
import Alert from "./Alert";

function TextForm(props) {
    const [text, setText] = useState("");
    const { mode, themeChange } = useTheme(); // Access mode and themeChange from context
    const [alert, setAlert] = useState(null)
    
    // Handle input text change
    function handleChange(event) {
        setText(event.target.value);
    }

    // Show alert function
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });

        // Hide alert after 2 seconds
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    // Convert text to uppercase
    function handleUpperClick() {
        setText(text.toUpperCase());
        showAlert("Converted to Uppercase", "success");
    }

    // Convert text to lowercase
    function handleLowerClick() {
        setText(text.toLowerCase());
        showAlert("Converted to Lowercase", "success");
    }

    // Clear the input text
    function handleClearText() {
        setText("");
        showAlert("Text Cleared", "success");
    }

    // Remove extra spaces from the text
    function handleExtraSpace() {
        let newText = text.split(/[ ]+/); // Split by multiple spaces
        setText(newText.join(" ")); // Join by single space
        showAlert("Extra Spaces Removed", "success");
    }

    // Update the background color when the mode changes
    useEffect(() => {
        themeChange(); // Calls the themeChange function from context to update background color
    }, [mode, themeChange]); // Only trigger when mode changes

    // Set styles based on current mode (light/dark)
    const inputStyles = {
        backgroundColor: mode === 'light' ? 'white' : '#2c2c2c',
        color: mode === 'light' ? 'black' : 'white',
    };

    // Render the component
    return (
        <>
            <Alert alert={alert} /> {/* Pass alert to Alert component */}

            <div className="form-group container" style={{color: mode === 'light' ? 'black' : 'white'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea 
                        value={text} 
                        onChange={handleChange} 
                        style={inputStyles}
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="8"
                    ></textarea>
                </div>
                <button type="button" className="btn btn-dark mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-dark mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button type="button" className="btn btn-dark mx-1" onClick={handleClearText}>Clear Text</button>
                <button type="button" className="btn btn-dark mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>

            <div className="container my-3" style={{color: mode === 'light' ? 'black' : 'white'}}>
                <h3>Your Text Summary</h3>
                <p>{text.trim().split(" ").length} words and {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text.length !== 0 ? text : 'Please Enter the text to preview'}</p>
            </div>

            {/* Buttons to change theme */}
            <div className="container my-3">
                <button onClick={() => themeChange('green')} className="btn btn-success mx-1">Green Theme</button>
                <button onClick={() => themeChange('red')} className="btn btn-danger mx-1">Red Theme</button>
                <button onClick={() => themeChange('default')} className="btn btn-primary mx-1">Default Theme</button>
            </div>
        </>
    );
}

export default TextForm;

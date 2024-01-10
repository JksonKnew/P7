import './folding.scss'
import React, { useState } from "react";



function Folding(props) {

    const [isListVisible, setIsListVisible] = useState(false);

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    };

    return (<React.Fragment>
        <div className='foldingContent' onClick={toggleListVisibility}>
        <button className='buttonFolding'>{props.title}
        <svg className={`${isListVisible ? 'rotate' : ''}`} xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path opacity="1" fill="#FFFFFF" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
        </button>
        {isListVisible && (
        <div className='foldingListContainer'>
            <ul>
                {props.content.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        )}
        </div>
        </React.Fragment>)
}

export default Folding
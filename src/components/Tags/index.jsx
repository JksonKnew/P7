import React from "react";
import '/src/components/Tags/tags.scss'


function Tags(props) {
    return (
            <span className="tag">{props.tag}</span>
    );
}

export default Tags;
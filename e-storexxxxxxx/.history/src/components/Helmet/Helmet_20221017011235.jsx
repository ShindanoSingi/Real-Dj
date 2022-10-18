import React from "react";

const Helmet = props => {
    document.title = "LydiaStore -" + props.title;
    return <div>Helmet</div>;
};

export default Helmet;

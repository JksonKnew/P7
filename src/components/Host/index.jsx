import React from "react";
import '/src/components/Host/host.scss'

function Host(props) {

    const convertirAvecRetourALaLigne = (texte) => {
      return texte.replace(/\s/g, '\n');
    };

    return (
      <React.Fragment>
        <article className="hostContainer">
          <div className="hostName">
            <pre>{convertirAvecRetourALaLigne(props.name)}</pre>
          </div>
          <div className="hostPicture">
            <img src={props.hostPicture} alt={props.name} />
          </div>
        </article>
      </React.Fragment>
    );
}

export default Host;

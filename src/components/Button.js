import React from "react";

function Button({ text, buttonClic, clicManager }) {
  return (
    <button
      className={buttonClic ? 'button-clic' : 'button-restart'}
      onClick={clicManager}>
      {text}
    </button>
  );
}

export default Button;
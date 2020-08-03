import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/42686542?s=460&u=fca102a5a4c2da366f4015e975f7b1e7f3ef0733&v=4"
          alt="Alice Francener"
        />
        <div>
          <strong>Alice Francener</strong>
          <span>Biologia</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> <br />
        Suspendisse potenti. Curabitur aliquam pellentesque elit, in fringilla
        mauris aliquet et. Suspendisse iaculis a lectus in blandit. Praesent
        efficitur sodales ipsum, quis bibendum ante vulputate id.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;

import { useState } from "react";
import Form from "../form/form";
import NumbersLine from "../numbers_line/numbers_line";
import "./form_card.css";

function FormCard() {
  const [isNumberlineVisible, setIsNumberlineVisible] = useState(false);

  const [isAdleLogoVisible, setIsAdleLogoVisible] = useState(true);
  return (
    <div className="card">
      <div
        className="aadl-logo-1"
        style={isAdleLogoVisible ? { display: "block" } : { display: "none" }}
      ></div>
      <NumbersLine appear={isNumberlineVisible}></NumbersLine>
      <Form
        pageNumber={1}
        hide_show_numberLine={setIsNumberlineVisible}
        setIsAdleLogoVisible={setIsAdleLogoVisible}
      ></Form>
    </div>
  );
}

export default FormCard;

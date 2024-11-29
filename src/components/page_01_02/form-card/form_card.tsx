import { useState } from "react";
import Form from "../form/form";
import NumbersLine from "../numbers_line/numbers_line";
import "./form_card.css";

function FormCard() {
  const [isNumberlineVisible, setIsNumberlineVisible] = useState(false);
  return (
    <div className="card">
      <div className="aadl-logo-1"></div>
      <NumbersLine appear={isNumberlineVisible}></NumbersLine>
      <Form pageNumber={1} hide_show_numberLine={setIsNumberlineVisible}></Form>
    </div>
  );
}

export default FormCard;

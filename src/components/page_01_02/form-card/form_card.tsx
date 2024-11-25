import Form from "../form/form";
import NumbersLine from "../numbers_line/numbers_line";
import "./form_card.css";

function FormCard() {
  return (
    <div className="card">
      <div className="aadl-logo-1"></div>
      <NumbersLine></NumbersLine>
      <Form pageNumber={2}> </Form>
    </div>
  );
}

export default FormCard;

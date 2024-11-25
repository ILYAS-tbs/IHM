import "./form.css";
import { useState } from "react";

// ! this contains both the form and the buttons for submission

interface FormInterface {
  pageNumber: number;
}

function Form(props: FormInterface) {
  const [phoneNumber, setPhoneNumber] = useState<String>("");

  const [selectedWilaya, setSelectedWilaya] = useState("ولاية الإقامة");

  const [NIN, setNIN] = useState("");
  const [NSS, setNSS] = useState("");

  const wilayas = [
    { number: 1, name: "Adrar" },
    { number: 2, name: "Chlef" },
    { number: 3, name: "Laghouat" },
    { number: 4, name: "Oum El Bouaghi" },
    { number: 5, name: "Batna" },
    { number: 6, name: "Béjaïa" },
    { number: 7, name: "Biskra" },
    { number: 8, name: "Béchar" },
    { number: 9, name: "Blida" },
    { number: 10, name: "Bouira" },
    { number: 11, name: "Tamanghasset" },
    { number: 12, name: "Tébessa" },
    { number: 13, name: "Tiaret" },
    { number: 14, name: "Tizi Ouzou" },
    { number: 15, name: "Algiers" },
    { number: 16, name: "Djelfa" },
    { number: 17, name: "Jijel" },
    { number: 18, name: "Setif" },
    { number: 19, name: "Saïda" },
    { number: 20, name: "Skikda" },
    { number: 21, name: "Sidi Bel Abbes" },
    { number: 22, name: "Tlemcen" },
    { number: 23, name: "Tiaret" },
    { number: 24, name: "Tizi Ouzou" },
    { number: 25, name: "El Oued" },
    { number: 26, name: "Khenchela" },
    { number: 27, name: "M’Sila" },
    { number: 28, name: "Mascara" },
    { number: 29, name: "Mostaganem" },
    { number: 30, name: "Médéa" },
    { number: 31, name: "Mila" },
    { number: 32, name: "Ain Defla" },
    { number: 33, name: "Naama" },
    { number: 34, name: "Oran" },
    { number: 35, name: "El Bayadh" },
    { number: 36, name: "Illizi" },
    { number: 37, name: "Bordj Bou Arréridj" },
    { number: 38, name: "Boumerdès" },
    { number: 39, name: "El Tarf" },
    { number: 40, name: "Tindouf" },
    { number: 41, name: "Tissemsilt" },
    { number: 42, name: "Ghardaïa" },
    { number: 43, name: "Relizane" },
    { number: 44, name: "Annaba" },
    { number: 45, name: "Béjaïa" },
    { number: 46, name: "Tlemcen" },
  ];
  const handleChange = (event: any) => {
    setSelectedWilaya(event.target.value);
  };
  const handlePhoneNumberChange = (event: any) => {
    setPhoneNumber(event.target.value); // Update the state with the input value
  };

  const handleNINchange = (event: any) => {
    setNIN(event.target.value); // Update the state with the input value
  };
  const handleNSSchange = (event: any) => {
    setNSS(event.target.value); // Update the state with the input value
  };

  // ! page 01 :
  if (props.pageNumber == 1) {
    return (
      <div className="form-container">
        {/* ! spaing  */}
        <div className="spacer"></div>
        {/* the fields */}
        {/* PHONE NUMBER */}
        <h1 className="field-text">رقم الهاتف النقال</h1>
        <input
          className="phone-input-field"
          type="text"
          placeholder="+213558851622"
          value={phoneNumber.toString()}
          onChange={handlePhoneNumberChange}
        />
        {/* WILIAYA */}
        {/* WILIAYA */}
        <div className="spacer"></div>
        <h1 className="field-text">قم بتحديد ولاية الإقامة</h1>
        <div className="spacer"></div>
        {/* DROP DOWN */}
        <div className="input-container">
          <select
            id="wilayas"
            value={selectedWilaya}
            onChange={handleChange}
            className="wilayas-dropdown"
          >
            <option value="" disabled>
              {selectedWilaya ? `ولاية - ${selectedWilaya}` : "ولاية"}
            </option>
            {wilayas.map((wilaya) => (
              <option key={wilaya.number} value={wilaya.name}>
                {wilaya.number} - {wilaya.name}
              </option>
            ))}
          </select>
        </div>
        {/* SUBMIT BUTTONS  */}
        <div className="buttons-container">
          <button id="cancel-txt">إلغاء </button>
          <button id="continue-button">متابعة</button>
        </div>
      </div>
    );

    // ! page 02 :
  } else if (props.pageNumber == 2) {
    return (
      <div className="form-container">
        {/* ! spaing  */}
        <div className="spacer"></div>
        {/* the fields */}
        {/* PHONE NUMBER */}
        <h1 className="field-text"> رقم التعريف الوطني - NIN </h1>
        <input
          className="phone-input-field"
          type="text"
          placeholder="NIN"
          value={NIN.toString()}
          onChange={handleNINchange}
        />
        {/* WILIAYA */}
        {/* WILIAYA */}
        <div className="spacer"></div>
        <div className="spacer"></div>

        <h1 className="field-text"> رقم الضمان الإجتماعي- NSS</h1>
        <input
          className="phone-input-field"
          type="text"
          placeholder="NSS"
          value={NSS.toString()}
          onChange={handleNSSchange}
        />

        {/* SUBMIT BUTTONS  */}
        <div className="buttons-container">
          <button id="cancel-txt">إلغاء </button>
          <button id="continue-button">متابعة</button>
        </div>
      </div>
    );
  }
}

export default Form;

import { useState } from "react";
import "./dropdownstyles.css";

const Dropdown = ({
  dropDownText,
  children,
}: {
  dropDownText: string;
  children: any;
}) => {
  const [show, setShow] = useState(false);

  const toggleDropdown = (event: React.MouseEvent) => {
    event.preventDefault();
    setShow(!show);
  };
  return (
    <div>
      <a className="dropdown-header" href="#" onClick={toggleDropdown}>
        <svg
          className={show ? "rotate" : ""}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="16"
          height="16"
        >
          <path
            d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
            fill="#b7410e"
          />
        </svg>

        {dropDownText}
      </a>
      <div className={`dropdown-content-box  ${show ? "show" : ""}`}>
        <div className="dropdown-inner-content">{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;

import React, { useState } from "react";
import Modal from "./Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};
const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

const Portal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={()=> setIsOpen(true)}>
          Open Modal
          </button>
      </div>
      <Modal open={isOpen} onClose={()=> setIsOpen(false)} >
        Fancy Modal
        </Modal>

      <div style={OTHER_CONTENT_STYLES}>
        Other Content
        </div>
    </>
  );
};

export default Portal;

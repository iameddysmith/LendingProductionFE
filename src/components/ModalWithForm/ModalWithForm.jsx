import React, { forwardRef } from "react";
import { Modal } from "../Modal/Modal";
import "./ModalWithForm.css";

const ModalWithForm = forwardRef(
  (
    {
      modalTitle = "Add/Edit Employee",
      buttonText = "Save",
      secondaryButtonText = "Cancel",
      isOpen,
      onClose,
      onSubmit,
      isValid = true,
      children,
    },
    ref
  ) => {
    return (
      <Modal name="form-modal" isOpen={isOpen} onClose={onClose}>
        <div className="modal__content">
          <h2 className="modal__title">{modalTitle}</h2>
          <form className="modal__form" onSubmit={onSubmit} ref={ref}>
            {children}
            <div className="modal__button-group">
              <button
                type="submit"
                className="modal__save-button"
                disabled={!isValid}
              >
                {buttonText}
              </button>
              <button
                type="button"
                className="modal__secondary-button"
                onClick={onClose}
              >
                {secondaryButtonText}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
);

export default ModalWithForm;

import React, { useEffect } from "react";
import "./Modal.css";

export const Modal = ({ name, isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal ${isOpen ? "modal_open" : ""}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal__container">
        {children}
        <button
          className="modal__close-btn"
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          {/* Use SVG if available, fallback to 'X' */}
          <span className="modal__close-icon">
            {typeof window !== "undefined" &&
            document.querySelector("img[src*='closeX_btn.svg']") ? (
              <img src="../../assets/closeX_btn.svg" alt="Close" />
            ) : (
              ""
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

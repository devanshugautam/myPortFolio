/* eslint-disable react/prop-types */
// import React from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;
  console.log(`children`, children);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-60" onClick={closeModal}></div>
      <div className="bg-tertiary p-2 rounded-lg shadow-lg z-10 group mt-[100px]">
        {children}
        <div className="flex flex-col items-end">
          <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 ali" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import {useState} from "react";
import Modal from "../Modal/Modal";

const Buttons = () => {
  const [showModal, setShowModal] = useState(false);

  const close = () => {
    return setShowModal(false);
  };

  return (
    <>
      <div className="position-relative d-flex justify-content-center mt-5">
        <button type="button" className="btn btn-primary btn-lg" onClick={() => setShowModal(true)}>This is modal button
        </button>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className="modal-header">
          <h1 className="modal-title fs-5">Some kind of title</h1>
          <button type="button" className="btn-close" onClick={close}></button>
        </div>
        <div className="modal-body">
          This is modal content
        </div>
        <div className='modal-footer'>
          <button type='button' className='btn btn-danger' onClick={close}>Cancel</button>
        </div>
      </Modal>
    </>
  );
};

export default Buttons;
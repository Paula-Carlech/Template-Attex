import React, { useState } from 'react'
// import { useComposeMail } from './hooks';
import { Button, Modal } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ComposeMailProps {
  isModalOpen: boolean;
  toggleComposeModal: () => void;
};

const ComposeEmail = ({ isModalOpen, toggleComposeModal }: ComposeMailProps) => {

  const [editorValue, setEditorValue] = useState<string>(`
  <h3>This is a simple editable area.</h3>
  <p>
    End of simple area
  </p>`
  );

  // const {
  //   // editorState,
  //   schemaResolver,
  //   // handleEmailSave,
  //   //  onEditorStateChange 
  // } = useComposeMail(toggleComposeModal);

  return (
    <Modal show={isModalOpen} onHide={toggleComposeModal} role="dialog">
      <Modal.Header className="modal-colored-header bg-primary">
        <h4 className="modal-title" id="compose-header-modalLabel">New Message</h4>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </Modal.Header>
      <div className="p-1">
        <Modal.Body className="px-3 pt-3 pb-4">
          <form>
            <div className="mb-2">
              <label htmlFor="msgto" className="form-label">To</label>
              <input type="text" id="msgto" className="form-control" placeholder="Example@email.com" />
            </div>
            <div className="mb-2">
              <label htmlFor="mailsubject" className="form-label">Subject</label>
              <input type="text" id="mailsubject" className="form-control" placeholder="Your subject" />
            </div>
            <div className="write-mdg-box mb-3">
              <label className="form-label">Message</label>
              <ReactQuill
                theme='snow'
                value={editorValue}
                onChange={setEditorValue}
                style={{ height: 200 }}
                modules={{
                  toolbar: {
                    container: [
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'color': [] }],
                      ['blockquote', 'code-block'],
                      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                      ['link', 'image', 'video'],
                    ]
                  }
                }}
              />
            </div>
          </form>
        </Modal.Body>
        <div className="px-3 pb-3 d-flex flex-wrap gap-1">
          <Button variant='primary' type="submit">
            <i className="ri-send-plane-2-line me-1" />
            Send Message
          </Button>
          <Button variant='light' onClick={toggleComposeModal}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal >
  );
}

export default ComposeEmail
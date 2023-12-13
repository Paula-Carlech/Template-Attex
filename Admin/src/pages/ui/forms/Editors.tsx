import ReactQuill from 'react-quill';
import { Card, Col, ListGroup, Row } from 'react-bootstrap'

// component
import PageBreadcrumb from '../../../components/PageBreadcrumb'
import PageTitle from '../../../components/PageTitle'

// styles
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

const Editors = () => {
  let valueBubble = ''
  let valueSnow = ''
  valueSnow = valueBubble = `<h3><span class="ql-size-large">Hello World!</span></h3>
  <p><br/></p>
  <h3>This is an simple editable area.</h3>
  <p><br/></p>
  <ul>
    <li>Select a text to reveal the toolbar.</li>
    <li>Edit rich document on-the-fly, so elastic!</li>
  </ul>
  <p><br/></p>
  <p>End of simple area</p>`

  const modules = {
    toolbar: [
      [{ font: [] }, { size: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ script: "super" }, { script: "sub" }],
      [{ header: [false, 1, 2, 3, 4, 5, 6] }, "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["direction", { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ]
  }

  return (
    <>
      <PageTitle pageTitle='Editors' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Forms', path: '/ui/forms/editors' },
          { label: "Editors", path: "/ui/forms/editors", active: true },
        ]}
        title={"Editors"}
      />
      <Row>
        <Col>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <div className="mb-2">
                  <h4 className="header-title mt-2">Quill Editor</h4>
                  <p className="text-muted fs-14">Snow is a clean, flat toolbar theme.</p>
                  <ReactQuill modules={modules} defaultValue={valueSnow} theme="snow" style={{ height: 300 }} className='pb-4' />
                </div>
              </ListGroup.Item>

              <ListGroup.Item className="list-group-item">
                <div className="mb-2">
                  <h5 className="mb-1">Bubble Editor</h5>
                  <p className="text-muted fs-14">Bubble is a simple tooltip based theme.</p>
                  <ReactQuill defaultValue={valueBubble} theme="bubble" style={{ height: 300 }} className='pb-4' />
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Editors
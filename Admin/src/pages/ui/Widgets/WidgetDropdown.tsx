import { Dropdown } from 'react-bootstrap';

const WidgetDropdown = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant='no' className="dropdown-toggle arrow-none card-drop">
                    <i className="ri-more-2-fill"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as="a" href="#">Settings</Dropdown.Item>
                    <Dropdown.Item as="a" href="#">Action</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default WidgetDropdown
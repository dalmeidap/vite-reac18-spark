import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Modal, Dropdown } from 'octane-common-ui';

function App() {
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    console.log('opening Modal');
    setOpenModal(true);
  };

  const btnDropdown = (
    <Button variant="primaryOutlined" endIcon="uiArrowExpand">
      Open Dropdown
    </Button>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite2 + React!</p>

        <Button variant="secondaryOutlined" endIcon="uiPlus" onClick={handleOpenModal}>
          Open Modal
        </Button>

        <br />

        {/* DROPDOWN EXAMPLE */}
        <Dropdown id="someId" toggle={btnDropdown}>
          <Dropdown.Group>
            <Dropdown.Item>
              <a>Link 1</a>
            </Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Group>
            <Dropdown.Item>
              <a>Link 2</a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a>Link 3</a>
            </Dropdown.Item>
          </Dropdown.Group>
        </Dropdown>

        {/* MODAL EXAMPLE */}
        <Modal title="Terms and conditions" isOpen={openModal} onClose={() => setOpenModal(false)} size="medium">
          <Modal.Body>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem debitis, corporis eum quia veritatis
              dignissimos maiores quae deserunt iure eveniet nemo vel, iste dolores fugit quisquam eius mollitia! Porro,
              molestias?
            </span>
          </Modal.Body>
          <Modal.Footer>Footer custom content</Modal.Footer>
        </Modal>
      </header>
    </div>
  );
}

export default App;

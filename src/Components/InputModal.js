import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  FormControl,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";
import "./InputModal.css";

const InputModal = () => {
  const [startDate, setStartDate] = useState(new Date());

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);

  // const clickHandler = () => {
  //   console.log("float button clicked!");
  // };
  return (
    <>
      <Button className="float-button p-5" size="lg" onClick={onOpen}>
        +
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Reading</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Date & Time</FormLabel>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy h:mm aa"
                timeIntervals={1}
                showTimeSelect
                wrapperClassName="datePicker"
              />
            </FormControl>

            <FormControl>
              <FormLabel>
                Systolic<span className="units required"> (mmHg)</span>
              </FormLabel>
              <Input placeholder="Systolic" />
            </FormControl>
            <FormControl>
              <FormLabel>
                Diastolic<span className="units required"> (mmHg)</span>
              </FormLabel>
              <Input placeholder="Diastolic" />
            </FormControl>
            <FormControl>
              <FormLabel>
                Pulse<span className="units"> (BPM)</span>
              </FormLabel>
              <Input placeholder="Pulse" />
            </FormControl>

            <Checkbox className="checkbox p-3" colorScheme="red">
              Irregular Heartbeat
            </Checkbox>

            <FormControl>
              <FormLabel>Notes</FormLabel>
              <Input placeholder="Enter remarks..." />
            </FormControl>
            <FormControl>
              <div className="index mt-2">
                <span className="star">*</span>Required fields
              </div>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button className="mr-5 save-btn" colorScheme="green">
              Save
            </Button>
            <Button className="close-btn" onClick={onClose} colorScheme="red">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default InputModal;

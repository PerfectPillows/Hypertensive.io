import React, { useState } from "react";
import { IconContext } from "react-icons";
import DatePicker from "react-datepicker";
import { AiOutlinePlus } from "react-icons/ai";

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
import "./InputModal.css";

const InputModal = (props) => {
  const [startDate, setStartDate] = useState(new Date()); //for date-picker
  const { isOpen, onOpen, onClose } = useDisclosure({
    onOpen: () => {
      setSystolic("");
      setDiastolic("");
      setPulse("");
    },
  }); //for modal
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [pulse, setPulse] = useState("");
  const [notes, setNotes] = useState("");
  const [isIrregular, setIsIrregular] = useState(false);

  const systolicChangeHandler = (event) => {
    setSystolic(event.target.value);
  };

  const diastolicChangeHandler = (event) => {
    setDiastolic(event.target.value);
  };

  const pulseChangeHandler = (event) => {
    setPulse(event.target.value);
  };
  const notesChangeHandler = (event) => {
    setNotes(event.target.value);
  };
  const heartBeatHandler = () => {
    setIsIrregular(!isIrregular);
  };

  const handleSubmit = () => {
    onClose();
    props.addReadings(createNewDataObject());
    resetReadings();
  };
  const createNewDataObject = () => {
    const newData = {
      id: props.totalReadings + 1,
      systolic: parseInt(systolic),
      diastolic: parseInt(diastolic),
      pulse: parseInt(pulse),
      date: startDate,
      notes: notes,
      irregularBeats: isIrregular,
    };

    return newData;
  };

  const resetReadings = () => {
    setSystolic("");
    setDiastolic("");
    setPulse("");
    setNotes("");
    setIsIrregular(false);
  };

  return (
    <>
      <Button className="float-button p-5" size="lg" onClick={onOpen}>
        <IconContext.Provider value={{ className: "top-react-icons" }}>
          <AiOutlinePlus size={30} color="white" />
        </IconContext.Provider>
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Reading</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MMMM d, yyyy"
                wrapperClassName="datePicker"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Time</FormLabel>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={1}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>
                Systolic<span className="units"> (mmHg)</span>
              </FormLabel>
              <Input
                placeholder="Systolic"
                type="number"
                value={systolic}
                onChange={systolicChangeHandler}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>
                Diastolic<span className="units"> (mmHg)</span>
              </FormLabel>
              <Input
                placeholder="Diastolic"
                value={diastolic}
                onChange={diastolicChangeHandler}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>
                Pulse<span className="units"> (BPM)</span>
              </FormLabel>
              <Input
                placeholder="Pulse"
                value={pulse}
                onChange={pulseChangeHandler}
              />
            </FormControl>
            <Checkbox
              value={isIrregular}
              className="checkbox"
              colorScheme="red"
              onChange={heartBeatHandler}
            >
              Irregular Heartbeat
            </Checkbox>

            <FormLabel optionalIndicator>Notes</FormLabel>
            <Input
              placeholder="Enter remarks..."
              value={notes}
              onChange={notesChangeHandler}
            />

            <FormControl>
              <div className="index mt-2">
                <span className="star">*</span>Required fields
              </div>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              className="mr-5 close-btn"
              onClick={onClose}
              colorScheme="red"
            >
              Close
            </Button>
            <Button
              className="save-btn"
              type="submit"
              colorScheme="green"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default InputModal;

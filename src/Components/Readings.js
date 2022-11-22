import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { format } from "date-fns";
import InputData from "../Data/InputData";
import InputModal from "./InputModal";
import "./InputModal.css";
import { Alert, AlertIcon } from "@chakra-ui/react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import "./Navbar.css";

const Readings = () => {
  const [readings, setReadings] = useState(InputData);
  const toast = useToast();

  const addReadings = (newReading) => {
    setReadings([...readings, newReading]);
    console.log(newReading);
    toast({
      title: "Success!",
      description: "New reading added successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <div>
      {readings.length === 0 && (
        <Alert status="warning">
          <AlertIcon />
          Seems like you do not have any readings yet!
        </Alert>
      )}
      {readings.length > 0 && (
        <div>
          <TableContainer className="p-4">
            <Table className="table" variant="unstyled" size="sm">
              <Thead className="table-head">
                <Tr>
                  <Th>Date</Th>
                  <Th>Time</Th>
                  <Th isNumeric>Systolic</Th>
                  <Th isNumeric>Diastolic</Th>
                  <Th isNumeric>Pulse</Th>
                  <Th>Irregular Heartbeat</Th>
                  <Th>Notes</Th>
                </Tr>
              </Thead>
              <Tbody>
                {readings.map((reading) => {
                  return (
                    <Tr key={reading.id}>
                      <Td>{format(reading.date, "dd/MM/yyyy")}</Td>
                      <Td>{format(reading.date, "h:mm aa")}</Td>
                      <Td isNumeric>{reading.systolic}</Td>
                      <Td isNumeric>{reading.diastolic}</Td>
                      <Td isNumeric>{reading.pulse}</Td>
                      <Td>{reading.irregularBeats ? "yes" : "no"}</Td>
                      <Td>{reading.notes}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      )}
      <InputModal totalReadings={readings.length} addReadings={addReadings} />
    </div>
  );
};
export default Readings;

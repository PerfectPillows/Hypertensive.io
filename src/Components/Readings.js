import React, { useState } from "react";
import { format } from "date-fns";
import InputData from "../Data/InputData";
import InputModal from "./InputModal";
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

  const formatDate = () => {};

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
            <Table variant="striped" colorScheme="pink">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th isNumeric>Systolic</Th>
                  <Th isNumeric>Diastolic</Th>
                  <Th isNumeric>Pulse</Th>
                  <Th>Notes</Th>
                </Tr>
              </Thead>
              <Tbody>
                {readings.map((reading) => {
                  return (
                    <Tr key={reading.id}>
                      <Td>{format(reading.date, "dd/MM/yyyy")}</Td>
                      <Td isNumeric>{reading.systolic}</Td>
                      <Td isNumeric>{reading.diastolic}</Td>
                      <Td isNumeric>75</Td>
                      <Td>Normal</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      )}
      <InputModal />
    </div>
  );
};
export default Readings;

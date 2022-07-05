import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Heading,
  Button,
  useDisclosure,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Link as RouteLink } from "react-router-dom";

import { deleteCity, getCity } from "../Redux/City-Country/action";
export const DetailsTable = () => {
  const city = useSelector((state) => state.reducerStore.city);
  const loading = useSelector((state) => state.reducerStore.loading);
  const error = useSelector((state) => state.reducerStore.error);
  const [sort, setSort] = useState("ASC");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCity({ dispatch, sort, page }));
  }, [page, sort]);
  const handleDelete = (id) => {
    dispatch(deleteCity(id));
  };

  console.log(city);
  return (
    <Box m={10}>
      <Heading as="h4" fontSize="1.5rem" m={4}>
        City-Country Table
      </Heading>
      <Button onClick={() => setSort("ASC")}>Lower Population</Button>
      <Button onClick={() => setSort("DESC")}>Higher Population</Button>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>City Name</Th>
              <Th>Population</Th>
              <Th>Country</Th>
              <Th>View Details</Th>
              <Th>Delete</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {city.map((d) => {
              return (
                <Tr key={d.id}>
                  <Td>{d.id}</Td>
                  <Td>{d.name}</Td>
                  <Td>{d.population}</Td>
                  <Td>{d.country.name}</Td>

                  <Td>
                    <RouteLink to={`city/${d.id}`}>
                      <Button colorScheme="teal" variant="outline">
                        View
                      </Button>
                    </RouteLink>
                  </Td>
                  <Td>
                    <Button
                      colorScheme="read"
                      variant="outline"
                      onClick={() => handleDelete(`${d.id}`)}
                    >
                      Delete
                    </Button>
                  </Td>

                  <Td>
                    <Button colorScheme="blue" variant="outline">
                      Edit
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Box>
          <Button
            disabled={page == 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            prev
          </Button>
          <Button onClick={() => setPage((prev) => prev + 1)}>next</Button>
        </Box>
      </TableContainer>
      <Box>{/* <AddButton /> */}</Box>
    </Box>
  );
};

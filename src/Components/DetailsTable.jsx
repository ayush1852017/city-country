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

import { getCity } from "../Redux/City-Country/action";
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
    // dispatch(deleteCity(id));
  };
  console.log(city);
  return (
    <Box m={10}>
      <Heading as="h4" fontSize="1.5rem" m={4}>
        Employee Table
      </Heading>
      <Button onClick={() => setSort("ASC")}>Lower CTC</Button>
      <Button onClick={() => setSort("DESC")}>Higher CTC</Button>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
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

// const AddButton = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Button onClick={onOpen}>Add Employee</Button>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <EmployeeForm onClick={onClose} />
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export function EmployeeForm() {
//   const [empName, setEmpName] = useState("");
//   const [compName, setCompName] = useState("");
//   const [ctc, setCtc] = useState("");
//   const dispatch = useDispatch();
//   const handleAddEmployee = (e) => {
//     e.preventDefault();
//     let form = { name: empName, company: compName, CTC: ctc };
//     dispatch(addEmployee(form));
//   };
//   return (
//     <Flex
//       minH={"100vh"}
//       align={"center"}
//       justify={"center"}
//       bg={useColorModeValue("gray.50", "gray.800")}
//     >
//       <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//         <Stack align={"center"}>
//           <Heading fontSize={"4xl"}>Add Employee Details</Heading>
//         </Stack>
//         <Box
//           rounded={"lg"}
//           bg={useColorModeValue("white", "gray.700")}
//           boxShadow={"lg"}
//           p={8}
//         >
//           <form onSubmit={handleAddEmployee}>
//             <Stack spacing={4}>
//               <FormControl>
//                 <FormLabel>Employee Name</FormLabel>
//                 <Input
//                   type="text"
//                   value={empName}
//                   onChange={(e) => setEmpName(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormLabel>Company Name</FormLabel>
//                 <Input
//                   type="text"
//                   value={compName}
//                   onChange={(e) => setCompName(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormLabel>CTC</FormLabel>
//                 <Input
//                   type="number"
//                   value={ctc}
//                   onChange={(e) => setCtc(e.target.value)}
//                 />
//               </FormControl>

//               <Stack spacing={10}>
//                 <Stack
//                   direction={{ base: "column", sm: "row" }}
//                   align={"start"}
//                   justify={"space-between"}
//                 ></Stack>

//                 <Button
//                   bg={"blue.400"}
//                   color={"white"}
//                   _hover={{
//                     bg: "blue.500",
//                   }}
//                   type="submit"
//                 >
//                   Add
//                 </Button>
//               </Stack>
//             </Stack>
//           </form>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }

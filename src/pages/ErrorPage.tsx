import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Heading,
  VStack,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <VStack>
        <Box>
          <Heading>Oops...</Heading>
          <Alert status="error">
            <AlertIcon />

            <AlertDescription>
              {isRouteErrorResponse(error)
                ? "This page does not exist."
                : "Sorry, an unexpected error has occurred."}
            </AlertDescription>
          </Alert>
        </Box>
      </VStack>
    </>
  );
};

export default ErrorPage;

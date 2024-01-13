import { Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      Erroro
      <Text>
        {isRouteErrorResponse(error) ? "Page not found" : "Unexpected error"}
      </Text>
    </div>
  );
}

export default ErrorPage;

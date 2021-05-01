import React     from "react";
import { Alert } from "react-bootstrap";

export const AppAlert: React.FC = () => {
  return (
    <Alert variant={'primary'}>
      This is a primary alert—check it out!
    </Alert>
  );
};


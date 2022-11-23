import React from "react";
import { UserAuth } from "../context/AuthContext";
import styled from "styled-components";

const ErrorDiv = styled.div`
  background-color: red;
  margin-top: 1rem;
  padding: 0 0.5rem;
`;

const AuthError = () => {
  const { error } = UserAuth();
  if (error) {
    return <ErrorDiv>{error}</ErrorDiv>;
  } else {
    return null;
  }
};

export default AuthError;

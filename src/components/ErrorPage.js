import React from "react";
const ErrorPage = (props) => {
  return (
    <div>
      {props.errorMessage}. Please check word and try again after Sometime
    </div>
  );
};

export default ErrorPage;

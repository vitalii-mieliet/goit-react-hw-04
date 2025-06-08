const ErrorMessage = ({
  message = "Something went wrong. Please try again later.",
}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;

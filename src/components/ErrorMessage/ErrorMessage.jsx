const ErrorMessage = ({
  error,
  message = "Something went wrong. Please try again later.",
}) => {
  return (
    <div>
      <p>{message}</p>
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessage;

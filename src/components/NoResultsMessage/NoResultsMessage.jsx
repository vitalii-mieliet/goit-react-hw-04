const NoResultsMessage = ({ query }) => {
  return (
    <div>
      <p>
        No results found for "<strong>{query}</strong>".
      </p>
    </div>
  );
};

export default NoResultsMessage;

const DataProvider = ({ children, data, isLoading, error }) => {
  if (isLoading) {
    return <>ЗАГРУЗКА</>;
  } else if (error) {
    return null;
  } else if (data) {
    return children;
  }

  return null;
};

export default DataProvider;
const getOperations = async () => {
  const response = await fetch(`http://localhost:5000/operationsList`);
  const data = await response.json();
  return data;
};

export default getOperations;

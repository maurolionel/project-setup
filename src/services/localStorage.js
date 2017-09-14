export const loadState = () => {
  try {
    const serializedData = localStorage.getItem('state');
    if (serializedData === null) return undefined;
    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log(error);
  }
};

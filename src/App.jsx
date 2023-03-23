import { useEffect, useState } from 'react';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoadin] = useState(true);
  const [tours, setTours] = useState([]);
  const getTours = async () => {
    setIsLoadin(true);
    try {
      const res = await fetch(url);
      const gettenTours = await res.json();
      setTours(gettenTours);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTours();
  }, []);
  return <h2>Tours Starter</h2>;
};
export default App;

import { useEffect, useRef, useState } from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState("");
  const handleFetch = useRef(() => {});

  handleFetch.current = async () => {
    try {
      const { data: response } = await axios.get(
        "https://www.econdb.com/api/series/?page=1&format=json"
      );
      console.log(response.results);
      setData(response.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleFetch.current();
  }, [handleFetch]);

  return (
    <section>
      <Dashboard data={data} />
    </section>
  );
};

export default Home;

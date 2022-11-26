import { useEffect, useRef, useState } from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";

const Home = ({ search }) => {
  const [data, setData] = useState("");

  const handleFetch = async () => {
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
    handleFetch();
  }, []);

  return (
    <section>
      <Dashboard data={data} search={search} />
    </section>
  );
};

export default Home;

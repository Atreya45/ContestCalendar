import React, { useState, useEffect } from "react";
import axios from "axios";
import ContestTable from "../components/ContestTable";
import { Watch } from "react-loader-spinner";

const Codeforces = () => {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading indicator

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await axios.get(
          "https://clist.by:443/api/v4/contest/",
          {
            headers: {
              Authorization:
                "ApiKey Atreya45:32e91b8791ab25ad7d26d6645bc08f8bba5309f7",
            },
            params: {
              upcoming: true,
              resource: "codeforces.com",
              order_by: "start",
            },
          }
        );
        setContests(response.data.objects);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching contests:", error);
        setLoading(false); // Set loading to false on error
      }
    };
    fetchContests();
  }, []);

  return (
    <section id="codeforces">
      <h2>Upcoming Codeforces Contests</h2>
      <div id="code">
        {loading ? (
          <Watch
            visible={true}
            height="80"
            width="80"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <ContestTable contests={contests} /> // Show contest table when data is loaded
        )}
      </div>
    </section>
  );
};

export default Codeforces;

import React, { useState, useEffect } from "react";
import { ChartComponent } from "@syncfusion/ej2-react-charts";
import axios from "axios";

const EarthHealthSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://api.example.com/earth-health-data");
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="earth-health-section container">
      <h2>Earth's Health</h2>
      <ChartComponent
        id="chart"
        primaryXAxis={{ title: "Year" }}
        primaryYAxis={{ title: "Temperature (°C)" }}
        width="100%"
        height="400"
        chartArea={{ border: { width: 0 } }}
        series={[
          {
            dataSource: data,
            xName: "year",
            yName: "temperature",
            type: "Line",
            marker: { visible: true }
          }
        ]}
      />
    </div>
  );
};

export default EarthHealthSection;

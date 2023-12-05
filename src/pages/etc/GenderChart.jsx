import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import AxiosApi from "../../api/AxiosApi";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  background-color: #fff;
`;

// Register the components you need
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GenderChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rsp = await AxiosApi.genderChart();
        if (rsp.status === 200) {
          setChartData({
            labels: Array.from(
              { length: rsp.data.female.length },
              (_, i) => i + 1
            ),
            datasets: [
              {
                label: "여성",
                data: rsp.data.female,
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
              {
                label: "남성",
                data: rsp.data.male,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "category",
      },
      y: {
        type: "linear",
      },
    },
  };

  return (
    <Container>
      <h2>신도림 지역의 남여 성별 인구 분포</h2>
      <Bar data={chartData} options={options} />
    </Container>
  );
};

export default GenderChart;

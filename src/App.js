import { useState } from 'react';
import Papa from 'papaparse';
import './App.css';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function App() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const options = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
  }
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const text = await response.text();
    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word !== '');
    const counts = {};
    words.forEach(word => {
      counts[word] = (counts[word] || 0) + 1;
    });

    const sortedWords = Object.keys(counts).sort(
      (a, b) => counts[b] - counts[a]
    );
     
    const topWords = sortedWords.slice(0, 20);
    const res = topWords.map((word) => counts[word]);
    const data1 = {
      labels: topWords,
      datasets: [
        {
          label: "Frequency",
          data: res,
          backgroundColor: "red",
        },
      ],
    };
    setData(data1);
    setShow(false);
    setLoading(false);
    console.log(res)
  };

  const exportData = () => {
    const csvData = data.datasets[0].data.map((value, index) => [data.labels[index], value]);
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'histogram.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <div className='main'>
      <button className='submit' onClick={fetchData} disabled={loading} style={{ display: show ? 'block' : 'none' }}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
      {data && (
        <div className='histogram'>
          <div className='chart'>
            <h1 className='header'>Histogram of the 20 Most Occurring Words</h1>
            <Bar data={data} options={options} plugins={[Tooltip]} />
            <button className='exp' onClick={exportData}>Export</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import React,{useState} from 'react'
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";


Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);



export default function Landing(props) 
{
  const [RegDate, setRegDate] = useState(new Date());
  const[money,setMoney]=useState(100000)
  const [expense, setExpense]=useState(3000);
  const [savings,setSavings]=useState(5000);
  
  
 
  return (
   <>
      
      
      
      <div >
      <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>Money allowed to spend per day</h1>
         <h3>{savings/30}</h3>
       
      </div>
           
          </div>
      <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>Money remaining</h1>
        <div className="col-md-3">
      
                    {/* pie */}
                    <Doughnut data={{
  labels: ["Money Remaining", "Money Spent"],
  datasets: [
    {
      data: [savings,expense ],
      backgroundColor: ["#bcf0c6",  "#ffb8cf"],
      hoverOffset: 4
    },
  ],
}} />
                  </div>
      </div>
      <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>Expenses Daily</h1>
       
      
               
                    <Line data={{
  labels:  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  datasets: [
    {
      labels: "days",
      data: [100,0,150,50,200,0,100,0,150,50,200,0,100,0,150,50,200,0,100,0,150,50,200,0,100,0,150,50,200,0 ],
      backgroundColor: ["#bcf0c6"],
      hoverOffset: 4
    },
  ],
}} />
                  
      </div>
            
                  
     
                  
   </>
  )
}

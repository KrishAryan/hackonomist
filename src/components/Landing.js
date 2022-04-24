import React,{useState} from 'react'
import { Bar, Pie, Line } from "react-chartjs-2";
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
  const [expense, setExpense]=useState(2000);
  const [savings,setSavings]=useState(5000);
  
  
 
  return (
   <>
      <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
          <div >
            <h1>{props.header}</h1>
            
          </div>
          <div className="col-md-6 col-xs-12 form-group">
                  <label>Monthly Pocket Money :
                    <div className="tooltip">
                      
                      <span className="tooltiptext">Mobile here </span>
                    </div>
                  </label>
                  <input type="text" id="money" name="money" className="form-control" placeholder="Enter Monthly Pocket Money here" required/>
                  <span className="wrtIcn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                </div>

                <div className="col-md-4 col-xs-12 form-group">
                  <label>
                    Date of receiving money :
                  </label>
                  <input type="date" id="date" name="date" className="form-control" placeholder="Enter date of receiving money" required/>
                  <span className="wrtIcn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>


                  <span className="wrtIcn">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                  </span>
                </div>
          
          

      </div>
      
      
      <div >
      <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>Enter today's expense</h1>
         <div className="col-md-6 col-xs-12 form-group">
                  <label>Today's Expense :
                    <div className="tooltip">
                      
                      <span className="tooltiptext">Mobile here </span>
                    </div>
                  </label>
                  <input type="text" id="money2" name="money2" className="form-control" placeholder="Enter todays expense here" required/>
                  <span className="wrtIcn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                </div>
      </div>
           
          </div>
      <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>Money remaining</h1>
        <div className="col-md-3">
      
                    {/* pie */}
                    <Pie data={{
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
            
                  
     
                  
   </>
  )
}

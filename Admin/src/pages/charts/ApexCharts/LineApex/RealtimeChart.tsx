// import ReactApexChart from "react-apexcharts";
// import {Card, Col} from "react-bootstrap";
// import {generateDayWiseTimeSeries} from "./data";
// import {useEffect, useRef, useState} from "react";
//
// const RealtimeChart = () => {
//
//     var lastDate = 0;
//     let iData: any[] = generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
//         min: 30, max: 90
//     })
//
//     // var lastDate = 0;
//     const [data, setData] = useState(iData.slice(0, 10))
//
//     function getNewSeries(baseval: any, yrange: any) {
//         var newDate = baseval + 86400000;
//         lastDate = newDate;
//         const nData = [...data];
//         nData.push({
//             x: newDate, y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
//         });
//
//         setData(nData);
//
//         //
//         // setSeries(series);
//         // setOption(nData);
//     }
//
//     // setInterval(function () {
//     //   getNewSeries(lastDate, {
//     //     min: 10,
//     //     max: 90
//     //   });
//
//     //   // chart.updateSeries([{
//     //   // data = data
//     //   // }]);
//     // }, 2000);
//
//     // // every 60 seconds, we reset the data
//     // setInterval(function () {
//     //   resetData();
//     //   // chart.updateSeries([{
//     //   //   data: data
//     //   // }], false);
//     // }, 60000);
//
//
//     // setInterval(() => {
//     //   getNewSeries(lastDate, {
//     //     min: 10,
//     //     max: 90
//     //   })
//
//     //   ApexCharts.exec('realtime', 'updateSeries', [{
//     //     data: data
//     //   }])
//     // }, 1000)
//
//     // const RealtimeChartOps: ApexOptions = {
//     //   chart: {
//     //     id: 'realtime',
//     //     height: 350,
//     //     type: 'line',
//     //     animations: {
//     //       enabled: true,
//     //       easing: 'linear',
//     //       dynamicAnimation: {
//     //         speed: 2000
//     //       }
//     //     },
//     //     toolbar: {
//     //       show: false
//     //     },
//     //     zoom: {
//     //       enabled: false
//     //     }
//     //   },
//     //   dataLabels: {
//     //     enabled: false
//     //   },
//     //   stroke: {
//     //     curve: 'smooth',
//     //     width: [3],
//     //   },
//     //   colors: ["#39afd1"],
//     //   series: [{
//     //     data: data
//     //   }],
//     //   markers: {
//     //     size: 0
//     //   },
//     //   xaxis: {
//     //     type: 'datetime',
//     //     range: 777600000
//     //   },
//     //   yaxis: {
//     //     max: 100
//     //   },
//     //   legend: {
//     //     show: false
//     //   },
//     //   grid: {
//     //     borderColor: '#f1f3fa',
//     //   }
//     // }
//
//
//     useEffect(() => {
//         window.setInterval(() => {
//             getNewSeries(lastDate, {
//                 min: 10, max: 90
//             })
//             // ApexCharts.exec('realtime', 'updateSeries', [{
//             //   data: [1, 2, 3]
//             // }])
//         }, 1000)
//     }, [])
//
//     return (<Col xl={6}>
//         <Card>
//             <Card.Body>
//                 <h4 className="header-title">Realtime Chart</h4>
//                 <div>
//                     <Chart data={data}/>
//                 </div>
//             </Card.Body>
//         </Card>
//     </Col>)
// }
//
// export default RealtimeChart
//
//
// const Chart = ({data}: any) => {
//
//     let option = {
//         series: [{
//             data: data
//         }], options: {
//             chart: {
//                 id: 'realtimes', height: 350, type: 'line', animations: {
//                     enabled: true, easing: 'linear', dynamicAnimation: {
//                         speed: 1000
//                     },
//                 }, toolbar: {
//                     show: false,
//                 }, zoom: {
//                     enabled: false
//                 }
//             }, dataLabels: {
//                 enabled: false
//             }, stroke: {
//                 curve: 'smooth'
//             }, title: {
//                 text: 'Dynamic Updating Chart', align: 'left'
//             }, markers: {
//                 size: 0
//             }, xaxis: {
//                 type: 'datetime', range: 777600,
//             }, yaxis: {
//                 max: 100
//             }, legend: {
//                 show: false
//             },
//         },
//     };
//
//     return <ReactApexChart
//         id='realtime'
//         className='apex-charts'
//         options={option}
//         height={350}
//         series={option.series}
//         type='line'
//     />;
// }

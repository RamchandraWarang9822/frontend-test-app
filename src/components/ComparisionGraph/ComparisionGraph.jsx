/* eslint-disable react/prop-types */
import { } from 'react'
import "./ComparisionGraph.css"

import CanvasJSReact from '@canvasjs/react-charts';

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ComparisionGraph = ({ data }) => {
    console.log(data);

    const generateRandomData = (count, interval = 5) => {
        let dataPoints = [];
        for (let i = 0; i < count; i++) {
            let x = i * interval;
            let y = Math.floor(Math.random() * 81) + 10;
            dataPoints.push({ x, y });
        }
        return dataPoints;
    };


    const randomDataPoints = generateRandomData(20, 5); // Generates points at intervals of 5
    const markerPoints = [
        { x: data[1].value, y: randomDataPoints[0].y },
        { x: randomDataPoints[randomDataPoints.length - 1].x, y: randomDataPoints[randomDataPoints.length - 1].y }
    ];

    const options = {
        animationEnabled: true,
        axisX: {
            minimum: 0,
            maximum: 100,
            interval: 10,
            suffix: '%'
        },
        axisY: {
            minimum: 0,
            maximum: 100,
            lineColor: 'transparent',
            tickLength: 0,
            labelFormatter: function () {
                return '';
            },
            gridThickness: 0
        },
        data: [
            {
                type: 'spline',
                markerType: 'none',
                dataPoints: randomDataPoints
            },
            {
                type: 'scatter',
                markerSize: 10,
                toolTipContent: 'x: {x}, y: {y}',
                dataPoints: markerPoints
            },
            {
                type: 'line',
                color: 'red',
                dataPoints: [
                    { x: markerPoints[0].x, y: 0 },
                    { x: markerPoints[0].x, y: 100 }
                ]
            }
        ],
        margin: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10
        }
    };
    




    return (
        <div className='comparision-graph'>
            <div className="graph-details">
                <div className="details-left">
                    <div className="title">Comparison Graph</div>
                    <div className="graph-desc1 desc"><span className='bolder-desc'> You scored 37% percentile </span>which is lower than the</div>
                    <div className="graph-desc2 desc">average percentile 72% of all the engineers who took this assessment</div>
                    <div style={{ height: "100%", width: "100%", padding: "10px" }}>

                        <CanvasJSChart options={options} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComparisionGraph
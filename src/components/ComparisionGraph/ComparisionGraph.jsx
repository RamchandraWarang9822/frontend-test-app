import { } from 'react'
import "./ComparisionGraph.css"

const ComparisionGraph = () => {
    return (
        <div className='comparision-graph'>
            <div className="graph-details">
                <div className="details-left">
                    <div className="title">Comparison Graph</div>
                    <div className="graph-desc1 desc"><span className='bolder-desc'> You scored 37% percentile </span>which is lower than the</div>
                    <div className="graph-desc2 desc">average percentile 72% of all the engineers who took this assessment</div>
                </div>
                <div className="details-right">
                    <img src="src\assets\graph.svg" alt="" className='graph-icon'/>
                </div>
            </div>
            <img src="src\assets\images\compare.svg" alt="" className='compare-graph'/>
        </div>
    )
}

export default ComparisionGraph
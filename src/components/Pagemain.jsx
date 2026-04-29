export default function PageMain({ page, setPage }) {
    return (
        <div className="pn">
            <button className="prev">prev</button>
            <span className="title">{ page }</span>
            <button onClick={()=>setPage(prev => prev + 1)} className="next">next</button>
          </div>
    )
}
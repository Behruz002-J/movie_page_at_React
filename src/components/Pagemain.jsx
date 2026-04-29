export default function PageMain({ page, setPage }) {
    function prevAdd() {
        if(page > 1) {
            setPage(page - 1)
        }
    }
    return (
        <div className="pn">
            <button onClick={prevAdd} className="prev">prev</button>
            <span className="title">{ page }</span>
            <button onClick={()=>setPage(prev => prev + 1)} className="next">next</button>
          </div>
    )
}
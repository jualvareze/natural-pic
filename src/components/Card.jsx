const Card = (props) =>{
    const {imgurl,liked,photographer} = props
    return(
        < div className="card" style={{ width: '18rem' }}>
            <img src={imgurl} className="card-img-top"/>
            <div className="card-body">
                <div className="card-text">
                    <h3>{}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{liked}</li>
                        <li className="list-group-item">fotografo: {photographer}</li>
                        <li className="list-group-item">origen: {}</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
export default Card
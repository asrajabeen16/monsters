import "./card-style.css";

function Card({item}){
    return(
        <div className="card-container" >
            <h4>{item.name}</h4>
            <img src={`https://robohash.org/${item.id}?set=set2&size=180x180`} alt= {`monster${item.id}`} />
            <p>{item.email}</p>
            <p>{item.city}</p>
        </div>
    );
}

export default Card;
import Card from "./Card";
import "./card-style.css";

const CardTemplet = ({data}) => {
    console.log(data);
    return ( 
     <div className="card-list">{
        data.map((item)=> 
        <div>
            <Card item = {item} />
        </div>
        )}          
    </div>
     );
}
 
export default CardTemplet ;
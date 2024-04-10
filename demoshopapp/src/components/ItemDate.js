import './ItemDate.css';

function ItemDate(props) {

        // direct value nhi dalenge kyoki components ki value hr baar alag alag hogi 

    const Date = props.day
    const month = props.month
    const year = props.year
    return (
        <div className="Dateclass">
            <span> {Date} </span> 
            <span> {month} </span>
            <span> {year} </span>
        </div>);
}

export default ItemDate;
import React , { MouseEventHandler}from 'react'
interface IProps {
    title:"",
    image:"",
    selected: any,
    onSelect: MouseEventHandler<HTMLDivElement> 
}

let NomineeCard: React.FC<IProps> = (props) => {
    return (
        <div className={`card ${props.selected ? 'active-card' : 'card-bg'}`} style={{ width: "20rem", height: "24rem" }} onClick={props.onSelect}>
            <div className="card-body text-center">
                <h6 className="card-subtitle mb-4 text-muted"> {props.title }</h6>
                <div>
                <img src={props.image} className="rounded-circle" alt="img" />
                </div>
                <div className="my-4">
                <button type="button" className="btn  btn-lg">Select</button>

                </div>
            </div>
        </div>
    )
}

export default NomineeCard;
import { MouseEventHandler } from "react";

interface IProps {
    setShowResults?: MouseEventHandler<HTMLButtonElement>,

}
let SuccessModal: React.FC<IProps> = (props) => {
    return (
        <>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
       <div className="modal-dialog">
         <div className="modal-content">
           <div className="modal-header">
             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div className="modal-body">
             <p>Successful</p>
           </div>
           <div className="modal-footer">
             {/* <button onClick={props.setShowResults} className='btn'>Close</button> */}
           </div>
         </div>
       </div>
     </div>
         
        </>
    )
}
export default SuccessModal;
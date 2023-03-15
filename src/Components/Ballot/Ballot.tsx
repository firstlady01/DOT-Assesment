import * as React from 'react';
import { useState, useEffect } from 'react';
import api from './../../Api/Api';
import NomineeCard from './NomineeCard';
import { useReactState } from './../../Util/useReactState';
import CapitalizeAndReplace from '../../Util/capitalizeAndReplace';
import SuccessModal from './Modal';


const Ballot = () => {

  const state = useReactState({
    nominees: [],
    selectedNominees: {},
    showResult:false
  });


  const handleNomineeSelection = (categoryId: string, nomineeId: string) => {
    //check if a nominee has been selected
    const newSelections = {
      ...state.selectedNominees,
      [categoryId]: nomineeId,
    };
    state.selectedNominees = (newSelections);
  }
  const handleResultsSubmit = () => {
    state.showResult =(true);
    
  };
  const closeModal = () => {
    state.showResult =(false);
  }
  useEffect(() => {
    api.getBallotData()
      .then(data =>
        state.nominees = (data.items)
      )
      .catch(error => console.log(error));
  }, []);

  if (!state.nominees) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='container py-5'>
      <h2 className="award mb-5">Golden Globe<br /> Award</h2>
      {state.nominees.map((nominee: any) => (
        <div key={nominee.id}>
          <div className="border mb-5 text-start category">
            <h4 className='ps-4 py-2 '>{CapitalizeAndReplace(nominee.id)}</h4>
          </div>
          <div className="row">
            {nominee.items.map((details: any) => (
              <div className=" col-sm-12 col-lg-4 col-md-4 mb-5">
                <NomineeCard
                  title={details.title}
                  image={details.photoUrL}
                  selected={state.selectedNominees[nominee.id] === details.id}
                  onSelect={() => handleNomineeSelection(nominee.id, details.id)} />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div>
        <button type="button" className="btn btn-submit btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleResultsSubmit}>SUBMIT VOTE BUTTON</button>

      </div>

    </div>
    {state.showResult && (
           
      <SuccessModal 
      setShowResults= {() => closeModal()}
       />

    )}
    </>
  
  )
}

export default Ballot;
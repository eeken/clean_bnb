import React, { useContext, useEffect } from "react";
import { ResidenceContext } from "../contexts/ResidenceContextProvider";
import { useHistory, useParams } from "react-router-dom";

function ResidenceCard() {
  const { residences } = useContext(ResidenceContext);

  let history = useHistory();

  const { fetchResidenceSearchResults } = useContext(ResidenceContext);

  let { destination } = useParams();
  console.log(destination);

  useEffect(() => {
    if (destination == '') {
      fetchResidenceSearchResults(destination);
    }
  }, []);

  if (residences) {
    const list = () => {
      return residences.map((residence, i) => {
        return (
          <div
            key={i}
            onClick={() => history.push("/residence/" + residence.id)}
            className="row text-left residenceCard mb-3"
          >
            <div className="col-4 col-lg-2 col-md-3 prevImage">
              <img
                className="cardImage"
                src={residence.image}
                alt="residence-preview"
              />
            </div>
            <div className="col-7">
              <p className="golden mt-3 mb-0 residenceDetailsTitle">
                {residence.address.city}, {residence.address.country}
              </p>
              <p className="golden residenceDetailsCommonDetails">
                {residence.maxguests} guests - {residence.numberofbeds} beds -
                {residence.rooms} rooms
              </p>

              <div className="golden residencePriceDetails">
                <p>
                  {residence.pricepernight} kr
                  <span className="residenceDetailsCommonDetails">
                    {" "}
                    per night{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      });
    };

    return <>{list()}</>;
  }

  return null;
}

export default ResidenceCard;
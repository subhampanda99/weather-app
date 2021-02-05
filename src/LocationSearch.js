import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByPlaceId, getLatLng } from "react-google-places-autocomplete";

const Component = ({ updateParent }) => {
    const [cordi, setCordi] = useState({});
    return (
        <div>
            <div >
                <div>
                    <GooglePlacesAutocomplete
                        onSelect={async locationResult => {
                            const data = await geocodeByPlaceId(locationResult.place_id);
                            const gettingLatLng = await getLatLng(data[0]);
                            setCordi(gettingLatLng);
                        }}

                    />
                </div>

                <div onClick={() => updateParent(cordi)}>
                    <div className="searchButton">Search</div>
                </div>
            </div>
            <div>
                Select Location here
            </div>
        </div>
    );
};
export default Component;
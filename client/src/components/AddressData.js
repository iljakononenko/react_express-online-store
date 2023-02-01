import React, {useState} from 'react';

const AddressData = ({updateParentAddressData, givenAddressData = {}}) => {

    // console.log(givenAddressData)

    const [addressData, setAddressData] = useState(givenAddressData);

    if (givenAddressData.length == 0) {
        setAddressData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            country: "",
            city: "",
            postal: "",
        })
    }

    const changeAddressData = (field, value) => {
        let new_object = {...addressData};
        new_object[field] = value;
        setAddressData(new_object);
        updateParentAddressData(new_object);
    }

    return (
        <div className="row g-3">
            <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" required
                       value={addressData.firstName}
                       onChange={ e => changeAddressData("firstName", e.target.value) }
                />
                <div className="invalid-feedback">
                    Valid first name is required.
                </div>
            </div>

            <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" required
                       value={addressData.lastName}
                       onChange={ e => changeAddressData("lastName", e.target.value) }
                />
                <div className="invalid-feedback">
                    Valid last name is required.
                </div>
            </div>

            <div className="col-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="jan.kowalski@wp.pl"
                       value={addressData.email}
                       onChange={ e => changeAddressData("email", e.target.value) }
                />
                <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>

            <div className="col-12">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" placeholder="+48 123 123 123"
                       value={addressData.phone}
                       onChange={ e => changeAddressData("phone", e.target.value) }
                />
                <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>

            <div className="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Jana Pawła II 54/3" required
                       value={addressData.address}
                       onChange={ e => changeAddressData("address", e.target.value) }
                />
                <div className="invalid-feedback">
                    Please enter your shipping address.
                </div>
            </div>

            <div className="col-md-5">
                <label htmlFor="country" className="form-label">Country</label>
                <input type="text" className="form-control" id="country" placeholder="Polska" required
                       value={addressData.country}
                       onChange={ e => changeAddressData("country", e.target.value) }
                />
                <div className="invalid-feedback">
                    Please enter your shipping address.
                </div>
            </div>

            <div className="col-md-4">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city" placeholder="Wrocław" required
                       value={addressData.city}
                       onChange={ e => changeAddressData("city", e.target.value) }
                />
                <div className="invalid-feedback">
                    Please enter your shipping address.
                </div>
            </div>


            <div className="col-md-3">
                <label htmlFor="postal" className="form-label">Postal</label>
                <input type="text" className="form-control" id="postal" placeholder="50-540" required
                       value={addressData.postal}
                       onChange={ e => changeAddressData("postal", e.target.value) }
                />
                <div className="invalid-feedback">
                    Zip code required.
                </div>
            </div>
        </div>
    );
};

export default AddressData;

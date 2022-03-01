import { useState, useEffect, useContext } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Loading from '../../../../components/Loading/Loading';
import SelectField from '../../../../components/SelectField/SelectField';
import BuildingsContext from '../../../../contexts/buildings.context';
import { getCountries } from '../../../../services/countries.services';

import { Country } from '../../../../shared.models';
import TextField from '../../../../components/TextField/TextField';

import './BuildingForm.style.css';
function BuildingForm(props: InferProps<typeof BuildingForm.propTypes>) {
  const initialBuilding = {
    name: '',
    country: undefined,
  };

  const { userId, updateSelectedBuilding } = props;

  const { buildings, buildingsDispatch } = useContext(BuildingsContext);
  const [building, setBuilding] = useState(initialBuilding);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountries().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  const handleChange = (name: string, value: string | Country) => {
    setBuilding({ ...building, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const newBuilding = { ...building, id: buildings.length + 1, userId };
      buildingsDispatch({
        type: 'ADD_BUILDING',
        building: newBuilding,
      });
      updateSelectedBuilding(newBuilding);
      setBuilding(initialBuilding);
      setLoading(false);
    }, 100);
  };

  return (
    <>
      {loading && <Loading />}
      <form className="building-form" onSubmit={handleSubmit}>
        <div className="d-flex">
          <label htmlFor="name"> Name </label>
          <TextField
            id="name"
            name="name"
            value={building.name}
            required
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="d-flex">
          <label htmlFor="name"> Location </label>
          <SelectField
            id="country"
            placeholder="Select Country"
            name="country"
            options={data}
            required
            onChange={handleChange}
          />
        </div>

        <br />
        <br />
        <input
          className="button"
          type="submit"
          style={{
            marginTop: 'auto',
            alignSelf: 'end',
          }}
        />
      </form>
    </>
  );
}

BuildingForm.propTypes = {
  userId: PropTypes.number.isRequired,
  updateSelectedBuilding: PropTypes.func.isRequired,
};

export { BuildingForm as default };

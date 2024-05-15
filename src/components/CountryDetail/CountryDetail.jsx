import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    // const {country, handleVisitedCountry, handleVisitedFlags} = props;
    return (
        <div>
            <h4>Country Details</h4>
            <CountryData
            {...props}
            ></CountryData>
        </div>
    );
};

export default CountryDetail;
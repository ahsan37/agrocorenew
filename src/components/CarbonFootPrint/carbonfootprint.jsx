import React, { useState } from "react";
import './carbonfootprint.css';
const CarbonCalculator = () => {
    const [minutes, setMinutes] = useState(0);
    const [kilowatts, setKiloWatts] = useState(0);
    const [waterConsumption, setWaterConsumption] = useState(0);
    const [treesToOffsetEmissions, setTreesToOffsetEmissions] = useState(0);
    // const [electricEmissions, setElectricEmissions] = useState(0);
    const [totalEmissions, setTotalEmissions] = useState(0);

    const carEmissionsPerMile = 0.411; // Emissions per mile
    const avgkwPerPerson = 0.388;      // Average kW emissions per person per month to gram of carbon
    const waterEmissionsPerCubicMeter = (0.37 * 264.172) / 1000; // 0.37 kg of CO2 equivalent per cubic meter of water used converted to gallons
    const carbonSequestrationRatePerTree = 22;

    const handleCalculate = () => {
        const calculatedCarEmissions = carEmissionsPerMile * minutes * 30;
        const calculatedElectricEmissions = avgkwPerPerson * kilowatts;
        const calculatedWaterEmissions = waterEmissionsPerCubicMeter * waterConsumption;        
        const totalCalculatedEmissions = calculatedCarEmissions + calculatedElectricEmissions + calculatedWaterEmissions;
        setTotalEmissions(totalCalculatedEmissions);

        //trees offset
        const treesToOffsetEmissions = Math.ceil(totalCalculatedEmissions / carbonSequestrationRatePerTree);
        setTreesToOffsetEmissions(treesToOffsetEmissions);
    }

    return (
        <div className="container">
            <h2>Calculate the number of trees you need to plant to offset a part of your carbon footprint</h2>
            
            <label>
                Enter the average number of minutes you drive per day:
                <p className="subscript"><span>&#40;</span>The U.S. average is 46 minutes<span>&#41;</span></p>
                <input
                    type="number"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                />
            </label>
            
            <label>
                Enter the average kwH of energy you consume a month:
                <p className="subscript"><span>&#40;</span>The U.S. average is 886 kwh<span>&#41;</span></p>
                <input
                    type="number"
                    value={kilowatts}
                    onChange={(e) => setKiloWatts(e.target.value)}
                />
            </label>
            
            <label>
                Enter the average amount of water you consume a month per cubic meter:
                <p className="subscript"><span>&#40;</span>The U.S avaerage is  2,542 gallons<span>&#41;</span></p>
                <input
                    type="number"
                    value={waterConsumption}
                    onChange={(e) => setWaterConsumption(e.target.value)}
                />
            </label>
            
            <button onClick={handleCalculate}>Calculate!</button>
            {/* <p className="totalEmissionsP">Your estimated carbon emission per month is {totalEmissions.toFixed(2)} kg</p> */}
            <p className="totalEmissionsP">You would need to plant approximately {treesToOffsetEmissions} trees a month to offset these emissions.</p>

        </div>
    );
}

export default CarbonCalculator;

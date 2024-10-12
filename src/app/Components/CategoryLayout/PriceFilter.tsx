import { useState } from "react";
import { Range } from "react-range";

const PriceRangeFilter = () => {
  const [values, setValues] = useState([279950, 1075530]);

  const MIN = 279950;
  const MAX = 1075530;

  return (
    <div className="border-b-2 border-gray-200 mb-4">
      <h2 className="font-bold mb-6">FILTER BY PRICE</h2>

      <Range
        step={10000}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{ ...props.style }}
            className="w-full h-1 bg-gray-200 rounded-lg relative"
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                background: "#000000", 
                left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
                right: `${100 - ((values[1] - MIN) / (MAX - MIN)) * 100}%`,
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="w-1 h-4 bg-black rounded-sm shadow"
          />
        )}
      />

      <div className="mt-4 text-sm flex flex-row justify-between items-center mb-4">
        <span className="text-xs mt-3">Price: Rs.{values[0].toLocaleString()} - Rs.{values[1].toLocaleString()}</span>
        <button className="mt-4 px-3 py-2 bg-black text-xs text-white rounded">
          FILTER
        </button>
      </div>
    </div>
  );
};

export default PriceRangeFilter;

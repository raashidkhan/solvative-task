import React from "react";

const DataTable = ({ data = [], state = "INTIAL" }) => {
  if (state === "ERROR") {
    return <></>;
  }
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {state === "INITIAL" && (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                Start searching
              </td>
            </tr>
          )}
          {state === "SUCCESS" &&
            data.length &&
            data.map((item, index) => (
              <tr key={index}>
                <td data-label="#">{index + 1}</td>
                <td data-label="Place Name">{item.name}</td>
                <td data-label="Country">
                  {item.countryCode ? (
                    <img
                      height={50}
                      width={55}
                      src={`https://flagsapi.com/${item.countryCode}/flat/64.png`}
                      alt="Flag"
                    />
                  ) : (
                    "NA"
                  )}
                </td>
              </tr>
            ))}
          {state === "SUCCESS" && !data.length && (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

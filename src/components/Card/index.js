import React from "react";
import { Card } from "antd";

const getTabList = (id) => {
  const key1 = id + "1";
  const key2 = id + "2";
  return [
    {
      key: key1,
      tab: "Deatils",
    },
    {
      key: key2,
      tab: "Orbit Parameters",
    },
  ];
};

const displayCardData = (data) => {
  const key1 = data.id + "1";
  const key2 = data.id + "2";

  const objectiveParams = data.orbit_params;

  const cardDetails = {
    [key1]: (
      <>
        <p>Payload Id: {data.payload_id || "Not Available"}</p>
        <p>Customers: {[...data.customers] || "Not Available"}</p>
        <p>Nationality: {data.nationality || "Not Available"}</p>
        <p>Manufacturer: {data.manufacturer || "Not Available"}</p>
        <p>Payload type: {data.payload_type || "Not Available"}</p>
        <p>Payload Mass (Kg): {data.payload_mass_kg || "Not Available"}</p>
        <p>Orbit: {data.orbit || "Not Available"}</p>
      </>
    ),
    [key2]: (
      <>
        <p>
          Reference System:{" "}
          {objectiveParams.reference_system || "Not Available"}
        </p>
        <p>Regime: {objectiveParams.regime || "Not Available"}</p>
        <p>Longitude: {objectiveParams.longitude || "Not Available"}</p>
        <p>
          Semi major axis (km):{" "}
          {objectiveParams.semi_major_axis_km || "Not Available"}
        </p>
        <p>Eccentricity: {objectiveParams.eccentricity || "Not Available"}</p>
        <p>Periapsis (km): {objectiveParams.periapsis_km || "Not Available"}</p>
        <p>Apoapsis (km): {objectiveParams.apoapsis_km || "Not Available"}</p>
        <p>
          Inclination (deg):{" "}
          {objectiveParams.inclination_deg || "Not Available"}
        </p>
        <p>Period: {objectiveParams.period_min || "Not Available"}</p>
        <p>
          Lifespan (years): {objectiveParams.lifespan_years || "Not Available"}
        </p>
      </>
    ),
  };
  return cardDetails[data.activeTabKey];
};

export default function displayCard({
  data,
  currentPage,
  pageSize,
  dispatch,
  changePayloadActiveTabKey,
}) {
  const startingIndex = (currentPage - 1) * pageSize;
  const endingIndex = startingIndex + pageSize;
  const slicedData = data.slice(startingIndex, endingIndex);
  return slicedData.map((item) => {
    const id = item.id;
    const defaultKey = item.id + "1";

    return (
      <Card
        key={item.id}
        tabList={getTabList(id)}
        defaultActiveTabKey={defaultKey}
        activeTabKey={item.activeTabKey}
        hoverable
        onTabChange={(key) => {
          onTabChange(key, dispatch, changePayloadActiveTabKey);
        }}
      >
        {displayCardData(item)}
      </Card>
    );
  });
}

const onTabChange = (key, dispatch, changePayloadActiveTabKey) => {
  return dispatch(changePayloadActiveTabKey(key));
};

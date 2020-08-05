import axios from "axios";

export async function getHistory() {
  const url = "https://api.spacexdata.com/v3/history";
  const { data } = await axios.get(url);
  return data;
}

export async function getPayload() {
  const url = "https://api.spacexdata.com/v3/payloads";
  const { data } = await axios.get(url);
  return data;
}

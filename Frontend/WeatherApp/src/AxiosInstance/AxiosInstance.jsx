import React from "react";
import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://localhost:4000",
});

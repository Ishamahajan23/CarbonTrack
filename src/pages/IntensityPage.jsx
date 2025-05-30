import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIntensityData } from "../redux/intensitySlice";
import { useParams } from "react-router-dom";
import IntensityCard from "../components/IntensityCard";

const IntensityPage = () => {
    const { date } = useParams();
    const dispatch = useDispatch();
    const { data, metrics, status, error } = useSelector((state) => state.intensity);

    useEffect(() => {
        dispatch(fetchIntensityData(date));
    }, [date, dispatch]);

    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;

    return data && metrics ? <IntensityCard data={{ ...data, date }} /> : null;
};

export default IntensityPage;

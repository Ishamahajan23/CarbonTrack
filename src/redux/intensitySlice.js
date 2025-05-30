import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchIntensityData = createAsyncThunk(
    'intensity/fetchIntensityData',
    async (date)=>{
        const res = await fetch (`https://api.carbonintensity.org.uk/intensity/date/${date}`)
        const data = await res.json();
        return data;
    }
);

const intensitySlice = createSlice({
    name: "intensity",
    initialState:{
        data: null,
        metrics: null,
        status: "idle",
        error: null,
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
         .addCase(fetchIntensityData.pending, (state)=>{
            state.status ="loading";
         })
         .addCase(fetchIntensityData.fulfilled,(state, action)=>{
            state.status = "succeeded";
            state.data = action.payload;
            const intensities = action.payload.data.map(d => d.intensity.average);
            state.metrics = {
                avg: Math.round(intensities.reduce((a, b) => a + b, 0) / intensities.length),
                peak: Math.max(...intensities),
                low: Math.min(...intensities),
            };
         })
         .addCase(fetchIntensityData.rejected,(state, action)=>{
            state.status ="failed";
            state.error =action.error.message;
         })
    }
})

export default intensitySlice.reducer;

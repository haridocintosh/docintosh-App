import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const survayList = createAsyncThunk("getSurveyList", async (data) => {
  try {
    const responce = await fetch(
      `${mainApi.baseUrl}/ApiController/getSurveyList`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const surveyDatalist = await responce.json();
    return surveyDatalist;
  } catch (e) {
    console.log(e);
  }
});

export const getSurveyQuestions = createAsyncThunk(
  "getSurveyQuestions",
  async (data) => {
    try {
      const responce = await fetch(
        `${mainApi.baseUrl}/ApiController/getSurveyQuestions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await responce.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }
);
export const saveSurveyAnswers = createAsyncThunk(
  "saveSurveyAnswers",
  async (data) => {
    try {
      const responce = await fetch(
        `${mainApi.baseUrl}/ApiController/saveSurveyAnswers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await responce.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }
);

export const surveyData = createSlice({
  name: "survey",
  initialState: {
    postData: [],
    survayList:[],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [survayList.pending]: (state) => {
      state.loading = true;
    },
    [survayList.fulfilled]: (state, action) => {
      state.loading = false;
      state.survayList = action.payload;
    },
    [survayList.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    [getSurveyQuestions.pending]: (state) => {
      state.loading = true;
    },
    [getSurveyQuestions.fulfilled]: (state, action) => {
      state.loading = false;
      state.postData = action.payload;
    },
    [getSurveyQuestions.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    [saveSurveyAnswers.pending]: (state) => {
      state.loading = true;
    },
    [saveSurveyAnswers.fulfilled]: (state, action) => {
      state.loading = false;
      state.postData = action.payload;
    },
    [saveSurveyAnswers.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});


export const { reducer: surveyDatalist } = surveyData;

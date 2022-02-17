import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
  value: 0,
  phoneNumber: null,
  otp: null,
  token: localStorage.getItem("tokenNumber"),
  articles : []
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    requestLogOff : (state)=>{
      localStorage.clear();

    },
    test: (state, action) => {
      state.phoneNumber = action.payload
      console.log(state.phoneNumber)
    },

    requestOtp: (state, action) => {
      state.phoneNumber = action.payload
      axios({
        method: 'post',
        url: `https://stage-services.truemeds.in/CustomerService/sendOtp?mobileNo=${state.phoneNumber}`,
        headers: {
          transactionId: 'react_interview',
        },
      })
        .then((res) => {
          console.log(res)
        })
        .then((err) => {
          console.log(err)
        })
    },

    requestLogin: (state, action) => {
      state.otp = action.payload
      console.log(state.phoneNumber)
      
      axios({
        method: 'post',
        url: `https://stage-services.truemeds.in/CustomerService/verifyOtp?mobileNo=${state.phoneNumber}&otp=${state.otp}&deviceKey=abcd&isIos=false&source=react_interview`,

        headers: {
          transactionId: 'react_interview',
        },
      })
        .then((res) => {
          console.log(res.data.Response.access_token)
          let tokenNumber = res.data.Response.access_token
          localStorage.setItem('tokenNumber', tokenNumber)
        })
        .then((err) => {
          console.log(err)
        })
    },
    requestArticles: (state, action) => {
      axios({
        method: 'post',
        url: `https://stage-services.truemeds.in/ArticleService/getArticleListing`,

        headers: {
          Authorization: state.token,
        },
      })
        .then((res) => {
          console.log(res.data)
          state.articles = res.data.result.article
          
        })
        .then((err) => {
          console.log(err)
        })
    }
    
  },
  

})

export const {
  test,
  requestOtp,
  requestLogin,
  requestArticles,
  requestLogOff
} = articleSlice.actions

export default articleSlice.reducer

import axios from 'axios'

import { getEnglish, getExpected } from './index'

const baseURL = process.env.API_HOST

export const SET_ENGLISH = 'SET_ENGLISH'
export const setEnglish = english => ({
  type: SET_ENGLISH,
  payload: { english },
})

export const SET_EXPECTED = 'SET_EXPECTED'
export const setExpected = expected => ({
  type: SET_EXPECTED,
  payload: { expected },
})

export const SET_OUTPUT = 'SET_OUTPUT'
export const setOutput = output => ({
  type: SET_OUTPUT,
  payload: { output },
})

export const parse = () => (dispatch, getState) => {
  return axios
    .get('/parse', {
      params: {
        english: getEnglish(getState()),
        expected: getExpected(getState()),
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      baseURL,
    })
    .then(response => {
      const { output } = response.data
      dispatch(setOutput(output))
    })
}

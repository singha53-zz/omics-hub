import axios from 'axios';
import { FETCH_USER } from 'actions/types'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
  };

export const submitDataForm = (values, history) => async dispatch => {
  const res = await axios.post('/api/analyze', values)
  console.log(res)
  history.push('/dashboard')
  dispatch({ type: FETCH_USER, payload: res.data})
};
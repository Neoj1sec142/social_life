import {
    LOAD_DATA_SUCCESS, LOAD_DATA_FAIL,
    // LOAD_DATATYPES_SUCCESS, LOAD_DATATYPES_FAIL
} from '../types'
import { csvToArray } from '../services/EarthServices'
const annPr = require('../../components/earth/data/pr_timeseries_annual_era_1970-2020_USA.csv')
const data2 = require('../../components/earth/data/tas_climatology_annual-seasonal_cru_1991-2020_USA.csv')
const maxPr = require('../../components/earth/data/tasmax_timeseries_annual_era_1970-2020_USA.csv')
const minPr = require('../../components/earth/data/tasmin_timeseries_annual_era_1970-2020_USA.csv')
export const load_data = (dataType) => async dispatch => {
    try{
        let res;
        switch(dataType){
            case "annualPr":
                res = await csvToArray(annPr)
                console.log(res, "RES")
                dispatch({
                    type: LOAD_DATA_SUCCESS,
                    payload: res
                })
                break;
            case "minPr":
                res = await csvToArray(minPr)
                console.log(res, "RES")
                dispatch({
                    type: LOAD_DATA_SUCCESS,
                    payload: res
                })
                break;
            case "maxPr":
                res = await csvToArray(maxPr)
                console.log(res, "RES")
                dispatch({
                    type: LOAD_DATA_SUCCESS,
                    payload: res
                })
                break;
            case "cruPr":
                res = await csvToArray(data2)
                console.log(res, "RES")
                dispatch({
                    type: LOAD_DATA_SUCCESS,
                    payload: res
                })
                break;
            default:
                res = await csvToArray(annPr)
                console.log(res, "RES")
                dispatch({
                    type: LOAD_DATA_SUCCESS,
                    payload: res
                })
                break;
        }
    }catch(err){
        console.log(err, "ERROR")
        dispatch({
            type: LOAD_DATA_FAIL,
        })
    }
}
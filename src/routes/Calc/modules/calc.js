import { jStat } from 'jStat'

// ------------------------------------
// Constants
// ------------------------------------
export const EDIT_GROUP_A_PROPORTION = 'EDIT_GROUP_A_PROPORTION'
export const EDIT_GROUP_B_PROPORTION = 'EDIT_GROUP_B_PROPORTION'
export const EDIT_SAMPLING_RATIO = 'EDIT_SAMPLING_RATIO'
export const EDIT_POWER = 'EDIT_POWER'
export const EDIT_ALPHA = 'EDIT_ALPHA'
export const EDIT_TAILS = 'EDIT_TAILS'
export const EDIT_SAMPLE_SIZE = 'EDIT_SAMPLE_SIZE'
export const CALCULATE_SAMPLE_SIZE = 'CALCULATE_SAMPLE_SIZE'
export const CALCULATE_POWER = 'CALCULATE_POWER'

// ------------------------------------
// Actions
// ------------------------------------
export const editGroupAProportion = event => ({ type: EDIT_GROUP_A_PROPORTION, number: parseFloat(event.target.value) })
export const editGroupBProportion = event => ({ type: EDIT_GROUP_B_PROPORTION, number: parseFloat(event.target.value) })
export const editSamplingRatio = event => ({ type: EDIT_SAMPLING_RATIO, number: parseFloat(event.target.value) })
export const editPower = event => ({ type: EDIT_POWER, number: parseFloat(event.target.value) })
export const editAlpha = event => ({ type: EDIT_ALPHA, number: parseFloat(event.target.value) })
export const editTails = event => ({ type: EDIT_TAILS, number: parseFloat(event.target.value) })
export const editSampleSize = event => ({ type: EDIT_SAMPLE_SIZE, number: parseFloat(event.target.value) })
export const calculateSampleSize = () => ({ type: CALCULATE_SAMPLE_SIZE })
export const calculatePower = () => ({ type: CALCULATE_POWER })
export const selectOneTail = () => ({ type: EDIT_TAILS, tails: 1 })
export const selectTwoTail = () => ({ type: EDIT_TAILS, tails: 2 })

export const actions = {
  editGroupAProportion,
  editGroupBProportion,
  editSamplingRatio,
  editPower,
  editAlpha,
  editTails,
  editSampleSize,
  calculateSampleSize,
  calculatePower,
  selectOneTail,
  selectTwoTail
}

// ------------------------------------
// Action Handlers
// ------------------------------------

function qnorm (p, mean = 0.0, std = 1.0) {
  return jStat.normal.inv(p, mean, std)
}

function pnorm (p, mean = 0.0, std = 1.0) {
  return jStat.normal.cdf(p, mean, std)
}

function computeSampleSize ({ groupAProportion, groupBProportion, samplingRatio, power, alpha, tails }) {
  let pA = groupAProportion
  let pB = groupBProportion
  let kappa = samplingRatio
  let beta = 1 - power
  let nB = (pA * (1 - pA) / kappa + pB * (1 - pB)) * (
      Math.pow((qnorm(1 - alpha / tails) + qnorm(1 - beta)) / (pA - pB), 2))
  return Math.ceil(nB)
}

function computePower ({ groupAProportion, groupBProportion, samplingRatio, sampleSize, alpha, tails }) {
  let pA = groupAProportion
  let pB = groupBProportion
  let kappa = samplingRatio
  let nB = sampleSize
  let z = (pA - pB) / Math.sqrt(pA * (1 - pA) / sampleSize / kappa + pB * (1 - pB) / nB)
  let power = pnorm(z - qnorm(1 - alpha / tails)) + pnorm(-z - qnorm(1 - alpha / tails))
  return power
}

const ACTION_HANDLERS = {
  [EDIT_GROUP_A_PROPORTION]: (state, action) => Object.assign({}, state, { groupAProportion: action.number }),
  [EDIT_GROUP_B_PROPORTION]: (state, action) => Object.assign({}, state, { groupBProportion: action.number }),
  [EDIT_SAMPLING_RATIO]: (state, action) => Object.assign({}, state, { samplingRatio: action.number }),
  [EDIT_ALPHA]: (state, action) => Object.assign({}, state, { alpha: action.number }),
  [EDIT_POWER]: (state, action) => Object.assign({}, state, { power: action.number }),
  [EDIT_TAILS]: (state, action) => Object.assign({}, state, { tails: action.number }),
  [EDIT_SAMPLE_SIZE]: (state, action) => Object.assign({}, state, { sampleSize: action.number }),
  [EDIT_TAILS]: (state, action) => Object.assign({}, state, { tails: action.tails }),
  [CALCULATE_SAMPLE_SIZE]: (state, action) => Object.assign({}, state, { sampleSize: computeSampleSize(state) }),
  [CALCULATE_POWER]: (state, action) => Object.assign({}, state, { power: computePower(state) })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  groupAProportion: 0.40,
  groupBProportion: 0.50,
  samplingRatio: 1.0,
  power: 0.80,
  alpha: 0.05,
  tails: 2,
  sampleSize: 123
}

export default function calcReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

import React from 'react'

const FormGroup = ({label, id, children}) => (
  <div className="form-group row">
    <label htmlFor={id} className="col-xs-2 col-form-label">{label}</label>
    {children}
  </div>
)

export const Calc = (props) => (
  <div style={{ margin: '0 auto' }} >
    <FormGroup label="Group A Proportion" id="group-a-input">
      <input type="number" id="group-a-input"
        value={props.groupAProportion}
        onChange={props.editGroupAProportion} />
    </FormGroup>
    <FormGroup label="Group B Proportion" id="group-b-input">
      <input type="number" id="group-b-input"
        value={props.groupBProportion}
        onChange={props.editGroupBProportion} />
    </FormGroup>
    <FormGroup label="Sampling Ratio" id="sampling-ratio-input">
      <input type="number" id="sampling-ratio-input"
        value={props.samplingRatio}
        onChange={props.editSamplingRatio} />
    </FormGroup>
    <FormGroup label="Alpha" id="alpha-input">
      <input type="number" id="alpha-input"
        value={props.alpha}
        onChange={props.editAlpha} />
    </FormGroup>
    <FormGroup label="Power" id="power-input">
      <input type="number" id="power-input"
        value={props.power}
        onChange={props.editPower} />
    </FormGroup>
    <FormGroup label="Sample Size" id="sample-size-input">
      <input type="number" id="sample-size-input"
        value={props.sampleSize}
        onChange={props.editSampleSize} />
    </FormGroup>
    <button onClick={props.calculateSampleSize}>Calculate Sample Size</button>
    <button onClick={props.calculatePower}>Calculate Power</button>

  </div>
)

Calc.propTypes = {
  groupAProportion: React.PropTypes.number.isRequired,
  groupBProportion: React.PropTypes.number.isRequired,
  samplingRatio: React.PropTypes.number.isRequired,
  power: React.PropTypes.number.isRequired,
  alpha: React.PropTypes.number.isRequired,
  sampleSize: React.PropTypes.number,

  editGroupAProportion: React.PropTypes.func.isRequired,
  editGroupBProportion: React.PropTypes.func.isRequired,
  editSamplingRatio: React.PropTypes.func.isRequired,
  editPower: React.PropTypes.func.isRequired,
  editAlpha: React.PropTypes.func.isRequired,
  editSampleSize: React.PropTypes.func.isRequired,
  calculatePower: React.PropTypes.func.isRequired,
  calculateSampleSize: React.PropTypes.func.isRequired
}

export default Calc

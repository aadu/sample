import React from 'react'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import FormFields from 'grommet/components/FormFields'
import Button from 'grommet/components/Button'
import RadioButton from 'grommet/components/RadioButton'
import CheckBox from 'grommet/components/CheckBox'
import NumberInput from 'grommet/components/NumberInput'
import Article from 'grommet/components/Article'
import Header from 'grommet/components/Header'
import Section from 'grommet/components/Section'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Tabs from 'grommet/components/Tabs'
import Tab from 'grommet/components/Tab'

export const Calc = (props) => (
  <Article>
    <Header justify="between" colorIndex="neutral-1" pad={{ 'horizontal': 'medium' }}>
      <Title>Two Proportions</Title>
    </Header>
    <Section
      // pad="large"
      colorIndex="light-2"
      justify="start"
      appCentered
      full
      primary>
      <Tabs justify="start">
        <Tab title="Sample Size">
          <Box
            colorIndex="light-1"
            pad={{ between: 'medium' }}
            full={false}
            alignSelf="start"
            separator="all"
          >
            <Form>
              <FormFields>
                <FormField label="Group A Proportion" htmlFor="group-a-input">
                  <NumberInput
                    id="group-a-input"
                    max="1.0" min="0.0" step="0.02"
                    value={props.groupAProportion}
                    onChange={props.editGroupAProportion} />
                </FormField>
                <FormField label="Group B Proportion" htmlFor="group-b-input">
                  <NumberInput
                    id="group-b-input"
                    max="1.0" min="0.0" step="0.02"
                    value={props.groupBProportion}
                    onChange={props.editGroupBProportion} />
                </FormField>
                <FormField label="Sampling Ratio" htmlFor="sampling-ratio-input"
                  help={props.samplingRatio}>
                  {/* <NumberInput */}
                  <input type="range"
                    id="sampling-ratio-input"
                    max="1.0" min="0.0" step="0.01"
                    value={props.samplingRatio}
                    onChange={props.editSamplingRatio} />
                </FormField>
                <FormField label="Significance Level" htmlFor="alpha-input">
                  <NumberInput
                    id="alpha-input"
                    max="1.0" min="0.0" step="0.01"
                    value={props.alpha}
                    onChange={props.editAlpha} />
                </FormField>
                <FormField label="Tails">
                  <RadioButton id="tails-2" label="2 Tailed" name="tails"
                    checked={props.tails === 2}
                    onChange={props.selectTwoTail} />
                  <RadioButton id="tails-1" label="1 Tailed" name="tails"
                    checked={props.tails === 1}
                    onChange={props.selectOneTail} />
                </FormField>
                <FormField label="Power" htmlFor="power-input">
                  <NumberInput
                    id="power-input"
                    max="1.0" min="0.0" step="0.05"
                    value={props.power}
                    onChange={props.editPower} />
                </FormField>
                <FormField label="Sample Size" htmlFor="sample-size-input">
                  <NumberInput
                    id="sample-size-input"
                    min="5" step="10"
                    value={props.sampleSize}
                    onChange={props.editSampleSize} />
                </FormField>
              </FormFields>
              <Box pad={{ between: 'medium', vertical: 'medium' }} align="center">
                <Button onClick={props.calculateSampleSize} label="Calculate Sample Size" />
                {/* <Button onClick={props.calculatePower} label="Calculate Power" secondary /> */}
              </Box>
            </Form>
          </Box>
        </Tab>
        <Tab title="Power">
          <p>Hello</p>
        </Tab>
      </Tabs>
    </Section>
  </Article>
    )

Calc.propTypes = {
  groupAProportion: React.PropTypes.number.isRequired,
  groupBProportion: React.PropTypes.number.isRequired,
  samplingRatio: React.PropTypes.number.isRequired,
  power: React.PropTypes.number.isRequired,
  alpha: React.PropTypes.number.isRequired,
  sampleSize: React.PropTypes.number,
  tails: React.PropTypes.oneOf([1, 2]),

  editGroupAProportion: React.PropTypes.func.isRequired,
  editGroupBProportion: React.PropTypes.func.isRequired,
  editSamplingRatio: React.PropTypes.func.isRequired,
  editPower: React.PropTypes.func.isRequired,
  editAlpha: React.PropTypes.func.isRequired,
  editSampleSize: React.PropTypes.func.isRequired,
  calculatePower: React.PropTypes.func.isRequired,
  calculateSampleSize: React.PropTypes.func.isRequired,
  selectOneTail: React.PropTypes.func.isRequired,
  selectTwoTail: React.PropTypes.func.isRequired
}

export default Calc

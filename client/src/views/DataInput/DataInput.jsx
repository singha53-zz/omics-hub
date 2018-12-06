import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from 'actions';
import withStyles from '@material-ui/core/styles/withStyles';

import FormComp from 'views/DataInput/FormComp'

import { ResponsiveBubbleHtml } from '@nivo/circle-packing';
import { ResponsiveBar } from '@nivo/bar';

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none'
  },
  App:  {
						top: '10px',
						right: 0,
						bottom: 0,
						left: '15%',
						height: '300px',
						width: '100%'
					}
};

const bubbleData = [
  {
    "country": "AD",
    "hot dog": 167,
    "hot dogColor": "hsl(234, 70%, 50%)",
    "burger": 128,
    "burgerColor": "hsl(347, 70%, 50%)",
    "sandwich": 33,
    "sandwichColor": "hsl(144, 70%, 50%)",
    "kebab": 117,
    "kebabColor": "hsl(94, 70%, 50%)",
    "fries": 192,
    "friesColor": "hsl(117, 70%, 50%)",
    "donut": 197,
    "donutColor": "hsl(267, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 142,
    "hot dogColor": "hsl(141, 70%, 50%)",
    "burger": 139,
    "burgerColor": "hsl(42, 70%, 50%)",
    "sandwich": 58,
    "sandwichColor": "hsl(200, 70%, 50%)",
    "kebab": 142,
    "kebabColor": "hsl(277, 70%, 50%)",
    "fries": 93,
    "friesColor": "hsl(201, 70%, 50%)",
    "donut": 132,
    "donutColor": "hsl(72, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 80,
    "hot dogColor": "hsl(334, 70%, 50%)",
    "burger": 32,
    "burgerColor": "hsl(292, 70%, 50%)",
    "sandwich": 169,
    "sandwichColor": "hsl(230, 70%, 50%)",
    "kebab": 111,
    "kebabColor": "hsl(189, 70%, 50%)",
    "fries": 22,
    "friesColor": "hsl(81, 70%, 50%)",
    "donut": 57,
    "donutColor": "hsl(227, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 167,
    "hot dogColor": "hsl(193, 70%, 50%)",
    "burger": 90,
    "burgerColor": "hsl(340, 70%, 50%)",
    "sandwich": 62,
    "sandwichColor": "hsl(158, 70%, 50%)",
    "kebab": 43,
    "kebabColor": "hsl(193, 70%, 50%)",
    "fries": 94,
    "friesColor": "hsl(342, 70%, 50%)",
    "donut": 8,
    "donutColor": "hsl(311, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 11,
    "hot dogColor": "hsl(100, 70%, 50%)",
    "burger": 169,
    "burgerColor": "hsl(90, 70%, 50%)",
    "sandwich": 35,
    "sandwichColor": "hsl(169, 70%, 50%)",
    "kebab": 189,
    "kebabColor": "hsl(248, 70%, 50%)",
    "fries": 16,
    "friesColor": "hsl(36, 70%, 50%)",
    "donut": 14,
    "donutColor": "hsl(216, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 7,
    "hot dogColor": "hsl(164, 70%, 50%)",
    "burger": 144,
    "burgerColor": "hsl(103, 70%, 50%)",
    "sandwich": 112,
    "sandwichColor": "hsl(60, 70%, 50%)",
    "kebab": 15,
    "kebabColor": "hsl(83, 70%, 50%)",
    "fries": 57,
    "friesColor": "hsl(262, 70%, 50%)",
    "donut": 26,
    "donutColor": "hsl(157, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 58,
    "hot dogColor": "hsl(264, 70%, 50%)",
    "burger": 109,
    "burgerColor": "hsl(179, 70%, 50%)",
    "sandwich": 108,
    "sandwichColor": "hsl(46, 70%, 50%)",
    "kebab": 137,
    "kebabColor": "hsl(140, 70%, 50%)",
    "fries": 5,
    "friesColor": "hsl(195, 70%, 50%)",
    "donut": 96,
    "donutColor": "hsl(232, 70%, 50%)"
  }
]


const DataInput = ({ submitDataForm, history }) => {
    return (
      <div>
    <FormComp onSubmit={data => {
      submitDataForm(data, history)
    }} />
    <div style={styles.App}>
<ResponsiveBar
  margin={{
    top: 60,
    right: 80,
    bottom: 60,
    left: 80
  }}
  data={bubbleData}
  indexBy="country"
  keys={[
    'hot dogs',
    'burgers',
    'sandwich',
    'kebab',
    'fries',
    'donut'
  ]}
  padding={0.2}
  labelTextColor="inherit:darker(1.4)"
  labelSkipWidth={16}
  labelSkipHeight={16}
  groupMode="grouped"
/>
</div>
    </div>
    )
}

export default connect(null, actions)(withRouter(withStyles(styles)(DataInput)));
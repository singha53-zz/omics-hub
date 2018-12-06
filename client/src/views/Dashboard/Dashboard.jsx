import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Store from '@material-ui/icons/Store';
import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import Accessibility from '@material-ui/icons/Accessibility';
import BugReport from '@material-ui/icons/BugReport';
import Code from '@material-ui/icons/Code';
import Cloud from '@material-ui/icons/Cloud';
// core components
import GridItem from 'components/Dashboard/Grid/GridItem.jsx';
import GridContainer from 'components/Dashboard/Grid/GridContainer.jsx';
import Table from 'components/Dashboard/Table/Table.jsx';
import Tasks from 'components/Dashboard/Tasks/Tasks.jsx';
import CustomTabs from 'components/Dashboard/CustomTabs/CustomTabs.jsx';
import Danger from 'components/Dashboard/Typography/Danger.jsx';
import Card from 'components/Dashboard/Card/Card.jsx';
import CardHeader from 'components/Dashboard/Card/CardHeader.jsx';
import CardIcon from 'components/Dashboard/Card/CardIcon.jsx';
import CardBody from 'components/Dashboard/Card/CardBody.jsx';
import CardFooter from 'components/Dashboard/Card/CardFooter.jsx';

import { bugs, website, server } from 'variables/general.jsx';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from 'variables/charts.jsx';

import dashboardStyle from 'assets/jss/views/dashboardStyle.jsx';

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
    "PC": "PC1",
    "pca": 21,
    "pcaColor": "hsl(314, 70%, 50%)"
  },
  {
    "PC": "PC2",
    "pca": 139,
    "pcaColor": "hsl(147, 70%, 50%)"
  },
  {
    "PC": "PC3",
    "pca": 88,
    "pcaColor": "hsl(189, 70%, 50%)"
  },
  {
    "PC": "PC4",
    "pca": 84,
    "pcaColor": "hsl(291, 70%, 50%)"
  },
  {
    "PC": "PC5",
    "pca": 174,
    "pcaColor": "hsl(344, 70%, 50%)"
  },
  {
    "PC": "PC6",
    "pca": 145,
    "pcaColor": "hsl(284, 70%, 50%)"
  },
  {
    "PC": "PC7",
    "pca": 83,
    "pcaColor": "hsl(304, 70%, 50%)"
  }
]

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  n() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.n
      : '';
  }

  p() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.p
      : '';
  }

  var() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.var
      : '';
  }

  acc() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.accuracy
      : '';
  }

  var_prop() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.var_prop
      : '';
  }

  features() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.features
      : '';
  }

  loadings() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.loadings
      : '';
  }

  compOne_gpOne() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.comps.gpOne.compOne
      : '';
  }
  compOne_gpTwo() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.comps.gpTwo.compOne
      : '';
  }
  compTwo_gpOne() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.comps.gpOne.compTwo
      : '';
  }
  compTwo_gpTwo() {
    return this.props.auth && this.props.auth.analysis
      ? this.props.auth.analysis.comps.gpTwo.compTwo
      : '';
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Samples</p>
                <h3 className={classes.cardTitle}>{this.n()}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Get more space
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Variables</p>
                <h3 className={classes.cardTitle}>{this.p()}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Prop. Var. Exp.</p>
                <h3 className={classes.cardTitle}>{this.var()}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Tracked from Github
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>KNN-Accuray</p>
                <h3 className={classes.cardTitle}>{this.acc()}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="nil">
              <div style={styles.App}>
                {this.props.auth && this.props.auth.analysis ? (
    <ResponsiveBar
        data={bubbleData}
        keys={[
            "pca"
        ]}
        indexBy="PC"
        margin={{
            "top": 10,
            "right": 90,
            "bottom": 40,
            "left": 50
        }}
        padding={0.3}
        colors="nivo"
        colorBy="id"
        defs={[
            {
                "id": "dots",
                "type": "patternDots",
                "background": "inherit",
                "color": "#38bcb2",
                "size": 4,
                "padding": 1,
                "stagger": true
            }
        ]}
        fill={[
            {
                "match": {
                    "id": "pca"
                },
                "id": "dots"
            }
        ]}
        borderColor="inherit:darker(1.6)"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "PC",
            "legendPosition": "middle",
            "legendOffset": 32
        }}
        axisLeft={{
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "food",
            "legendPosition": "middle",
            "legendOffset": -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "dataFrom": "keys",
                "anchor": "bottom-right",
                "direction": "column",
                "justify": false,
                "translateX": 120,
                "translateY": 0,
                "itemsSpacing": 2,
                "itemWidth": 100,
                "itemHeight": 20,
                "itemDirection": "left-to-right",
                "itemOpacity": 0.85,
                "symbolSize": 20,
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemOpacity": 0
                        }
                    }
                ]
            }
        ]}
    /> ) : (
                  <ChartistGraph
                    className="ct-chart"
                    data={dailySalesChart.data}
                    type="Line"
                    options={dailySalesChart.options}
                    listener={dailySalesChart.animation}
                  />
                )}
                </div>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Sales</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{' '}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                {/* Component plots */}
                {this.props.auth && this.props.auth.analysis ? (
                  <Plot
                    data={[
                      {
                        x: this.compOne_gpOne(),
                        y: this.compTwo_gpOne(),
                        type: 'scatter',
                        mode: 'markers',
                        marker: { color: 'red' }
                      },
                      {
                        type: 'scatter',
                        mode: 'markers',
                        x: this.compOne_gpTwo(),
                        y: this.compTwo_gpTwo(),
                        marker: { color: 'blue' }
                      }
                    ]}
                    layout={{
                      width: 350,
                      height: 240,
                      title: 'Sample clustering',
                      autosize: true,
                      margin: { l: 50, r: 30, b: 50, t: 30, pad: 1 }
                    }}
                  />
                ) : (
                  <ChartistGraph
                    className="ct-chart"
                    data={emailsSubscriptionChart.data}
                    type="Bar"
                    options={emailsSubscriptionChart.options}
                    responsiveOptions={
                      emailsSubscriptionChart.responsiveOptions
                    }
                    listener={emailsSubscriptionChart.animation}
                  />
                )}
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                {this.props.auth && this.props.auth.analysis ? (
                  <Plot
                    data={[
                      {
                        x: this.features(),
                        y: this.loadings(),
                        type: 'scatter',
                        mode: 'lines+points',
                        marker: { color: 'red' }
                      },
                      { type: 'bar', x: this.features(), y: this.loadings() }
                    ]}
                    layout={{
                      width: 350,
                      height: 240,
                      title: 'Variable importance',
                      autosize: true,
                      margin: { l: 50, r: 30, b: 50, t: 30, pad: 1 }
                    }}
                  />
                ) : (
                  <ChartistGraph
                    className="ct-chart"
                    data={completedTasksChart.data}
                    type="Line"
                    options={completedTasksChart.options}
                    listener={completedTasksChart.animation}
                  />
                )}
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: 'Bugs',
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  )
                },
                {
                  tabName: 'Website',
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: 'Server',
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={['ID', 'Name', 'Salary', 'PC']}
                  tableData={[
                    ['1', 'Dakota Rice', '$36,738', 'Niger'],
                    ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
                    ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
                    ['4', 'Philip Chaney', '$38,735', 'Korea, South']
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withStyles(dashboardStyle)(Dashboard));

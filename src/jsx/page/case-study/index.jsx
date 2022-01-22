import React from 'react';

import {Box, Typography } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

import TrueDailyPnl from './page/true-daily-pnl';
import SystematicRiskFiling from './page/systematic-risk-filing';

const CaseStudy = () => {
  return (
    <>
      <Box style={{ paddingTop: '8rem', paddingBottom: '4rem', marginTop: '-4rem' }} id='case-study'>
        <Typography variant="h2" style={{ textTransform: "uppercase", textAlign: "center", color: blueGrey[700] }}>Case Studies</Typography>
      </Box>
      <TrueDailyPnl />
      <SystematicRiskFiling />
    </>
  )
}

export default CaseStudy;
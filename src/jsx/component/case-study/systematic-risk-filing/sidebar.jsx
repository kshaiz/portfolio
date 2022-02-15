import { React } from 'react';

import { Box, Typography, Link } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

import { jumpTo } from '../../../../js/script';

const Sidebar = () => {
    return (
        <>
        <Box>
            <small style={{ color: `${grey[500]}` }}>CASE STUDY / ARCESIUM</small>
            <Typography variant="h3">
                Systematic Risk Filing
            </Typography>
            <Typography variant="h5">
                Regulatory filing portal design
            </Typography>
            <Box style={{ marginTop: '2rem' }}>
                <small style={{ color: `${grey[500]}` }}>
                COLLABORATORS
                </small>
                <Typography variant="body2" style={{ lineHeight: 1.75 }}>
                Shaiz K.<span style={{ color: `${grey[500]}` }}> / Product Designer</span>
                </Typography>
                <Typography variant="body2" style={{ lineHeight: 1.75 }}>
                Arifa Kazi<span style={{ color: `${grey[500]}` }}> / Product Owner</span>
                </Typography>
                <Typography variant="body2" style={{ lineHeight: 1.75 }}>
                Sahil Agarwal<span style={{ color: `${grey[500]}` }}> / Developer</span>
                </Typography>
            </Box>
            <Box style={{ marginTop: '1.5rem' }}>
                <small style={{ color: `${grey[500]}` }}>
                TABLE OF CONTENTS
                </small><br />
                <Link style={{ lineHeight: 1.75 }} onClick={() => {jumpTo('application-overview')}}>Application Overview</Link><br />
                <Link style={{ lineHeight: 1.75 }} onClick={() => {jumpTo('problem-description')}}>Problem Description</Link><br />
                <Link style={{ lineHeight: 1.75 }} onClick={() => {jumpTo('business-goal')}}>Business Goals</Link><br />
                <Link style={{ lineHeight: 1.75 }} onClick={() => {jumpTo('design-process')}}>Design Process</Link><br />
                <Link style={{ lineHeight: 1.75 }} onClick={() => {jumpTo('current-application-analysis')}}>Current Application Analysis</Link><br />
                <Link style={{ lineHeight: 1.75 }} onClick={() => {jumpTo('user-archetype')}}>User Archetypes</Link><br />
                <Link style={{ lineHeight: 1.75 }} onClick={() => {jumpTo('user-flow')}}>User Flow</Link><br />
                <Link style={{ lineHeight: 1.75 }} onClick={() => {jumpTo('whiteboard-session')}}>Whiteboard Session</Link><br />
                <Link style={{ lineHeight: 1.75 }} onClick={() => {jumpTo('prototype-feedback')}}>Prototypes &amp; Feedback</Link><br />
                <Link style={{ lineHeight: 1.75 }} onClick={() => {jumpTo('final-deliverable')}}>Final Deliverables</Link><br />
                <Link style={{ lineHeight: 1.75 }} onClick={() => {jumpTo('related-project')}}>Related Projects</Link><br />
            </Box>
            </Box>
        </>
    )
}

export default Sidebar;
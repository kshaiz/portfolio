import { React } from 'react';

import { Typography } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';

const DesignProcess = () => {
  return (
    <>
      <Typography variant="h4" id="design-process" style={{ paddingTop: '4rem', color: pink[300] }}>Design Process</Typography>
      <ol>
        <li>
          <Typography>
            <strong>Research:</strong> Support tickets logged in the last 3 months were analyzed to identify areas of improvement in the workflow, establish user archetypes and map out process flows. The current application was discussed to visually connect the requirements. Details for various fields required were also captured at this stage.
          </Typography>
        </li>
        <li style={{ marginTop: '1rem' }}>
          <Typography>
            <strong>User Archetypes &amp; Service Blueprint:</strong> Identified user archetypes based on frequency and usage patterns. Service blueprint was created to highlight touch-points between the various archetypes and the application. The goal of this was to come up with a strategy on how to layer the information.
          </Typography>
        </li>
        <li style={{ marginTop: '1rem' }}>
          <Typography>
            <strong>Wireframes &amp; Whiteboarding:</strong> Wireframes were created and later discussed in a whiteboarding session. Focus of this session was to pull the ideas from our research, as well as to ensure parity with the rest of the platform in terms of layout and interactions.
          </Typography>
        </li>
        <li style={{ marginTop: '1rem' }}>
          <Typography>
            <strong>Prototyping &amp; Review Meetings:</strong> Prototypes were created. Meetings with various stakeholders were held to gather their feedback and further improve the design.
          </Typography>
        </li>
        <li style={{ marginTop: '1rem' }}>
          <Typography>
            <strong>Final Deliverables:</strong> A final version of the prototype was presented to the stakeholders to get a sign-off before handing it over for development. Non-critical feedback was documented as notes for developers to incorporate during implementation.
          </Typography>
        </li>
      </ol>
    </>
  )
}

export default DesignProcess;
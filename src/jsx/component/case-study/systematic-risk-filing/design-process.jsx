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
            <strong>Research:</strong> Interviews were conducted with existing users to understand the current process, and their pain points.
          </Typography>
        </li>
        <li style={{ marginTop: '1rem' }}>
          <Typography>
            <strong>User Journey:</strong> User journey was mapped to understand the flow of information across different user groups, and to understand their needs.
          </Typography>
        </li>
        <li style={{ marginTop: '1rem' }}>
          <Typography>
            <strong>Wireframes &amp; Whiteboarding:</strong> Wireframes were created and later discussed in a whiteboarding session. Focus of this session was to pull the ideas from our research to improve the same, as well as to ensure parity with the rest of the platform in terms of layout and interactions.
          </Typography>
        </li>
        <li style={{ marginTop: '1rem' }}>
          <Typography>
            <strong>Prototyping &amp; Review Meetings:</strong> Prototypes were created and meetings with various stakeholders were held to gather their feedback and further improve the design.
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
import { Stack } from '@mui/material'
import { ResumeToolset } from '../../components/other'
import adobeai from '../../assets/resume/adobeai.png'
import adobeid from '../../assets/resume/adobeid.png'
import adobeps from '../../assets/resume/adobeps.png'
import css from '../../assets/resume/css.png'
import figma from '../../assets/resume/figma.png'
import html from '../../assets/resume/html.png'
import js from '../../assets/resume/js.png'
import react from '../../assets/resume/react.png'
import scss from '../../assets/resume/scss.png'

const Toolset = () => {
  return (
    <Stack mt={2} direction="row" spacing={0} flexWrap="wrap">
      <ResumeToolset src={figma} alt="Figma Logo" caption="Figma" />
      <ResumeToolset src={react} alt="React Logo" caption="React" />
      <ResumeToolset src={js} alt="JS Logo" caption="JS" />
      <ResumeToolset src={html} alt="HTML Logo" caption="HTML" />
      <ResumeToolset src={css} alt="CSS Logo" caption="CSS" />
      <ResumeToolset src={scss} alt="SCSS Logo" caption="SCSS" />
      <ResumeToolset
        src={adobeai}
        alt="Adobe Illustrator Logo"
        caption="Adobe Illustrator"
      />
      <ResumeToolset
        src={adobeps}
        alt="Adobe Photoshop Logo"
        caption="Adobe Photoshop"
      />
      <ResumeToolset
        src={adobeid}
        alt="Adobe InDesign Logo"
        caption="Adobe InDesign"
      />
    </Stack>
  )
}

export default Toolset

import { Stack, Chip, Divider, Button, Typography } from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import { Headline, PageContent } from '../components/other'
import Experience from './resume/experience'
import Education from './resume/education'
import Toolset from './resume/toolset'

const Resume = () => {
  const [activeSection, setActiveSection] = useState('sectionExperience')
  const sectionExperienceRef = useRef(null)
  const sectionEducationRef = useRef(null)

  const [quickNavigationVisibility, setQuickNavigationVisibility] =
    useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const sectionExperienceTop =
        sectionExperienceRef.current.getBoundingClientRect().top
      const sectionEducationTop =
        sectionEducationRef.current.getBoundingClientRect().top
      const sectionEducationHeight =
        sectionEducationRef.current.getBoundingClientRect().height
      const windowHeight = window.innerHeight

      if (
        sectionExperienceTop < windowHeight / 2 &&
        windowHeight - sectionEducationTop < sectionEducationHeight
      ) {
        setActiveSection('sectionExperience')
      } else if (windowHeight - sectionEducationTop > sectionEducationHeight) {
        setActiveSection('sectionEducation')
      }

      const pageHeadlineTop = document
        .getElementById('pg-headline')
        .getBoundingClientRect().top

      if (pageHeadlineTop < -154) {
        setQuickNavigationVisibility(false)
      } else {
        setQuickNavigationVisibility(true)
      }

      const elements = document.querySelectorAll('.fade-in-block')
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          el.style.opacity = 1
          el.style.transform = 'translateY(0)'
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (section) => {
    if (section === 'sectionExperience') {
      sectionExperienceRef.current.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        const sectionExperienceTop =
          sectionExperienceRef.current.getBoundingClientRect().top
        if (sectionExperienceTop < 90)
          window.scrollBy({
            top: sectionExperienceTop - 90,
            behavior: 'smooth',
          })
      }, 500)
    } else if (section === 'sectionEducation') {
      sectionEducationRef.current.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        const sectionEducationTop =
          sectionEducationRef.current.getBoundingClientRect().top

        if (sectionEducationRef.current.getBoundingClientRect().top < 90)
          window.scrollBy({ top: sectionEducationTop - 90, behavior: 'smooth' })
      }, 500)
    }
  }

  return (
    <>
      <Headline heading="Resume" subHeading="How I got here" />

      <PageContent>
        <Stack
          direction="row"
          spacing={2}
          style={{
            position: quickNavigationVisibility ? 'absolute' : 'fixed',
            top: quickNavigationVisibility ? '' : 28,
            marginLeft: quickNavigationVisibility ? '' : 76,
            zIndex: quickNavigationVisibility ? '' : 1001,
            transition: 'all 0.3s ease-in-out',
          }}
        >
          {!quickNavigationVisibility && (
            <Divider orientation="vertical" flexItem mr={2} />
          )}
          <Stack direction="row" alignItems={'center'} spacing={1}>
            <Chip
              size="small"
              label="Work Experience"
              onClick={() => scrollToSection('sectionExperience')}
              color="secondary"
              variant={
                activeSection === 'sectionExperience' ? 'filled' : 'outlined'
              }
              sx={
                activeSection !== 'sectionExperience' &&
                !quickNavigationVisibility
                  ? { background: '#ffffff' }
                  : {}
              }
            />
            <Chip
              size="small"
              label="Education"
              onClick={() => scrollToSection('sectionEducation')}
              color="secondary"
              variant={
                activeSection === 'sectionEducation' ? 'filled' : 'outlined'
              }
              sx={
                activeSection !== 'sectionEducation' &&
                !quickNavigationVisibility
                  ? { background: '#ffffff' }
                  : {}
              }
            />
            <Divider orientation="vertical" sx={{ height: 12 }} />
            <Button
              size="small"
              variant="outlined"
              onClick={() => {
                const link = document.createElement('a')
                link.href = '../assets/shaiz-kunhimohammed-resume.pdf'
                link.download = '../assets/shaiz-kunhimohammed-resume.pdf'
                link.click()
              }}
            >
              Download Copy
            </Button>
          </Stack>
        </Stack>
        <Stack spacing={8} pt={8}>
          <div ref={sectionExperienceRef}>
            <Typography
              variant="h2"
              component="h2"
              className="fade-in-block text--serif"
            >
              Work Experience
            </Typography>
            <Stack spacing={8} ref={sectionExperienceRef} sx={{ mt: 4 }}>
              <Experience />
            </Stack>
          </div>
          <Divider
            orientation="horizontal"
            className="fade-in-block"
            sx={{ width: 96 }}
          />
          <div ref={sectionEducationRef}>
            <Typography
              variant="h2"
              component="h2"
              className="fade-in-block text--serif"
            >
              Education
            </Typography>
            <Education />
          </div>
          <Divider
            orientation="horizontal"
            className="fade-in-block"
            sx={{ width: 96 }}
          />
          <div className="fade-in-block">
            <Typography variant="h2" component="h2" className="text--serif">
              Toolsets
            </Typography>
            <Typography>
              Throughout my career, I've used a range of tools to deliver
              solutions tailored to each project's unique needs.
            </Typography>
            <Toolset />
          </div>
        </Stack>
      </PageContent>
    </>
  )
}

export default Resume

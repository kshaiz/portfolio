import { Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { PageContent, Slideshow } from '../components/other'
import GLightbox from 'glightbox'
import Theme from '../style/theme'

import arcCaDashVol from '../assets/other-works/arcesium/corporate-action/dashboard-voluntary.png'
import arcCaDashMand from '../assets/other-works/arcesium/corporate-action/dashboard-mandatory.png'

import arcIamResult from '../assets/other-works/arcesium/investor-account-manager/search-result.png'
import arcIamDialog from '../assets/other-works/arcesium/investor-account-manager/create-dialog.png'
import arcIamWizard from '../assets/other-works/arcesium/investor-account-manager/create-wizard.png'
import arcIamDetail from '../assets/other-works/arcesium/investor-account-manager/detail.png'
import arcIamDetailDiff from '../assets/other-works/arcesium/investor-account-manager/detail-difference.png'

import arcPtapZero from '../assets/other-works/arcesium/personal-trade-approval-portal/zero-state.png'
import arcPtapContent from '../assets/other-works/arcesium/personal-trade-approval-portal/sample-form.png'

import arcEvManLanding from '../assets/other-works/arcesium/event-manager/zero-state.png'
import arcEvManDialog1 from '../assets/other-works/arcesium/event-manager/create-1.png'
import arcEvManDialog2 from '../assets/other-works/arcesium/event-manager/create-2.png'
import arcEvManDialog3 from '../assets/other-works/arcesium/event-manager/create-3.png'

import mettlTutrrHome from '../assets/other-works/mettl/tutrr-homepage.png'
import mettlTutrrEditor from '../assets/other-works/mettl/tutrr-algebra-editor.png'

import mettlMrktScreenshot from '../assets/other-works/mettl/marketing-video.png'
import mettlMrktThumb from '../assets/other-works/mettl/marketing-video-thumbnail.png'

const galleryArcCaDash = GLightbox({
  elements: [
    {
      href: arcCaDashVol,
      type: 'image',
      title: 'Corporate Actions Dashboard (1/2)',
      description: 'Voluntary corporate actions view of the dashboard',
    },
    {
      href: arcCaDashMand,
      type: 'image',
      title: 'Corporate Actions Dashboard (2/2)',
      description: 'Mandatory corporate actions view of the dashboard',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {},
})

const galleryArcIam = GLightbox({
  elements: [
    {
      href: arcIamResult,
      type: 'image',
      title: 'Investory Accounts Manager (1/5)',
      description: 'Search results page',
    },
    {
      href: arcIamDialog,
      type: 'image',
      title: 'Investory Accounts Manager (2/5)',
      description: 'Dialog box with minimal fields to create a new account',
    },
    {
      href: arcIamWizard,
      type: 'image',
      title: 'Investory Accounts Manager (3/5)',
      description: 'Optional wizard to create a new account',
    },
    {
      href: arcIamDetail,
      type: 'image',
      title: 'Investory Accounts Manager (4/5)',
      description: 'Details page',
    },
    {
      href: arcIamDetailDiff,
      type: 'image',
      title: 'Investory Accounts Manager (5/5)',
      description: 'Historical view with differences highlighted',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {},
})

const galleryArcPtap = GLightbox({
  elements: [
    {
      href: arcPtapZero,
      type: 'image',
      title: 'Personal Trade Approvals Portal (1/2)',
      description: 'Application view without any data',
    },
    {
      href: arcPtapContent,
      type: 'image',
      title: 'Personal Trade Approvals Portal (2/2)',
      description: 'Application view with data',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {},
})

const galleryArcEvMan = GLightbox({
  elements: [
    {
      href: arcEvManLanding,
      type: 'image',
      title: 'Event Manager (1/4)',
      description: 'Landing page',
    },
    {
      href: arcEvManDialog1,
      type: 'image',
      title: 'Event Manager (2/4)',
      description: 'Dialog box for creating a new event',
    },
    {
      href: arcEvManDialog2,
      type: 'image',
      title: 'Event Manager (3/4)',
      description: 'Dialog box for creating a new event',
    },
    {
      href: arcEvManDialog3,
      type: 'image',
      title: 'Event Manager (4/4)',
      description: 'Dialog box for creating a new event',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {},
})

const galleryMettlTutrr = GLightbox({
  elements: [
    {
      href: mettlTutrrHome,
      type: 'image',
      title: 'Online Maths Platform (1/2)',
      description: 'Homepage design',
    },
    {
      href: mettlTutrrEditor,
      type: 'image',
      title: 'Online Maths Platform (2/2)',
      description: 'Algebra editor',
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {},
})

const galleryMettlMrkt = GLightbox({
  elements: [
    {
      href: mettlMrktScreenshot,
      type: 'image',
      title: 'Marketing Video (1/2)',
      description: 'A still from the video',
    },
    {
      thumbHref: mettlMrktThumb,
      href: 'https://www.youtube.com/watch?v=SGg19b0nAMA',
      type: 'video',
      title: 'Marketing Video (2/2)',
      description: `If you are having trouble viewing the video, <a href="https://youtu.be/SGg19b0nAMA">click here</a> to view on YouTube`,
    },
  ],
  touchNavigation: true,
  loop: false,
  autoplayVideos: true,
  onOpen: () => {},
  beforeSlideLoad: (slide, data) => {},
})

const OtherWorks = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-block')
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          el.style.opacity = 1
          el.style.transform = 'translateY(0)'
        }
      })
      const heading = document.querySelector('.fade-in-heading')
      console.log(heading)
      const rect = heading.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        heading.style.opacity = 1
        heading.style.transform = 'translateY(0)'
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: `0 0 ${Theme.shape.borderRadiusLarge}px ${Theme.shape.borderRadiusLarge}px`,
          padding: `${Theme.spacing(4)}`,
        }}
        id="pg-headline"
        className="fade-in-heading"
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: Theme.typography.fontWeightBold,
            color: '#05032a',
          }}
        >
          Other works
        </Typography>
      </Stack>

      <PageContent
        style={{ padding: `${Theme.spacing(8)} ${Theme.spacing(4)}` }}
      >
        <Stack spacing={8}>
          <Slideshow
            title="Corporate Actions Dashboard"
            description="Dashboard to enable co-ordination between different teams (front-office, compliance, middle-office) to seek election preferences and approvals for voluntary corporate actions."
            gallery={galleryArcCaDash}
          />
          <Slideshow
            title="Investor Accounts Manager"
            description="Part of a series of application to onboard and manager new clients to the platform."
            gallery={galleryArcIam}
          />
          <Slideshow
            title="Personal Trade Approvals Portal"
            description="Compliance portal for employees to log personal trade requests for approval."
            gallery={galleryArcPtap}
          />
          <Slideshow
            title="Event Manager"
            description="Application to create regulatory filing events and manage user
                notifications."
            gallery={galleryArcEvMan}
          />
          <Slideshow
            title="Online Maths Platform"
            description="Skeuomorphic explorations for an online maths platform where kids (aged 12-16 yrs.) can solve problems from various maths topics, get instant feedback on their attempts and improve their performance through constant practice. Given the target audience, the focus was on increasing engagement with a compelling visual design and actionable feedbacks."
            gallery={galleryMettlTutrr}
          />
          <Slideshow
            title="Online Maths Platform"
            description="Skeuomorphic explorations for an online maths platform where kids (aged 12-16 yrs.) can solve problems from various maths topics, get instant feedback on their attempts and improve their performance through constant practice. Given the target audience, the focus was on increasing engagement with a compelling visual design and actionable feedbacks."
            gallery={galleryMettlMrkt}
          />
        </Stack>
      </PageContent>
    </>
  )
}

export default OtherWorks

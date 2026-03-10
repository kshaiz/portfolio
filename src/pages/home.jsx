import {
  Headline,
  HomeCaseStudy,
  HomeCaseStudySmall,
  PageContent,
} from '../components/other'
import { Stack, Typography, Divider, Box } from '@mui/material'
import Theme from '../style/theme'
import { useEffect } from 'react'
import Gradient1 from '../assets/gradient-1.png'
import Gradient2 from '../assets/gradient-2.png'
import Gradient3 from '../assets/gradient-3.png'
import { ReactComponent as BrokenImage } from '../assets/broken-image.svg'
import ImgCaseStudyContentAdvisor from '../assets/case-study/content-advisor.png'
import ImgCaseStudyLocalSeo from '../assets/case-study/local-seo.png'
import ImgCaseStudyDashboard from '../assets/case-study/dashboard.png'
import ImgCaseStudyPnl from '../assets/case-study/pnl.png'
import ImgCaseStudySrf from '../assets/case-study/srf.png'

const Home = () => {
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
        direction="row"
        spacing={2}
        alignItems={'center'}
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: `0 0 ${Theme.shape.borderRadiusLarge}px ${Theme.shape.borderRadiusLarge}px`,
        }}
        className="fade-in-heading"
      >
        <Headline
          heading="Hi, I'm Shaiz,"
          subHeading="Designing user-focused products across industries."
          description="I've spent over a decade designing products & experiences that meet user needs by aligning with business objectives. I've collaborated across various teams, spanning from startups to big corporations, on products in sectors like SEO, fintech, ad marketplace, and eLearning."
          style={{ maxWidth: { xs: '', md: '500' } }}
        />
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            width: '100%',
            textAlign: 'center',
          }}
        >
          <BrokenImage height="280" />
        </Box>
      </Stack>

      <PageContent>
        <Stack spacing={4}>
          <HomeCaseStudy
            backgroundImage={Gradient1}
            caseStudyimage={ImgCaseStudyContentAdvisor}
            imagePosition="left"
            heading="Translating complex SEO data into an intuitive, AI-powered content workflow"
            description="This case study details the UX strategy behind Content Advisor, a tool built to help marketers create SEO-optimized content with confidence. By integrating AI insights into a familiar editorial flow, we streamlined the user experience by reducing cognitive load, and supporting content teams in scaling their output without  sacrificing quality or search performance."
            className="fade-in-block"
          />
          <HomeCaseStudy
            backgroundImage={Gradient2}
            caseStudyimage={ImgCaseStudyLocalSeo}
            imagePosition="right"
            heading="Designing a comprehensive local listings solution"
            description="This case study highlights how BrightEdge's Local SEO tool simplifies managing business listings, reviews, and performance across major map platforms—all in one streamlined interface."
            className="fade-in-block"
          />
          <HomeCaseStudy
            backgroundImage={Gradient3}
            caseStudyimage={ImgCaseStudyDashboard}
            imagePosition="left"
            heading="Redesigning dashboard setup to help users find and use the right templates more easily"
            description="A UX case study on how we improved engagement with BrightEdge dashboards by introducing a guided discovery flow, clearer template descriptions, and more intuitive customization—leading to higher user confidence and reduced friction for both new and expert users."
            className="fade-in-block"
          />
          <Stack direction="row" spacing={4} className="fade-in-block">
            <HomeCaseStudySmall
              color="deepPurple"
              image={ImgCaseStudyPnl}
              tilePosition="left"
              heading="Driving smarter decisions with a purpose-built dashboard"
              // className="fade-in-block"
            />
            <HomeCaseStudySmall
              color="pink"
              image={ImgCaseStudySrf}
              tilePosition="right"
              // heading="Streamlining compliance to simplify risk filing and reduce operational friction"
              heading="Streamlining compliance for operational efficiency"
              // className="fade-in-block"
            />
          </Stack>
        </Stack>
      </PageContent>
    </>
  )
}

export default Home

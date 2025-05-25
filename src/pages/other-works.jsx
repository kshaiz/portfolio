import { Stack, Chip, Divider, Button, Typography } from '@mui/material'
import { useEffect } from 'react'
import { PageContent } from '../components/other'
import Theme from '../style/theme'
import arccadashboardvoluntary from '../assets/other-works/arcesium/corporate-action/dashboard-voluntary.png'
import arccadashboardmandatory from '../assets/other-works/arcesium/corporate-action/dashboard-mandatory.png'

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
        // alignItems={'center'}
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: `0 0 ${Theme.shape.borderRadiusLarge}px ${Theme.shape.borderRadiusLarge}px`,
          padding: `${Theme.spacing(4)}`,
        }}
        id="pg-headline"
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

      <PageContent style={{ padding: '64px 32px' }}>
        <Stack spacing={8}>
          <Stack direction={'column'} spacing={2} className="fade-in-block">
            <div>
              <Typography variant="h3" sx={{ color: 'rgb(240, 98, 146)' }}>
                Corporate Actions Dashboard
              </Typography>
              <Typography variant="body1">
                Dashboard to enable co-ordination between different teams
                (front-office, compliance, middle-office) to seek election
                preferences and approvals for voluntary corporate actions.
              </Typography>
            </div>
            <Stack direction={'row'} spacing={2}>
              <div
                style={{
                  backgroundColor: 'rgba(0,0,0,.05)',
                  borderRadius: Theme.shape.borderRadius,
                }}
              >
                <img
                  alt="Product screenshot"
                  src={arccadashboardvoluntary}
                  style={{
                    height: '160px',
                    display: 'block',
                  }}
                />
              </div>
              <div
                style={{
                  backgroundColor: 'rgba(0,0,0,.05)',
                  borderRadius: Theme.shape.borderRadius,
                }}
              >
                <img
                  alt="Product screenshot"
                  src={arccadashboardmandatory}
                  style={{
                    height: '160px',
                    display: 'block',
                  }}
                />
              </div>
            </Stack>
          </Stack>

          <Stack direction={'column'} spacing={2} className="fade-in-block">
            <div>
              <Typography variant="h3" sx={{ color: 'rgb(240, 98, 146)' }}>
                Investor Accounts Manager
              </Typography>
              <Typography variant="body1">
                Part of a series of application to onboard and manager new
                clients to the platform.
              </Typography>
            </div>
            <Stack direction={'row'} spacing={2}>
              <div
                style={{
                  width: '240px',
                  height: '160px',
                  backgroundColor: 'grey',
                  borderRadius: Theme.shape.borderRadius,
                }}
              ></div>
              <div
                style={{
                  width: '240px',
                  height: '160px',
                  backgroundColor: 'grey',
                  borderRadius: Theme.shape.borderRadius,
                }}
              ></div>
            </Stack>
          </Stack>

          <Stack direction={'column'} spacing={2} className="fade-in-block">
            <div>
              <Typography variant="h3" sx={{ color: 'rgb(240, 98, 146)' }}>
                Personal Trade Approvals Portal
              </Typography>
              <Typography variant="body1">
                Compliance portal for employees to log personal trade requests
                for approval.
              </Typography>
            </div>
            <Stack direction={'row'} spacing={2}>
              <div
                style={{
                  width: '240px',
                  height: '160px',
                  backgroundColor: 'grey',
                  borderRadius: Theme.shape.borderRadius,
                }}
              ></div>
              <div
                style={{
                  width: '240px',
                  height: '160px',
                  backgroundColor: 'grey',
                  borderRadius: Theme.shape.borderRadius,
                }}
              ></div>
            </Stack>
          </Stack>

          <Stack direction={'column'} spacing={2} className="fade-in-block">
            <div>
              <Typography variant="h3" sx={{ color: 'rgb(240, 98, 146)' }}>
                Event Manager
              </Typography>
              <Typography variant="body1">
                Application to create regulatory filing events and manage user
                notifications.
              </Typography>
            </div>
            <Stack direction={'row'} spacing={2}>
              <div
                style={{
                  width: '240px',
                  height: '160px',
                  backgroundColor: 'grey',
                  borderRadius: Theme.shape.borderRadius,
                }}
              ></div>
              <div
                style={{
                  width: '240px',
                  height: '160px',
                  backgroundColor: 'grey',
                  borderRadius: Theme.shape.borderRadius,
                }}
              ></div>
            </Stack>
          </Stack>

          <Stack direction={'column'} spacing={2} className="fade-in-block">
            <div>
              <Typography variant="h3" sx={{ color: 'rgb(240, 98, 146)' }}>
                Tutrr: Online Maths Platform
              </Typography>
              <Typography variant="body1">
                Skeuomorphic explorations for an online maths platform where
                kids (aged 12-16 yrs.) can solve problems from various maths
                topics, get instant feedback on their attempts and improve their
                performance through constant practice. Given the target
                audience, the focus was on increasing engagement with a
                compelling visual design and actionable feedbacks.
              </Typography>
            </div>
            <Stack direction={'row'} spacing={2}>
              <div
                style={{
                  width: '240px',
                  height: '160px',
                  backgroundColor: 'grey',
                  borderRadius: Theme.shape.borderRadius,
                }}
              ></div>
              <div
                style={{
                  width: '240px',
                  height: '160px',
                  backgroundColor: 'grey',
                  borderRadius: Theme.shape.borderRadius,
                }}
              ></div>
            </Stack>
          </Stack>

          <Stack direction={'column'} spacing={2} className="fade-in-block">
            <div>
              <Typography variant="h3" sx={{ color: 'rgb(240, 98, 146)' }}>
                Marketing Video
              </Typography>
              <Typography variant="body1">
                Created a marketing video for Mettl to highlight their key
                offerings. As a part of this project, I created story boards,
                character illustrations and finally created the animation using
                Adobe Flash.
              </Typography>
            </div>
            <Stack direction={'row'} spacing={2}>
              <div
                style={{
                  width: '240px',
                  height: '160px',
                  backgroundColor: 'grey',
                  borderRadius: Theme.shape.borderRadius,
                }}
              ></div>
              <div
                style={{
                  width: '240px',
                  height: '160px',
                  backgroundColor: 'grey',
                  borderRadius: Theme.shape.borderRadius,
                }}
              ></div>
            </Stack>
          </Stack>
        </Stack>
      </PageContent>
    </>
  )
}

export default OtherWorks

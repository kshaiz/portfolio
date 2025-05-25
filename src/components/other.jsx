import Theme from '../style/theme'
import {
  Typography,
  Stack,
  Divider,
  Box,
  Paper,
  Button,
  Chip,
} from '@mui/material'
import { deepPurple, teal, pink } from '@mui/material/colors'

import { ReactComponent as FlagCA } from '../assets/resume/flag-ca.svg'
import { ReactComponent as FlagIN } from '../assets/resume/flag-in.svg'
import { ReactComponent as FlagAU } from '../assets/resume/flag-au.svg'
import UNSWLogo from '../assets/resume/unsw-logo.png'
import IITGLogo from '../assets/resume/iitg-logo.png'

export const Headline = ({
  heading,
  subHeading,
  description,
  children,
  ...props
}) => {
  return (
    <div
      id="pg-headline"
      style={{
        padding: `${Theme.spacing(8)}`,
        ...props.style,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontWeight: Theme.typography.fontWeightBold,
          color: Theme.palette.text.heading,
        }}
      >
        {heading}
      </Typography>
      <Typography
        variant="h4"
        component="p"
        sx={{ fontWeight: Theme.typography.fontWeightBold, mt: 1 }}
      >
        {subHeading}
      </Typography>
      {description && (
        <Typography variant="body1" component="p" sx={{ mt: 2 }}>
          {description}
        </Typography>
      )}
    </div>
  )
}

export const PageContent = ({ children, ...props }) => {
  return (
    <div
      style={{
        padding: `${Theme.spacing(8)} 0`,
        position: 'relative',
        ...props.style,
      }}
    >
      {children}
    </div>
  )
}

export const ResumeExperience = ({
  country,
  title,
  company,
  location,
  period,
  children,
  ...props
}) => {
  let countrySVG = <FlagCA width="100%" height="auto" />
  switch (country) {
    case 'IN':
      countrySVG = <FlagIN width="100%" height="auto" />
      break
    case 'AU':
      countrySVG = <FlagAU width="100%" height="auto" />
      break
    default:
      countrySVG = <FlagCA width="100%" height="auto" />
      break
  }

  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems={'flex-start'}
      className={`fade-in-block ${props.className}`}
      {...props}
    >
      <div style={{ flex: '0 0 32px', paddingTop: 2 }}>{countrySVG}</div>
      <div>
        <Stack
          direction={'row'}
          spacing={2}
          alignItems="center"
          sx={{ color: 'rgb(240, 98, 146)' }}
        >
          <Typography variant="h4">{title}</Typography>
          <Divider orientation="vertical" sx={{ height: 16 }} />
          <Typography variant="h4">{company}</Typography>
        </Stack>
        <Typography variant="body2" mt={1} component="div">
          <Stack direction={'row'} spacing={1} alignItems="center">
            <span>{period}</span>
            <Divider orientation="vertical" sx={{ height: 12 }} />
            <span>{location}</span>
          </Stack>
        </Typography>
        {children && <Typography component="div">{children}</Typography>}
      </div>
    </Stack>
  )
}

export const ResumeEducation = ({
  degree,
  institution,
  location,
  period,
  ...props
}) => {
  let institutionLogo
  switch (institution) {
    case 'University of New South Wales':
      institutionLogo = UNSWLogo
      break
    case 'Indian Institute of Technology Guwahati':
      institutionLogo = IITGLogo
      break
    default:
      break
  }

  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems={'flex-start'}
      className={`fade-in-block ${props.className}`}
      {...props}
    >
      <img
        src={institutionLogo}
        alt="Logo of university"
        style={{ width: 82, height: 82 }}
      />
      <div>
        <Typography variant="h4" color="rgb(240, 98, 146)">
          {degree}
        </Typography>
        <Typography variant="subtitle1" mt={0.25}>
          {institution}
        </Typography>
        <Typography variant="body2" mt={1} component="div">
          <Stack direction={'row'} spacing={1} alignItems="center">
            <span>{period}</span>
            <Divider orientation="vertical" sx={{ height: 12 }} />
            <span>{location}</span>
          </Stack>
        </Typography>
      </div>
    </Stack>
  )
}

export const ResumeToolset = ({ caption, ...props }) => {
  return (
    <Stack
      alignItems={'center'}
      sx={{
        position: 'relative',
        height: 80,
        span: {
          opacity: 0,
          postion: 'absolute',
          top: '100%',
          width: '100%',
          textAlign: 'center',
        },
        '&:hover': {
          span: { opacity: 1 },
        },
      }}
    >
      <img
        alt={props.alt}
        style={{ width: 80, height: 80, margin: `0 ${Theme.spacing(0.5)}` }}
        {...props}
      />
      <Typography variant="caption" component="span">
        <b>{caption}</b>
      </Typography>
    </Stack>
  )
}

export const HomeCaseStudySmall = ({
  color,
  image,
  tilePosition,
  heading,
  cta,
  ...props
}) => {
  let bgColor = pink[50]
  let bgColorTitle = pink[100]

  switch (color) {
    case 'deepPurple':
      bgColor = deepPurple[50]
      bgColorTitle = deepPurple[100]
      break
    case 'teal':
      bgColor = teal[50]
      bgColorTitle = teal[100]
      break
    case 'pink':
      bgColor = pink[50]
      bgColorTitle = pink[100]
      break
    default:
      bgColor = pink[50]
      bgColorTitle = pink[100]
  }

  return (
    <>
      <Paper
        style={{
          borderRadius: Theme.shape.borderRadiusLarge,
          backgroundColor: bgColor,
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          ...props.style,
        }}
        elevation={0}
        {...props}
      >
        <Stack spacing={0}>
          <div
            style={{
              position: 'relative',
              height: '360px',
              // overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: '180%',
                height: '180%',
                top: Theme.spacing(4),
                left: `${tilePosition === 'left' ? '' : Theme.spacing(4)}`,
                right: `${tilePosition === 'right' ? '' : Theme.spacing(4)}`,
                borderTopLeftRadius: `${
                  tilePosition === 'left' ? '' : `${Theme.shape.borderRadius}px`
                }`,
                borderTopRightRadius: `${
                  tilePosition === 'right'
                    ? ''
                    : `${Theme.shape.borderRadius}px`
                }`,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition:
                  tilePosition === 'left' ? 'top right' : 'top left',
                boxShadow: 12,
              }}
            />
          </div>
          {/* <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255, 255, 255, 0.65)',
              maskImage:
                'linear-gradient(transparent 150px, rgba(0, 0, 0, 0.65) 200px, black 70%)',
            }}
          ></div> */}
          <Box
            sx={{
              padding: 4,
              zIndex: 1,
              backgroundColor: bgColorTitle,
              position: 'absolute',
              width: '100%',
              bottom: 0,
            }}
          >
            <Typography variant="h4" component="h3">
              {heading}
            </Typography>
            <Box sx={{ mt: 2 }}>
              {cta ? (
                <Button variant="outlined">View Case Study</Button>
              ) : (
                <Chip variant="filled" color="info" label="Coming soon" />
              )}
            </Box>
          </Box>
        </Stack>
      </Paper>
    </>
  )
}

export const HomeCaseStudy = ({
  backgroundImage,
  caseStudyimage,
  imagePosition,
  heading,
  description,
  cta,
  ...props
}) => {
  return (
    <Stack
      {...props}
      direction={imagePosition === 'left' ? 'row' : 'row-reverse'}
      spacing={2}
      sx={{
        borderRadius: 4,
        backgroundColor: Theme.palette.common.white,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative', width: '100%' }}>
        <Box
          sx={{
            position: 'absolute',
            backgroundImage: `url(${caseStudyimage})`,
            backgroundSize: 'cover',
            backgroundPosition:
              imagePosition === 'left' ? 'top right' : 'top left',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            top: 64,
            right: imagePosition === 'left' ? 0 : '',
            left: imagePosition === 'right' ? 0 : '',
            borderTopRightRadius:
              imagePosition === 'left' ? Theme.shape.borderRadius * 2 : '',
            borderTopLeftRadius:
              imagePosition === 'right' ? Theme.shape.borderRadius * 2 : '',
            boxShadow: 16,
          }}
        />
      </div>
      <div style={{ maxWidth: '600px', padding: Theme.spacing(8) }}>
        <Typography variant="h3" component="h3" gutterBottom>
          {heading}
        </Typography>
        <Typography>{description}</Typography>
        <Box sx={{ mt: 2 }}>
          {cta ? (
            <Button variant="outlined">View Case Study</Button>
          ) : (
            <Chip variant="filled" color="info" label="Coming soon" />
          )}
        </Box>
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: imagePosition === 'left' ? '-16px' : '',
          right: imagePosition === 'left' ? '' : '-16px',
          width: '100%',
          height: '100%',
          background:
            imagePosition === 'left'
              ? 'linear-gradient(65deg,rgba(0, 0, 0, .15) 0%, rgba(0, 0, 0, 0) 25%)'
              : 'linear-gradient(65deg, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.15) 100%)',
        }}
      ></div>
    </Stack>
  )
}

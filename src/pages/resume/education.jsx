import { ResumeEducation } from '../../components/other'

const Education = () => {
  return (
    <>
      <ResumeEducation
        degree={'Master of Design'}
        institution={'University of New South Wales'}
        location={'Sydney, Australia'}
        period={'Aug 2008 - Jul 2010'}
        sx={{ mt: 4 }}
      />
      <ResumeEducation
        degree={'Bachelor of Design'}
        institution={'Indian Institute of Technology Guwahati'}
        location={'Guwahati, India'}
        period={'Jul 2004 - May 2007'}
        sx={{ mt: 8 }}
      />
    </>
  )
}

export default Education

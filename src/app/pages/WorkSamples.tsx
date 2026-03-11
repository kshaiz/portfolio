import { ImageWithFallback } from '../components/figma/ImageWithFallback'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { Lightbox } from '../components/Lightbox'
import arcesiumCorpActionMandatory from '../../assets/work-samples/arcesium/corporate-action/dashboard-mandatory.png'
import arcesiumCorpActionVoluntary from '../../assets/work-samples/arcesium/corporate-action/dashboard-voluntary.png'
import arcesiumIAMCreateDialog from '../../assets/work-samples/arcesium/investor-account-manager/create-dialog.png'
import arcesiumIAMCreateWizard from '../../assets/work-samples/arcesium/investor-account-manager/create-wizard.png'
import arcesiumIAMDetailDifference from '../../assets/work-samples/arcesium/investor-account-manager/detail-difference.png'
import arcesiumIAMDetail from '../../assets/work-samples/arcesium/investor-account-manager/detail.png'
import arcesiumIAMSearchResult from '../../assets/work-samples/arcesium/investor-account-manager/search-result.png'
import arcesiumPTAPSampleForm from '../../assets/work-samples/arcesium/personal-trade-approval-portal/sample-form.png'
import arcesiumPTAPZeroState from '../../assets/work-samples/arcesium/personal-trade-approval-portal/zero-state.png'
import arcesiumEMCreate1 from '../../assets/work-samples/arcesium/event-manager/create-1.png'
import arcesiumEMCreate2 from '../../assets/work-samples/arcesium/event-manager/create-2.png'
import arcesiumEMCreate3 from '../../assets/work-samples/arcesium/event-manager/create-3.png'
import arcesiumEMZeroState from '../../assets/work-samples/arcesium/event-manager/zero-state.png'
import pubmaticBeta from '../../assets/work-samples/pubmatic/reporting-analytics-beta.png'
import pubmaticExploration from '../../assets/work-samples/pubmatic/reporting-analytics-exploration.png'
import pubmaticUserTesting from '../../assets/work-samples/pubmatic/reporting-analytics-user-testing.png'
import pubmaticWireframe from '../../assets/work-samples/pubmatic/reporting-analytics-wireframe.png'
import mettlTutrrHomepage from '../../assets/work-samples/mettl/tutrr-homepage.png'
import mettlTutrrAlgebraEditor from '../../assets/work-samples/mettl/tutrr-algebra-editor.png'
import mettlMarketingVideo from '../../assets/work-samples/mettl/marketing-video.png'
import mettlMarketingVideoThumbnail from '../../assets/work-samples/mettl/marketing-video-thumbnail.png'

interface WorkImage {
  src: string
  caption: string
  videoUrl?: string
}

interface WorkSample {
  id: string
  client: string
  period: string
  title: string
  description: string
  images: WorkImage[]
}

const workSamples: WorkSample[] = [
  {
    id: '1',
    client: 'Arcesium',
    period: '2015-2021',
    title: 'Corporate Actions Dashboard',
    description:
      'Dashboard to enable co-ordination between different teams (front-office, compliance, middle-office) to seek election preferences and approvals for voluntary corporate actions.',
    images: [
      {
        src: arcesiumCorpActionVoluntary,
        caption: 'Voluntary corporate actions view of the dashboard ',
      },
      {
        src: arcesiumCorpActionMandatory,
        caption: 'Mandatory corporate actions view of the dashboard',
      },
    ],
  },
  {
    id: '2',
    client: 'Arcesium',
    period: '2015-2021',
    title: 'Investor Accounts Manager',
    description:
      'Part of a series of application to onboard and manager new clients to the platform.',
    images: [
      { src: arcesiumIAMSearchResult, caption: 'Search results page' },
      {
        src: arcesiumIAMCreateDialog,
        caption: 'Create new account dialog box',
      },
      {
        src: arcesiumIAMCreateWizard,
        caption: 'Optional wizard to create a new account',
      },
      { src: arcesiumIAMDetail, caption: 'Investor account details page' },
      {
        src: arcesiumIAMDetailDifference,
        caption: 'Historical view with difference highlights',
      },
    ],
  },
  {
    id: '3',
    client: 'Arcesium',
    period: '2015-2021',
    title: 'Personal Trade Approvals Portal',
    description:
      'Compliance portal for employees to log personal trade requests for approval.',
    images: [
      {
        src: arcesiumPTAPZeroState,
        caption: 'Application view without any data',
      },
      { src: arcesiumPTAPSampleForm, caption: 'Application view with data' },
    ],
  },
  {
    id: '4',
    client: 'Arcesium',
    period: '2015-2021',
    title: 'Event Manager',
    description:
      'Application to create regulatory filing events and manage user notifications.',
    images: [
      { src: arcesiumEMZeroState, caption: 'Landing page' },
      { src: arcesiumEMCreate1, caption: 'Create new event - 1' },
      { src: arcesiumEMCreate2, caption: 'Create new event — 2' },
      { src: arcesiumEMCreate3, caption: 'Create new event — 3' },
    ],
  },
  {
    id: '5',
    client: 'Mettl',
    period: '2013-2014',
    title: 'Tutrr: Online Maths Platform',
    description:
      'Skeuomorphic explorations for an online maths platform where kids (aged 12-16 yrs.) can solve problems from various maths topics, get instant feedback on their attempts and improve their performance through constant practice. Given the target audience, the focus was on increasing engagement with a compelling visual design and actionable feedbacks.',
    images: [
      {
        src: pubmaticBeta,
        caption: 'Screenshot of a beta version with live data streaming',
      },
      {
        src: pubmaticWireframe,
        caption:
          'Wireframe for a customizable dashboard view with real time data streaming, alert notification and comparative analysis',
      },
      {
        src: pubmaticExploration,
        caption:
          'Exploring display options for showing numbers on the platform',
      },
      {
        src: pubmaticUserTesting,
        caption:
          'Snapshots of the contextual interviews. Think aloud protocol was employed to record the user feedback.',
      },
    ],
  },
  {
    id: '6',
    client: 'Mettl',
    period: '2013-2014',
    title: 'Tutrr: Online Maths Platform',
    description:
      'Skeuomorphic explorations for an online maths platform where kids (aged 12-16 yrs.) can solve problems from various maths topics, get instant feedback on their attempts and improve their performance through constant practice. Given the target audience, the focus was on increasing engagement with a compelling visual design and actionable feedbacks.',
    images: [
      { src: mettlTutrrHomepage, caption: 'Homepage' },
      { src: mettlTutrrAlgebraEditor, caption: 'Algebra editor' },
    ],
  },
  {
    id: '7',
    client: 'Mettl',
    period: '2013-2014',
    title: 'Marketing Video',
    description:
      'Created a marketing video for Mettl to highlight their key offerings. As a part of this project, I created story boards, character illustrations and finally created the animation using Adobe Flash.',
    images: [
      { src: mettlMarketingVideo, caption: 'A still from the video' },
      {
        src: mettlMarketingVideoThumbnail,
        caption:
          'If you are having trouble viewing the video, <a href="https://www.youtube.com/embed/SGg19b0nAMA" target="_blank" rel="noopener noreferrer" class="underline hover:text-white">click here</a> to view on YouTube',
        videoUrl: 'https://www.youtube.com/embed/SGg19b0nAMA',
      },
    ],
  },
]

function buildImageList(samples: WorkSample[]) {
  return samples.flatMap((s) =>
    s.images.map((img) => ({
      src: img.src,
      alt: img.caption,
      title: s.title,
      videoUrl: img.videoUrl,
    })),
  )
}

function getGlobalOffset(samples: WorkSample[], sampleIndex: number) {
  return samples
    .slice(0, sampleIndex)
    .reduce((sum, s) => sum + s.images.length, 0)
}

export function WorkSamples() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const allImages = buildImageList(workSamples)

  const openLightbox = (globalIndex: number) => {
    setCurrentImageIndex(globalIndex)
    setLightboxOpen(true)
  }

  return (
    <div className="py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-6xl mb-8">Work Samples</h1>
          <p className="text-xl text-neutral-600">
            A curated collection of my work from various projects.
          </p>
        </div>

        {/* Work Samples List */}
        <div className="space-y-16">
          {workSamples.map((sample, sampleIndex) => {
            const offset = getGlobalOffset(workSamples, sampleIndex)
            return (
              <div key={sample.id}>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm text-neutral-400 uppercase tracking-wide">
                    {sample.client}
                  </span>
                  <span className="text-sm text-neutral-400">
                    {sample.period}
                  </span>
                </div>
                <h3 className="text-2xl mb-2">{sample.title}</h3>
                <p className="text-neutral-600 mb-6">{sample.description}</p>
                <div className="grid grid-cols-4 gap-3">
                  {sample.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="cursor-pointer aspect-video overflow-hidden rounded-lg bg-neutral-100 border border-slate-400"
                      onClick={() => openLightbox(offset + imgIndex)}
                    >
                      <ImageWithFallback
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Content Note */}
        <div className="mt-16 p-8 bg-neutral-50 rounded-2xl text-center">
          <ExternalLink className="mx-auto mb-4 text-neutral-600" size={32} />
          <h3 className="text-2xl mb-4">More work available upon request</h3>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Due to confidentiality agreements, some projects cannot be displayed
            publicly. I'm happy to share additional work samples and discuss
            specific projects in more detail.
          </p>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={allImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() =>
            setCurrentImageIndex((p) => Math.min(p + 1, allImages.length - 1))
          }
          onPrevious={() => setCurrentImageIndex((p) => Math.max(p - 1, 0))}
        />
      )}
    </div>
  )
}

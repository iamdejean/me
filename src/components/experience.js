import React from 'react'
import styled from 'styled-components'

import Text from './shared/Text'
import Button from './shared/Button'
import Image from './shared/Image'
import { UList, ListItem } from './shared/List'
import { Heading, Paragraph } from './shared/Typography'
import { ContentContainer, SectionContainer } from './shared/Containers'

import ExpLeftSideBar from '../images/ExpLeftSideBar.svg'
import ExpRightSideBar from '../images/ExpRightSideBar.svg'

import {
  COLORS,
  MEDIA_QUERIES,
  BORDER_RADIUS,
  TRANSITION,
} from '../styles/constants'

const Intro = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const IntroDescription = styled.div`
  margin-bottom: 25px;
`
const WorkContainer = styled.div`
  display: grid;
  grid-gap: 45px;
  grid-template-areas: 'companies info';
  grid-template-columns: 1fr 3fr;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    grid-template-areas: 'companies' 'info';
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`
const WorkButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    flex-direction: row;
    overflow-x: scroll;
    border-bottom: 1px ${COLORS.lightWhite} solid;
    padding: 10px 5px;
  }
`
const Dot = styled.div`
  opacity: 0.5;
  transition: ${TRANSITION};
  display: inline-block;
  margin-right: 10px;
  vertical-align: center;
  height: 8px;
  width: 8px;
  background-color: ${[
    props => (props.active ? COLORS.gold : COLORS.lightGray),
  ]};
  border-radius: 50%;
`
const WorkButton = styled(Button)`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: ${BORDER_RADIUS};
  transition: ${TRANSITION};
  padding: 10px 30px;
  border: none;
  color: ${COLORS.lightGray};
  &:hover {
    background-color: ${COLORS.semiWhite};
    color: ${COLORS.white};
  }
  &:focus {
    color: ${COLORS.gold};
  }
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    margin-bottom: 0px;
    margin-right: 10px;
  }
`
const WorkDetails = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-rows: auto auto 4fr;
  align-items: flex-start;
`
const RoundedImageContainer = styled.div`
  display: inline-block;
  border-radius: 10px;
  height: 45px;
  width: 45px;
  background-color: ${COLORS.lightWhite};
  padding: 5px;
  margin-right: 15px;
`

const jobs = [
  {
    company: 'Ravn',
    logo: '//logo.clearbit.com/ravndev.com',
    jobTitle: 'Full Stack Developer',
    dates: 'Jan 2018 - Present',
    bullets: [
      'Contributed to external SaaS products ',
      'Accelerated project development by ',
      'Made a bunch of gadgets',
    ],
  },
  {
    company: 'Gatsby',
    logo: '//logo.clearbit.com/gatsbyjs.com',
    jobTitle: 'Open Source Consultant',
    dates: 'Feb 2018 - May 2018',
    bullets: [
      'Finished lots of things',
      'Did lots of stuff',
      'Made a bunch of gadgets',
    ],
  },
  {
    company: 'Brixio',
    logo:
      'https://media.licdn.com/dms/image/C4E0BAQEx4NRUJfczHw/company-logo_200_200/0?e=1549497600&v=beta&t=V0rOw5u8o_Y7nz_py1yCUi8hay9KFTk8bAIb4WP0Nvg',
    jobTitle: 'Full Stack Developer',
    dates: 'Jan 2017 - Oct 2017',
    bullets: [
      'Finished lots of things',
      'Did lots of stuff',
      'Made a bunch of gadgets',
    ],
  },
  {
    company: 'BYU',
    logo: '//logo.clearbit.com/byu.com',
    jobTitle: 'E-learning Developer',
    dates: 'Jan 2018 - Present',
    bullets: [
      'Finished lots of things',
      'Did lots of stuff',
      'Made a bunch of gadgets',
    ],
  },
]

class Experience extends React.Component {
  state = {
    selectedIndex: null,
  }

  onSelectJob = selectedIndex =>
    console.log(selectedIndex) || this.setState({ selectedIndex })

  render() {
    const { selectedIndex } = this.state
    const selectedJob = jobs[selectedIndex] || jobs[0]
    return (
      <SectionContainer backgroundFilled>
        <Image
          src={ExpLeftSideBar}
          style={{
            position: 'absolute',
            left: 0,
            transform: 'translateY(-50px)',
          }}
          lighten
        />
        <Image
          src={ExpRightSideBar}
          style={{
            position: 'absolute',
            right: 0,
            transform: 'translateY(-50px)',
          }}
          lighten
        />
        <ContentContainer style={{ gridGap: 30 }}>
          <Intro>
            <Heading inverted>Experience</Heading>
            <IntroDescription>
              <Paragraph
                size="xlarge"
                weight="bold"
                color="lightWhite"
                inverted
              >
                Here are a few places I've worked
              </Paragraph>
            </IntroDescription>
          </Intro>
          <WorkContainer>
            <WorkButtons>
              {jobs.map((job, index) => (
                <WorkButton onClick={() => this.onSelectJob(index)}>
                  <Dot active={index === selectedIndex} />
                  {job.company}
                </WorkButton>
              ))}
            </WorkButtons>
            <WorkDetails>
              <div style={{ padding: '5px 0' }}>
                <Text color="white" size="xxlarge" weight="bold">
                  {selectedJob.jobTitle}{' '}
                </Text>
                <Text color="gold" size="xxlarge" weight="bold">
                  @ {selectedJob.company}
                </Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <RoundedImageContainer>
                  <img
                    style={{ widght: 35, height: 35, borderRadius: 5 }}
                    src={selectedJob.logo}
                    alt=":("
                  />
                </RoundedImageContainer>
                <Text color="lightWhite" size="medium">
                  {selectedJob.dates}
                </Text>
              </div>
              <div>
                <Text color="lightWhite" size="medium">
                  <UList columns={1} style={{}}>
                    {selectedJob.bullets.map(bullet => (
                      <ListItem color="white">{bullet}</ListItem>
                    ))}
                  </UList>
                </Text>
              </div>
            </WorkDetails>
          </WorkContainer>
        </ContentContainer>
      </SectionContainer>
    )
  }
}

export default Experience

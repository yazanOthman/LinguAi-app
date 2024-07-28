import React from "react";
import FeatureItem from "./Feature";
import styled from "styled-components";
import { GoDependabot } from "react-icons/go";
import { LiaHeadphonesSolid } from "react-icons/lia";
import { LuBook } from "react-icons/lu";
import { RiSpeedUpLine } from "react-icons/ri";
import { MdDynamicFeed } from "react-icons/md";
import { MdOutlineTopic } from "react-icons/md";
import {
  StyledSection,
  StyledSectionTitle,
  StyledSectionSubtitle,
} from "../shared";

const mdScreenSize = "765px";
const lgScreenSize = " 1200px";

const FEATURES = [
  {
    title: "Conversational Chatbot",
    description:
      "Our AI-powered chatbot can adapt the complexity of the language to your level, making it easier to have natural conversations.",
    icon: <GoDependabot />,
  },
  {
    title: "Audio Lessons",
    description:
      "Learn through interactive audio lessons that cover pronunciation, vocabulary, and grammar.",
    icon: <LiaHeadphonesSolid />,
  },
  {
    title: "Text-based Learning",
    description:
      "Supplement your audio lessons with interactive text-based exercises and quizzes to reinforce your learning.",
    icon: <LuBook />,
  },
  {
    title: "Adaptive Difficulty",
    description:
      "Our AI continuously adjusts the difficulty of the content to match your current level, ensuring you're always challenged but never overwhelmed.",
    icon: <RiSpeedUpLine />,
  },
  {
    title: "Personalized  Topics",
    description:
      "Empower your language learning journey with personalized conversation topics that cater to your interests and goals.",
    icon: <MdOutlineTopic />,
  },
  {
    title: "Dynamic Dialogues",
    description:
      "Experience realistic, interactive dialogues powered by AI, simulating conversations with native speakers.",
    icon: <MdDynamicFeed />,
  },
];

const StyleFeatureContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr;
  p {
    max-width: 24rem;
    color: #8d8d8d;
  }

  @media (min-width: ${mdScreenSize}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    max-width: 970px;
    margin: 0 auto;
  }

  @media (min-width: ${lgScreenSize}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5px;
    max-width: ${lgScreenSize};
    margin: 0 auto;
  }
`;

const Features = () => {
  return (
    <StyledSection bg={"white"} color="black">
      <StyledSectionTitle>Learn Faster with AI</StyledSectionTitle>
      <StyledSectionSubtitle color="black">
        Our AI-powered language learning app adapts to your needs, providing
        personalized lessons and conversational practice to help you become
        fluent faster.
      </StyledSectionSubtitle>

      <StyleFeatureContainer>
        {FEATURES.map((feature, index) => (
          <FeatureItem odd={index % 2} key={feature.title} feature={feature} />
        ))}
      </StyleFeatureContainer>
    </StyledSection>
  );
};

export default Features;

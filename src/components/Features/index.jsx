import React from "react";
import FeatureItem from "./Feature";
import styled from "styled-components";
import { GoDependabot } from "react-icons/go";
import { LiaHeadphonesSolid } from "react-icons/lia";
import { LuBook } from "react-icons/lu";
import { RiSpeedUpLine } from "react-icons/ri";
import { MdDynamicFeed } from "react-icons/md";
import { MdOutlineTopic } from "react-icons/md";

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

const StyledFeaturesList = styled.section`
  padding: 0 5rem;
`;

const Features = () => {
  return (
    <StyledFeaturesList id="features" className="features">
      <div className="container">
        <h2 className="section-title text-center">Learn Faster with AI</h2>
        <p className="text-center">
          Our AI-powered language learning app uses advanced technology to help
          you master any language faster than ever before.
        </p>

        <div className="feature-list">
          {FEATURES.map((feature, index) => (
            <FeatureItem
              odd={index % 2}
              key={feature.title}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </StyledFeaturesList>
  );
};

export default Features;

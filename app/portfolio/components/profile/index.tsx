"use client";
import React from "react";
import { Section, ContentWrapper, Left, Right } from "./styles";
import InfoSection from "./InfoSection/InfoSection";
import CardSection from "./CardSection/CardSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import SocialSection from "./SocialSection/SocialSection";

export default function Profile() {
    return (
        <Section>
            <ContentWrapper>
                <Left>
                    <InfoSection />
                </Left>
                <Right>
                    <CardSection />
                    <SkillsSection />
                    <SocialSection />
                </Right>
            </ContentWrapper>
        </Section>
    );
}

import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
  Heading
} from "@react-email/components";
import * as React from "react";

interface GithubAccessTokenEmailProps {
  name?: string,
  serviceAds: string,
  serviceCreate: string,
  serviceSite: string,
  number: string
}


export const GithubAccessTokenEmail = ({
  name,
  serviceAds,
  serviceCreate,
  serviceSite,
  number
}: GithubAccessTokenEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Um novo Briefing foi realizado na iDo
    </Preview>
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans">
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
          <Section className="mt-[32px] text-center">
            <span className="text-2xl">🛎🧳📣</span>
          </Section>
          <Heading className="text-black text-[24px] font-sans text-center p-0 mx-0">
            Oieee <strong>Tataaaa</strong>!
          </Heading>
          <Section className="text-center text-md text-gray-400">
            {name} realizou um briefing no site, entra em contato com ele <span className="text-xl">👇</span>
          </Section>
          <Section className="mt-[32px] text-center">
            <Button className="bg-green-500 font-sans font-bold mx-auto text-center text-white p-4 rounded-md" href={`https://api.whatsapp.com/send?l=pt-BR&phone=55${number}&text=Ol%C3%A1%2C,+vi+que%0AVoc%C3%AA+realizou+um+briefing+no+site+da+iDo+Marketing+Digital.+Como+Posso+lhe+ajudar&fbclid=PAAabd59o93FavSL3byJ1rMjkRXerk4TrHRbpIz7ph8MYmJP7AX5y_rDaEZdo`}>🤳 Contato Do Cliente</Button>
          </Section>
          <Text style={links}>
            <Link style={link} href="https://idomktdigital.vercel.app/">Site</Link> ・{" "}
            <Link style={link} href="https://linksido-plum.vercel.app/">Links iDo</Link>
          </Text>
          <Text style={footer}>
            &copy; iDo Marketing Digital 2024 Inc. All rights reserved
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html >
);


export default GithubAccessTokenEmail;


const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const button = {
  fontSize: "14px",
  backgroundColor: "#28a745",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 24px",
};

const links = {
  textAlign: "center" as const,
};

const link = {
  color: "#0366d6",
  fontSize: "12px",
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};

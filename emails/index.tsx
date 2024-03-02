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
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://cdn.discordapp.com/attachments/793229166962802719/1213567506602791013/ido-mktdigital_1.png?ex=65f5f1d0&is=65e37cd0&hm=5a45e8480680022625102c2e2b025c975ff04d2ab180688b26b5aa4225aab5a0&"
          width="32"
          height="32"
          alt="Logo Ido"
        />

        <Text style={title}>
          <strong>@Tata</strong>, {name} realizou um briefing no site
        </Text>

        <Section style={section}>
          <Text style={text}>
            Ola <strong>Tata</strong>!
          </Text>
          <Text style={text}>
            {name} realizou um briefing no site desejando os seguintes serviços: {serviceAds} {serviceCreate} {serviceSite}
          </Text>

          <Button style={button} href={`https://api.whatsapp.com/send?l=pt-BR&phone=${number}&text=Ol%C3%A1%2C+vim+pelo+seu+sites.%0AVoc%C3%AA+pode+me+passar+umas+informa%C3%A7%C3%B5es%3F&fbclid=PAAabd59o93FavSL3byJ1rMjkRXerk4TrHRbpIz7ph8MYmJP7AX5y_rDaEZdo`}>Contato Do Cliente</Button>
        </Section>
        <Text style={links}>
          <Link style={link}>Site</Link> ・{" "}
          <Link style={link}>Links iDo</Link>
        </Text>

        <Text style={footer}>
          &copy; iDo Marketing Digital 2024 Inc. All rights reserved
        </Text>
      </Container>
    </Body>
  </Html>
);


export default GithubAccessTokenEmail;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

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

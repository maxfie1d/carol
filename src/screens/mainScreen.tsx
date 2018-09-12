import * as React from "react";
import { AppHeader } from "../components/organisms/appHeader";
import { HeroImage } from "../components/organisms/heroImage";
import styled from "styled-components";
import { UIButton } from "../components/atoms/buttons";
import AppFooter from "../components/organisms/appFooter";
import { withRouter, RouterProps } from "react-router";

const ButtonWrapper = styled.div`
  display: flex;
  width: "100%";
`;

interface Props {}

export class MainScreen extends React.Component<Props & RouterProps> {
  onOmakaseButtonPressed() {
    this.props.history.push("/omakase");
  }

  render() {
    const buttonStyle: React.CSSProperties = {
      flex: 1
    };

    return (
      <div>
        <AppHeader />
        <HeroImage />
        <ButtonWrapper>
          <UIButton style={buttonStyle} primary onPress={() => alert("選ぶ")}>
            選ぶ
          </UIButton>
          <UIButton
            style={buttonStyle}
            onPress={this.onOmakaseButtonPressed.bind(this)}
          >
            おまかせ
          </UIButton>
        </ButtonWrapper>
        <AppFooter />
      </div>
    );
  }
}

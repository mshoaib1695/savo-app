import React, { Component } from 'react';
import { Container, Badge, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button bage transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
          <Button badge transparent active>
              <Icon name="apps" />
              <Badge><Text>2</Text></Badge>
            </Button>
          </Right>  
                </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
        <FooterTab>
      <Button>
        
        <Icon name="home" />
        <Text>Dashboard</Text>
      </Button>
    </FooterTab>
        <FooterTab>
      <Button>
        <Icon name="search" />
        <Text>Search</Text>
      </Button>
    </FooterTab>
        <FooterTab>
      <Button>
        <Icon name="contact" />
        <Text>Profile</Text>
      </Button>
    </FooterTab>
        </Footer>
      </Container>
    );
  }
}
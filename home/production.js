import { style, color, routes, font, device } from '../constants'

view Home.Production {
  <Feature>
    <Row reverse>
      <Col class="example">
        <a href="https://emotipost.com" target="_blank"><img src="/assets/images/emoti.jpg" /></a>
      </Col>

      <Col class="content">
        <Title>Ready for Production</Title>
        <IntroText>
          Motion is in use at large companies and for small projects. We're gathering some quotes and
          examples for this section.
        </IntroText>

        <Text>
          <Link href="https://emotipost.com" target="_blank">Emotipost</Link> was built by an early adopter in just two weeks.
        </Text>
      </Col>
    </Row>
  </Feature>

  $Feature = {
    overflow: 'hidden'
  }

  $Row = {
    flexFlow: 'row',
    margin: [0, 0, -28],

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $example = {
    margin: [0, 0, -130],

    [device.small]: {
      marginBottom: 0
    }
  }

  $content = {
    padding: [30, 50, 30, 20],
    width: '20%',
    justifyContent: 'center',

    [device.small]: {
      width: '100%'
    }
  }

  $p = {
    fontSize: 18,
    color: '#999',
    width: 500
  }

  $img = {
    width: 425,
    margin: [0, -300, 0, 0],

    [device.small]: {
      width: '100%'
    }
  }
}

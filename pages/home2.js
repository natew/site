view Home.Head {
  <head>
    <h1>A coherent way to build modern apps</h1>
  </head>

  $head = {
    background: `linear-gradient(20deg, #bd8ce4, #88f7f7)`,
    color: '#fff',
    height: 300,
    padding: [50, 20],
    textAlign: 'center',
    justifyContent: 'flex-end'
  }

  $h1 = {
    fontWeight: 300
  }
}

view Home2 {
  <Home.Head />
  <Home.Art />
  <Home.Connected />
  <Home.Syntax />
  <Home.Errors />

  <Contain>
    <Row>
      <Home.Install />
      <Home.State />
    </Row>
  </Contain>

  <section>
    <h2>Amazing tools without the boilerplate</h2>

    <ul>
      <li>Amazing extensible pre-configured build system</li>
      <li>Start to deploy in seconds</li>
      <li>Dramatically easier interface to React</li>
      <li>State inspector</li>
      <li>Error recovery</li>
    </ul>
  </section>

  <section>
    <h2>Powered by community</h2>
    <p>Runs on React, Babel, NPM, Webpack, Gulp, Radium, Autoprefixer, and more.</p>
  </section>

  <section>
    <h2>Flexible yet sensible</h2>
    <p>Use any React component, full featured by default but open and configurable.</p>
  </section>

  <section>
    <h2>Amazing features</h2>
    <p>
      The fastest and smartest hot reloads, interactive state inspector, full error recovery,
      Atom integration with as-you-type updates.
    </p>
  </section>

  <section>
    <h2>Used in production</h2>
    <p>
      In use by fortune 500 companies.
    </p>
  </section>

  <section>
    <h2>:)</h2>
    <p>
      Made with  by
    </p>
  </section>

  $h2 = {
    textAlign: 'center',
    margin: 0
  }

  $section = {
    textAlign: 'center',
    padding: [20, 0, 0],
    borderBottom: [1, 'solid', '#ddd']
  }

  $p = {
    padding: 20,
    paddingBottom: 0
  }

  $ul = {
    margin: 0,
    textAlign: 'left',
    display: 'flex',
    flexFlow: 'row'
  }

  $li = {
    display: 'flex',
    padding: 20,
    flexGrow: 1
  }
}

view Home.Connected {
  <Feature center col>
    <Home.Title>Connects your tools</Home.Title>
    <Home.Sub>Flint's compiler communicates between browser and editor to enable new developer powers</Home.Sub>

    <Row>
      <Col>
        <Icon.Browser />
        <Home.Sub>Something</Home.Sub>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </Col>
      <Col>
        <Icon.Editor />
        <Home.Sub>Something</Home.Sub>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </Col>
      <Col>
        <Icon.Flint />
        <Home.Sub>Something</Home.Sub>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </Col>
    </Row>

  </Feature>

  $Col = {
    padding: 30
  }
}

view Home.Art {
  <Feature>
    <inner>
      <Col class="content">
        <Home.Title>State of the art</Home.Title>
        <Home.Sub>
          An ultra modern React stack with everything you need to start in minutes and deploy today.
        </Home.Sub>

        <Home.Sub>
          Powerful and never before seen tools to make you and your team happy with development again.
        </Home.Sub>
      </Col>
      <Col>
        <img src="/assets/images/emoti.png" />
      </Col>
    </inner>
  </Feature>

  $Feature = {
    borderBottom: [1, 'solid', '#eee'],
    overflow: 'hidden'
  }

  $inner = {
    flexFlow: 'row',
    margin: [-20, 0]
  }

  $content = {
    padding: [30, 50],
    width: '20%'
  }

  $p = {
    fontSize: 18,
    color: '#999',
    width: 500
  }

  $img = {
    width: 500,
    margin: [0, -300, 0, 0]
  }
}

view Home.Syntax {
  <Feature col>
    <Home.Title>Brings views to Javascript</Home.Title>
    <Home.Sub>Less to learn, less to code, easier to read, easier to mantain.</Home.Sub>

    <Row>
      <Col>
        <DemoCounter />
      </Col>
    </Row>

  </Feature>

  $Col = {
    padding: 30
  }
}

view Home.Errors {
  <Feature col>
    <Home.Title>Amazing Errors</Home.Title>
    <Home.Sub>Flint recovers gracefully from errors and shows you exactly what you need.</Home.Sub>
    <img src="/assets/images/errors.png" />
  </Feature>

  $img = {
    maxWidth: '100%'
  }
}

view Home.Install {
  <Feature>
    <Col>
      <Home.Title>Automatic NPM Installs</Home.Title>
      <Home.Sub>As you type, Flint installs npm packages, and injects them into your running app without losing state.</Home.Sub>
      <video width="320" height="240" autoplay="autoplay" loop>
        <source src="assets/video/install.webm" type="video/webm" />
        <source src="assets/video/install.ogg" type="video/ogg" />
        <source src="assets/video/install.mp4" type="video/mp4" />
      </video>
    </Col>
  </Feature>
}

view Home.State {
  <Feature>
    <Col>
      <Home.Title>State Inspector</Home.Title>
      <Home.Sub>Easy, pinable, simple state inspector.</Home.Sub>
    </Col>
    <video width="320" height="240" autoplay="autoplay" loop>
      <source src="assets/video/state.mp4" type="video/mp4" />
    </video>
  </Feature>
}

view Feature {
  <Contain yield />

  $ = {
    padding: 50,
    textAlign: view.props.center ? `center` : `left`,
    flexFlow: view.props.col ? `column` : `row`
  }
}

view Home.Title {
  <h2 root yield />

  $ = {
    fontWeight: 200,
    fontSize: 28,
    margin: [0, 0, 20]
  }
}

view Home.Sub {
  <Text root yield />

  $Text = {
    fontSize: 17
  }
}

view Text {
  <p root yield />

  $ = {
    color: `rgba(0,0,0,0.5)`,
    fontWeight: 300,
    fontSize: 15
  }
}
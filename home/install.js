import { style, color, routes, font, device } from '../constants'

view Install.Input {
  const install = 'curl <(https://motion.run) '
  const select = () => {
    view.element('input').select()
  }

  <code onMouseUp={select} class="install">
    <input value={install} readOnly size={install.length - 1} />
  </code>

  $code = {
    background: 'none',
    border: 'none'
  }

  $install = {
    flexFlow: 'row',
    color: '#555',
    margin: [10, 0, 7],
  }

  $input = {
    border: 'none',
    color: 'rgb(13, 149, 217)',
    background: 'none',
    borderRadius: 6,
    padding: [10, 5, 10, 10],
    fontSize: 18,
    margin: [-8, 0, -5],
    fontFamily: font.monoSpace
  }
}

view Install.Shields {
  <afterward if={false}>
    <shields>
      <a href="https://www.npmjs.com/package/motion" target="_blank">
        <img class="shield" src="https://img.shields.io/npm/dm/motion.svg" />
      </a>
      <img class="shield" src="https://img.shields.io/npm/v/motion.svg" />
    </shields>
  </afterward>

  $shields = {
    flexFlow: 'row',
    margin: [20, 'auto', 0],
    height: 40
  }

  $a = {
    margin: 'auto'
  }

  $shield = {
    opacity: 0.7,
    hover: {
      opacity: 1
    }
  }
}


view Home.Install {
  <Feature row>
    <title>
      <dark>Install:</dark>
    </title>
    <mainCode>
      <Install.Input />
    </mainCode>
    <Help />
  </Feature>

  $ = {
    background: 'linear-gradient(#f2f2f2, #fff)',
    color: 'rgba(0,0,0,0.3)',
    // boxShadow: '0 2px 2px rgba(0,0,0,0.045)'
  }

  $title = {
    fontSize: 18,
    marginRight: 0,
    flexFlow: 'row',

    [device.small]: {
      margin: 'auto'
    }
  }

  $dark = {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 20,
    marginRight: 10,
    fontWeight: 300,
  }

  $Feature = {
    margin: 'auto',
    padding: [10, 5],
    border: 'none',
    flexWrap: 'wrap',
  }

  $Help = {
    marginRight: -80,

    [device.small]: {
      display: 'none'
    }
  }

  $mainCode = {
    flexFlow: 'row',
    margin: 'auto',
    [device.small]: { fontSize: 20, marginTop: 5 },
  }
}

view Help {
  let hovered = false

  <help onMouseEnter={() => hovered = true} onMouseLeave={() => hovered = false}>
    <question>?</question>
    <modal>
      Fixes npm permissions!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Or:&nbsp;<code>npm install -g motion</code>
    </modal>
  </help>

  const size = 32

  $ = {
    position: 'relative'
  }

  $question = {
    margin: ['auto', 0, 'auto', 3],
    width: size,
    height: size,
    justifyContent: 'center',
    fontSize: 16,
    border: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 2px 2px rgba(0,0,0,0.04)',
    borderRadius: 1000,
    textAlign: 'center',
    color: [0,0,0,0.4],
    cursor: 'pointer'
  }

  $modal = {
    color: '#555',
    display: 'block',
    opacity: hovered ? 1 : 0,
    transition: 'all ease-in 200ms',
    position: 'absolute',
    left: hovered ? 42 : 28,
    top: '-25%',
    marginLeft: 0,
    width: 202,
    padding: 10,
    boxShadow: '0 0 14px rgba(0,0,0,0.1)',
    borderRadius: 4,
    fontSize: 13,
    lineHeight: '1.2rem',
    background: '#fff',
  }

  $code = {
    border: 'none',
    color: color.brand1,
    lineHeight: 1.2,
    fontSize: 13,
    display: 'inline'
  }
}

import { style, color, routes, font, device } from '../constants'

view Demo {
  prop onStart = Motion.noop

  let isPlaying = false
  let dim = {
    width: 800,
    height: 400
  }

  view.pause()

  on.mount(() => {
    isPlaying = false
  })

  on.props(() => {
    if (view.props.play && !isPlaying) {
      isPlaying = true
    }

    if (!view.props.play && isPlaying) {
      isPlaying = false
      view.element('video').pause()
      view.element().style.transform = `translateY(0px) scale(1)`
      view.update()
    }
  })

  <mask>
    <close>x</close>
    <video preload controls>
      <source src="https://s3-us-west-1.amazonaws.com/flint123/finalexport.m4v" />
    </video>
  </mask>

  $ = {
    width: dim.width,
    height: dim.height,
    marginBottom: -30,
    position: 'relative',
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    boxShadow: '0 10px 60px rgba(0,0,0,0.25)',
    overflow: 'hidden',
    transition: "all ease 500ms",
    zIndex: 1000,

    [device.small]: {
      boxShadow: 'none',
    }
  }

  $close = {
    color: '#fff',
    position: 'absolute',
    top: -20,
    right: -20,
  }

  $video = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: -18,
    maxWidth: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    opacity: 0.2
  }
}

view Home.Head {
  let play = false

  on.mount(() => {
    play = false
  })

  on.keydown(window, (e) => {
    if (e.keyCode == 27) {
      play = false
    }
  })

  function start() {
    play = true
  }

  <Contain>
    <Stars num={25} />
    <banner class={{ hide: play }}>
      <h1><b>A leap forward for building on React</b></h1>
      <IntroText light>
        Start a best-practice React app instantly,<br />
        with incredible tools and instant feedback loops
      </IntroText>
      <Watch onClick={start} if={false}>Watch the demo</Watch>
    </banner>
    <Demo play={play} />
  </Contain>
  <selfShadow />

  $ = {
    background: style.gradient,
    color: '#fff',
    flexFlow: 'column',
    overflow: 'hidden',
    position: 'relative',
    height: Math.min(window.innerHeight, 720),
    minHeight: 600,
    textShadow: '0 1px 1px rgba(0,0,0,0.25)',
    padding: [50, 0, 0],

    [device.small]: {
      padding: [200, 0, 0]
    }
  }

  $Demo = {
    width: '100%'
  }

    $Contain = {
      [device.small]: {
        maxWidth: '80%'
      }
    }

    $selfShadow = {
      position: 'absolute',
      bottom: -1,
      left: 0,
      right: 0,
      boxShadow: '0 0 15px rgba(0,0,0,0.8)',
      zIndex: 10000000,
      height: 1,
      background: '#fff'
    }

    $Button = {
      margin: [25, 0, 0],
      transition: 'all linear 200ms',
      hover: { transform: { scale: 1.1 } }
    }

    $lt = {
      textDecoration: 'line-through',
      opacity: 0.5,
    }

    $banner = {
      margin: 'auto',
      textAlign: 'center',
      padding: [0, '10%'],
      zIndex: 1000,
      width: '100%',
      fontWeight: 600,
      flexWrap: 'no-wrap',
      transition: 'all ease-in 300ms'
    }

      $hide = {
        opacity: 0
      }

    $h1 = {
      fontSize: 32,
      fontWeight: 300,
      letterSpacing: -1,
      textShadow: '0 1px 1px rgba(0,0,0,0.2)',
      margin: [0, 'auto', 14],
      lineHeight: 1.3,

      [device.small]: {
        fontSize: 32
      }
    }

    $IntroText = {
      color: 'rgba(255,255,255,0.9)',
      margin: 'auto',
      padding: [0, 110],

      [device.small]: {
        display: 'none'
      }
    }

    $lead = {
      fontSize: 38,
      lineHeight: '3.0rem',
      fontWeight: 700
    }

    $mid = {
      padding: [20, 0],
      position: 'relative',
      zIndex: 10
    }

    $text = {
      marginRight: 40
    }
}


view Watch {
  <button yield />

  $button = {
    margin: [18, 'auto', -10],
    padding: [3, 12],
    lineHeight: '1.5em',
    color: color.brand1,
    background: 'rgba(255,255,255,1)',
    borderRadius: 5,
    border: 'none',
    outline: 'none',
    fontWeight: 600,
    fontSize: 14,
    transition: 'all ease-in 200ms',

    hover: {
      boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
      transform: {
        scale: 1.05
      }
    }
  }
}
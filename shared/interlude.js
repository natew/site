view Interlude {
  <interlude-h2 yield />

  $h2 = [style.textGradient, {
    textAlign: view.props.right ? 'right': 'left',
    fontSize: 30,
    margin: [60, 'auto'],
    padding: [16, 0],
    fontWeight: 300,
    zIndex: 100,
    textAlign: 'center',

    [device.small]: {
      fontSize: 22,
      padding: 0
    }
  }]
}
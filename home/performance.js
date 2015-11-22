view Performance {
  <Contain>
    <section class="small">
      <Title style={{margin: 0, textAlign: 'right'}}>Hot Reloads ++</Title>
    </section>

    <section>
      <title>Faster</title>
      <p>Flint injects single files rather than one big bundle. Up to 10x faster & in constant time.</p>
    </section>

    <section>
      <title>Safer</title>
      <p>Views keep state as you edit. Even child views retain state while editing parents.</p>
    </section>

    <section>
      <title>Smarter</title>
      <p>Flint extracts and hot updates static styles as CSS. JS isn't even run when possible!</p>
    </section>
  </Contain>

  $ = {
    flexFlow: 'row',
    borderBottom: '1px solid #eee',
    // flexWrap: 'wrap'

    [device.small]: {
      flexFlow: 'column',
      padding: [0, 0, 40]
    }
  }

  $section = {
    padding: 30,
    fontSize: 15,
    width: '33%',

    [device.small]: {
      width: '100%'
    }
  }

  $small = {
    width: '20%',

    [device.small]: {
      margin: 'auto',
      width: 'auto'
    }
  }

  $title = {
    fontFamily: font.title,
    fontSize: 18,
    margin: [-3, 0, 4],
    color: '#666'
  }

  $p = {
    margin: 0,
    lineHeight: 1.5,
    color: '#666'
  }
}
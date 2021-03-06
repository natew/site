view Docs.Editor {
  <Title>Editor Integration</Title>
  <IntroText>
    Motion is an environment that aims to seamlessly integrate the browser and editor to give you a live, smart environment.
  </IntroText>

  <SubTitle>Introduction</SubTitle>

  <Text>
    Motion uses <Link href="https://atom.io">Atom</Link>, a hackable Text Editor created by Github as it's base. Motion integrates with Atom to connect your application and your editor, providing you with a comfortable and productive programming environment.
  </Text>

  <SubTitle>Installation</SubTitle>

  <Text>
    Motion's Atom integration is published as <Link href="https://atom.io/packages/motion">motion</Link> package.
    To install this package there are two easy ways
  </Text>
  <ul>
    <li>
      <b>From CLI:</b> Execute <code>apm install motion</code> in terminal/cmd
    </li>
    <li>
      <b>Settings View:</b> Open settings view from top bar or by executing <code>settings-view:open</code> command, goto the install tab, type the name of package and click install
    </li>
  </ul>

  <SubTitle>Intentions</SubTitle>

  <Text>
    Motion provides different types of intentions in your code, press the hotkey (ctrl on windows, linux and cmd on mac) to enable intentions mode.
  </Text>
  <Text>
    Intentions mode allows you to open color picker, increase/decrease numbers and jump between elements and their styles, all with some simple clicking / dragging.
  </Text>

  <SubTitle>Browser Integration</SubTitle>

  <Text>
    Motion binds your editor and running application. At any point, you can right click your application while in Intentions mode to see the view hierarchy for that element. You can easily jump to it's definition in your editor to start editing it immediately.
  </Text>

  <SubTitle>Live Coding</SubTitle>

  <Text>
    Live coding is an optional mode that hot reloads the current view you are editing into the application as you type. When this mode is activated, you will see a <b>Live Coding</b> indiciator on Atom's bottom status bar.
  </Text>

  <Text>
    <b>⌘+⌥+s</b> (command + options + s) toggles Live Coding.
  </Text>

  <Next to='/docs/install'>Install Motion</Next>
}

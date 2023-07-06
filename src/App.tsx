import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import { VirtualizedDataGrid } from './Example';

function App() {
  const [count, setCount] = useState(0)

  return (
    <FluentProvider theme={teamsLightTheme}>
      <VirtualizedDataGrid />
    </FluentProvider>
  )
}

export default App

import { RecoilRoot } from 'recoil';

import Users from "./components/Users/Users.jsx";

function App() {
  return (
    <RecoilRoot>
      <main className="container mx-auto py-5">
        <h1 className="text-center text-3xl font-bold text-white mb-8">User List</h1>
        <Users />
      </main>
    </RecoilRoot>
  )
}

export default App

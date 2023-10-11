import '@styles/globals.css';
import Nav from '@components/Nav';
import { SessionProvider } from 'next-auth/react';
import Provider from '@components/Provider';

export const metadata = {
    title:'Promptopia',
    decscription: 'Discover & Share AI Prompts'
}

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* Move the SessionProvider wrapper here */}
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
          <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Rootlayout;

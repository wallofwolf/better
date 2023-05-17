import './globals.css';
import StyledComponentsRegistry from '../../lib/registry';
import Header from './components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <StyledComponentsRegistry>
          <Header></Header>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const mixSpotify = localFont({
  src: [
    {
      path: './fonts/SpotifyMix-Regular.woff',
      weight: '400',
    }
  ],
  variable: "--font-spotifymix-regular",
  weight: "100 900",
});

const mixSpotifyBold = localFont({
  src: './fonts/SpotifyMix-Bold.woff',
  variable: "--font-spotifymix-bold",
  weight: '700',
});

export const metadata = {
  title: "Spotify-clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mixSpotify.variable} ${mixSpotifyBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

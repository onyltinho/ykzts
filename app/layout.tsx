import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'
import { type Metadata } from 'next'
import { Noto_Sans_JP, Raleway, Source_Sans_3 } from 'next/font/google'
import Image from 'next/image'
import { type ReactNode } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import keyVisual from './_assets/key-visual.jpg'
import Section, {
  SectionContent,
  SectionHeader,
  SectionTagline,
  SectionTitle
} from './_components/section'
import LayoutWrapper from './_components/wrapper'
import styles from './layout.module.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://ykzts.com/'),
  themeColor: '#49fcd4',
  title: {
    default: 'ykzts.com',
    template: '%s | ykzts.com'
  }
}

const notoSansJp = Noto_Sans_JP({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  weight: ['300', '600', '700', '800']
})
const raleway = Raleway({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['600', '800']
})
const sourceSans3 = Source_Sans_3({
  display: 'swap',
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-source-sans-3',
  weight: ['300', '600', '700']
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={clsx(
        notoSansJp.variable,
        raleway.variable,
        sourceSans3.variable
      )}
      lang="ja"
    >
      <head />
      <body>
        <svg aria-hidden>
          <defs>
            {/* https://about.meta.com/en/brand/resources/facebookapp/ */}
            <symbol
              fill="currentColor"
              fillRule="nonzero"
              id="facebook-logo"
              viewBox="0 0 1365.333 1365.333"
            >
              <path
                d="M10240 5120c0 2827.7-2292.3 5120-5120 5120S0 7947.7 0 5120C0 2564.46 1872.31 446.301 4320 62.2V3640H3020v1480h1300v1128c0 1283.2 764.38 1992 1933.9 1992 560.17 0 1146.1-100 1146.1-100V6880h-645.62c-636.03 0-834.38-394.67-834.38-799.57V5120h1420l-227-1480H5920V62.2C8367.69 446.3 10240 2564.46 10240 5120"
                transform="matrix(.13333 0 0 -.13333 0 1365.333)"
              />
            </symbol>
            {/* https://github.com/logos */}
            <symbol fill="currentColor" id="github-logo" viewBox="0 0 98 98">
              <path
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fillRule="evenodd"
              />
            </symbol>
            {/* https://joinmastodon.org/ja/branding */}
            <symbol fill="currentColor" id="mastodon-logo" viewBox="0 0 74 79">
              <path d="M73.7014 17.4323C72.5616 9.05152 65.1774 2.4469 56.424 1.1671C54.9472 0.950843 49.3518 0.163818 36.3901 0.163818H36.2933C23.3281 0.163818 20.5465 0.950843 19.0697 1.1671C10.56 2.41145 2.78877 8.34604 0.903306 16.826C-0.00357854 21.0022 -0.100361 25.6322 0.068112 29.8793C0.308275 35.9699 0.354874 42.0498 0.91406 48.1156C1.30064 52.1448 1.97502 56.1419 2.93215 60.0769C4.72441 67.3445 11.9795 73.3925 19.0876 75.86C26.6979 78.4332 34.8821 78.8603 42.724 77.0937C43.5866 76.8952 44.4398 76.6647 45.2833 76.4024C47.1867 75.8033 49.4199 75.1332 51.0616 73.9562C51.0841 73.9397 51.1026 73.9184 51.1156 73.8938C51.1286 73.8693 51.1359 73.8421 51.1368 73.8144V67.9366C51.1364 67.9107 51.1302 67.8852 51.1186 67.862C51.1069 67.8388 51.0902 67.8184 51.0695 67.8025C51.0489 67.7865 51.0249 67.7753 50.9994 67.7696C50.9738 67.764 50.9473 67.7641 50.9218 67.7699C45.8976 68.9569 40.7491 69.5519 35.5836 69.5425C26.694 69.5425 24.3031 65.3699 23.6184 63.6327C23.0681 62.1314 22.7186 60.5654 22.5789 58.9744C22.5775 58.9477 22.5825 58.921 22.5934 58.8965C22.6043 58.8721 22.621 58.8505 22.6419 58.8336C22.6629 58.8167 22.6876 58.8049 22.714 58.7992C22.7404 58.7934 22.7678 58.794 22.794 58.8007C27.7345 59.9796 32.799 60.5746 37.8813 60.5733C39.1036 60.5733 40.3223 60.5733 41.5447 60.5414C46.6562 60.3996 52.0437 60.1408 57.0728 59.1694C57.1983 59.1446 57.3237 59.1233 57.4313 59.0914C65.3638 57.5847 72.9128 52.8555 73.6799 40.8799C73.7086 40.4084 73.7803 35.9415 73.7803 35.4523C73.7839 33.7896 74.3216 23.6576 73.7014 17.4323ZM61.4925 47.3144H53.1514V27.107C53.1514 22.8528 51.3591 20.6832 47.7136 20.6832C43.7061 20.6832 41.6988 23.2499 41.6988 28.3194V39.3803H33.4078V28.3194C33.4078 23.2499 31.3969 20.6832 27.3894 20.6832C23.7654 20.6832 21.9552 22.8528 21.9516 27.107V47.3144H13.6176V26.4937C13.6176 22.2395 14.7157 18.8598 16.9118 16.3545C19.1772 13.8552 22.1488 12.5719 25.8373 12.5719C30.1064 12.5719 33.3325 14.1955 35.4832 17.4394L37.5587 20.8853L39.6377 17.4394C41.7884 14.1955 45.0145 12.5719 49.2765 12.5719C52.9614 12.5719 55.9329 13.8552 58.2055 16.3545C60.4017 18.8574 61.4997 22.2371 61.4997 26.4937L61.4925 47.3144Z" />
            </symbol>
            {/* https://about.meta.com/brand/resources/instagram/threads/ */}
            <symbol
              fill="currentColor"
              id="threads-logo"
              viewBox="0 0 878 1000"
            >
              <path
                d="M446.7,1000h-0.3c-149.2-1-263.9-50.2-341-146.2C36.9,768.3,1.5,649.4,0.3,500.4v-0.7c1.2-149.1,36.6-267.9,105.2-353.4
		C182.5,50.2,297.3,1,446.4,0h0.3h0.3c114.4,0.8,210.1,30.2,284.4,87.4c69.9,53.8,119.1,130.4,146.2,227.8l-85,23.7
		c-46-165-162.4-249.3-346-250.6c-121.2,0.9-212.9,39-272.5,113.2C118.4,271,89.6,371.4,88.5,500c1.1,128.6,29.9,229,85.7,298.5
		c59.6,74.3,151.3,112.4,272.5,113.2c109.3-0.8,181.6-26.3,241.7-85.2c68.6-67.2,67.4-149.7,45.4-199.9
		c-12.9-29.6-36.4-54.2-68.1-72.9c-8,56.3-25.9,101.9-53.5,136.3c-36.9,45.9-89.2,71-155.4,74.6c-50.1,2.7-98.4-9.1-135.8-33.4
		c-44.3-28.7-70.2-72.5-73-123.5c-2.7-49.6,17-95.2,55.4-128.4c36.7-31.7,88.3-50.3,149.3-53.8c44.9-2.5,87-0.5,125.8,5.9
		c-5.2-30.9-15.6-55.5-31.2-73.2c-21.4-24.4-54.5-36.8-98.3-37.1c-0.4,0-0.8,0-1.2,0c-35.2,0-83,9.7-113.4,55L261.2,327
		c40.8-60.6,107-94,186.6-94c0.6,0,1.2,0,1.8,0c133.1,0.8,212.4,82.3,220.3,224.5c4.5,1.9,9,3.9,13.4,5.9
		c62.1,29.2,107.5,73.4,131.4,127.9c33.2,75.9,36.3,199.6-64.5,298.3C673.1,965,579.6,999.1,447,1000L446.7,1000L446.7,1000z
		 M488.5,512.9c-10.1,0-20.3,0.3-30.8,0.9c-76.5,4.3-124.2,39.4-121.5,89.3c2.8,52.3,60.5,76.6,116,73.6
		c51-2.7,117.4-22.6,128.6-154.6C552.6,516,521.7,512.9,488.5,512.9z"
              />
            </symbol>
            {/* https://about.twitter.com/en/who-we-are/brand-toolkit */}
            <symbol fill="currentColor" id="x-logo" viewBox="0 0 1200 1227">
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </symbol>
          </defs>
        </svg>
        <LayoutWrapper>
          <Section intro>
            <SectionHeader>
              <SectionTitle>{'ykzts\u200b.com'}</SectionTitle>

              <SectionTagline>
                ソフトウェア開発者 山岸和利の
                <br />
                ポートフォリオ
              </SectionTagline>

              <ul className={styles.actions}>
                <li className={styles.actions__item}>
                  <a
                    aria-label="コンテンツまでスクロール"
                    className={styles['arrow-link']}
                    href="#content"
                    role="button"
                  >
                    <FaArrowDown />
                  </a>
                </li>
              </ul>
            </SectionHeader>

            <SectionContent>
              <Image
                alt=""
                className={styles['key-visual']}
                placeholder="blur"
                priority
                sizes="(max-width: 1280px) 50vw,100vw"
                src={keyVisual}
              />
            </SectionContent>
          </Section>

          <main id="content">{children}</main>

          <footer className={styles.footer}>
            <div className={styles.copyright}>
              © Yamagishi Kazutoshi. Design{' '}
              <a
                className={styles.footer__link}
                href="https://html5up.net/"
                rel="noopener noreferrer"
                target="_blank"
              >
                HTML5 UP
              </a>
              . Artwork by{' '}
              <a
                className={styles.footer__link}
                href="https://twitter.com/diru_k1005"
                rel="noopener noreferrer"
                target="_blank"
              >
                Kannazuki Diru
              </a>
              .
            </div>
          </footer>
        </LayoutWrapper>

        <Analytics />
      </body>
    </html>
  )
}

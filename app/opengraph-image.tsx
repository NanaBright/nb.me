import { ImageResponse } from 'next/og'
export const alt = 'Bright Yanchirah — Senior Full-Stack Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function Image() {
  return new ImageResponse(<div style={{ background: '#111613', color: '#f0f0e7', width: '100%', height: '100%', padding: '66px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24 }}><span>Bright Yanchirah.</span><span style={{ color: '#c3e99b' }}>7+ years of experience</span></div><div style={{ display: 'flex', flexDirection: 'column', fontSize: 82, lineHeight: 1.07, letterSpacing: '-4px' }}><span>Complex problems.</span><span style={{ color: '#c3e99b' }}>Useful software.</span></div><div style={{ display: 'flex', borderTop: '1px solid #364036', paddingTop: 25, fontSize: 23 }}>Senior Full-Stack Software Engineer · Ghana</div></div>, { ...size })
}

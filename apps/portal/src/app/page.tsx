import { showBanner, showComponent } from '../flags'

export default async function Home() {
    const show = await showComponent()
    const banner = await showBanner()
    return show ? <p>Show if True {banner}</p> : <p>Show if False {banner}</p>
}
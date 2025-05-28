import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

const instLink = 'https://www.instagram.com/cad.dnipro/'
const youtubeLink =
  'https://www.youtube.com/@%D0%A1%D0%90%D0%94.%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE'
const linktrLink =
  'https://linktr.ee/cad_dnipro?fbclid=PAZXh0bgNhZW0CMTEAAaeBO28w8I30qDDyf7BMFh2nmeLOrODgxfzJEJpSJ7tahT0yxESzAVO8r0VkUQ_aem_fu1TmlzN7yvSoWHa4vh5RA'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-8 flex space-x-4">
          <SocialIcon kind="instagram" href={instLink} size={6} />
          <SocialIcon kind="youtube" href={youtubeLink} size={6} />
          <SocialIcon kind="threads" href={linktrLink} size={6} />
        </div>
      </div>
    </footer>
  )
}

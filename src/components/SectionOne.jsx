import '../styles/sectionOne.scss';
import Number from './Number';

import video from '../assets/desktop/image-woman-in-videocall.jpg';
import chat from '../assets/desktop/image-women-videochatting.jpg';
import meet from '../assets/desktop/image-men-in-meeting.jpg';
import texting from '../assets/desktop/image-man-texting.jpg';

export default function SectionOne() {

  const pictu = [
    
    { id:1, img: video }, 

    { id:2, img:chat },

    { id:3, img:meet },

    { id:4, img:texting },

  ]


  return (
    <section className='collage text-center'>
       
        <Number digit = '01' />

       <div className="collage__pic">
          {

            pictu.map((item) => {
              return(
                <img key={item.id} src={item.img} />
              )
            })

          }
        </div> 
    </section>
  )
}

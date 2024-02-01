// import { Section } from '../section/Section';
// import { TestimonialCard } from '../testimonialCard/TestimonialCard';
// import s from './style.module.css';
// import customer from '@/assets/person-circle.svg'

// export function Testimonials(){
//     return (
//         <div id='experiences' className={`${s.bg}`}>
//             <Section 
//             title={'Testimonios y experiencias'} 
//             classProp={
//                 `d-flex 
//                 flex-column 
//                 text-center 
//                 p-0
//                 p-lg-5
//                 bg-dark
//                 text-light
//                 ${s.bgExtra}`
//             } 
//             content={
//                 <div className='container p-0 p-lg-5'>
//                 <div className='row m-0 mx-lg-auto justify-content-start justify-content-lg-center'>
//                     <div className='col-4'>
//                         <TestimonialCard 
//                         icon={customer} 
//                         title={'Cristian R.'} 
//                         content={
//                             'Excelente lugar para aprender y buen clima laboral.'
//                         } />
//                     </div>
//                 </div>
        
//                 </div>
//             }/>
//         </div>
//     )
// }
import { Section } from '../section/Section';
import { TestimonialCard } from '../testimonialCard/TestimonialCard';
import s from './style.module.css';
import customer from '@/assets/person-circle.svg';

export function Testimonials() {
  return (
    <div id='experiences' className={`${s.bg}`}>
      <Section
        title={'Testimonios y experiencias'}
        classProp={`d-flex 
                flex-column 
                text-center 
                p-0
                p-lg-5
                bg-dark
                text-light
                ${s.bgExtra}`}
        content={
          <div className='container-fluid p-5'>
            <div className=''>
              <div className='col-12 col-md-6 col-lg-4'> {/* Ajuste en la clase aquí */}
                <TestimonialCard
                  icon={customer}
                  title={'Cristian R. P.'}
                  content={'Excelente lugar para aprender y buen clima laboral.'}
                />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}

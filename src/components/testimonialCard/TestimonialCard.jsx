import Image from "next/image";
import s from './style.module.css'

export function TestimonialCard({ icon, title, content }) {
  return (
    <>
      <div className={`${s.testimonialCard} d-flex gap-3`}>
        <div className={`${s.iconTestimonialContainer}`}>

        <Image src={icon} className={`${s.iconTestimonial}`} alt="Ícono de servicio" />
        </div>
        <div className="container-fluid">
          <p className="text-uppercase fw-semibold d-flex fs-5 justify-content-center">{title}</p>
          <p className={`${s.testimonialContent}`}>{content}</p>
          <a href="#" className="btn btn-outline-primary d-none">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

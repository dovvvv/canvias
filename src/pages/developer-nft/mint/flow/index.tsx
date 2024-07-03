import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import SectionWrapper from "@/components/SectionWrapper"
import { FLOW_QUESTIONS } from "@/constants"

import FinalStep from "./FinalStep"
import InitialStep from "./InitialStep"
import QuestionStep from "./QuestionStep"

const MintFlow = ({ scrollTarget }) => {
  return (
    <SectionWrapper dark full sx={{ p: "0 !important", "& .MuiTypography-root": { color: theme => theme.palette.primary.contrastText } }}>
      <Swiper
        style={{ zIndex: 0 }}
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <InitialStep scrollTarget={scrollTarget}></InitialStep>
        </SwiperSlide>
        {FLOW_QUESTIONS.map((item, index) => (
          <SwiperSlide key={index}>
            <QuestionStep scrollTarget={scrollTarget} {...item}></QuestionStep>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <FinalStep></FinalStep>
        </SwiperSlide>
      </Swiper>
    </SectionWrapper>
  )
}

export default MintFlow

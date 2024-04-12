import { ComponentProps } from 'react'

export interface FooterProps {
  className: string
}

type FooterPropertyProps = ComponentProps<'div'>

export function FooterProperty(props: FooterPropertyProps) {
  return (
    <>
      <footer className="bg-brandGreyBlue900">
        <div
          className="mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8"
          {...props}
        />
      </footer>
    </>
  )
}

// type FooterPropertyProps = ComponentProps<'div'>

// export function FooterProperty(props: FooterPropertyProps) {
//   return (
//     <>
//       <footer className="bg-brandGreyBlue900">
//         <div
//           className="mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8"
//           {...props}
//         />
//       </footer>
//     </>
//   )
// }

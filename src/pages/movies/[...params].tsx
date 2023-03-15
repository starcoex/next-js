import { useRouter } from 'next/router'



export default function Detail({ params }) {
  const router = useRouter()
  const { title, id } = router.query.params || []
  console.log(title)
  return (
    <div>{title}</div>
  )
}

// export function getServerSideProps({ params: { params } }) {
//   return {
//     props: {
//       params
//     }
//   }
// }
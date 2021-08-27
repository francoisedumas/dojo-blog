// import { ref } from 'vue'

// const createPost = (post) => { 
//   const post = ref(null)
//   const error = ref(null)

//   const load = async () => {
//     try {

//       let data = await fetch(' http://localhost:3000/posts/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(post)
//       })
//       if(!data.ok) {
//         throw Error('That post does not exist')
//       }
//       post.value = await data.json()
//     }
//     catch (err) {
//       error.value = err.message
//       console.log(error.value)
//     }
//   }

//   return { post, error, load }
// }

// export default createPost
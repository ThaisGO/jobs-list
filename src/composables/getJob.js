import axios from 'axios'
import { ref } from 'vue'

export default function useJob(id) {
    const job = ref(null)
    const error = ref(null)

    const getJob = async () => {
        try {
            axios.get(`https://json-serve-list.vercel.app/jobs/${id}`).then(response => {
                if(response.status === 200) {
                    console.log('data here', response.data)
                    job.value = response.data;
                } else {
                    throw Error('No response here')
                }
            })
        } catch (err) {
            if(err.response) {
                console.log(err.response)
            }
        }
    }

    return { job, error, getJob }
}
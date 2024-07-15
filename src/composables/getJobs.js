import axios from 'axios';
import { ref } from 'vue'

export default function useJob() {
    const jobs = ref([])
    const backupJobs = ref([])
    const error = ref(null)

    const getJobs = async () => {
        try {
            axios.get('https://json-serve-list.vercel.app/jobs').then(response => {
                if (response.status === 200) {
                    jobs.value = response.data;
                    backupJobs.value = response.data;
                } 
                else if (response.status === 404) {
                    throw new Error('The requested resource does not exist or has been deleted')
                } else {
                    throw new Error('An unexpected error occurred')
                }
            })
        } catch (err) {
            error.value = err.message
        }
    }

    return { jobs, backupJobs, error, getJobs }
}
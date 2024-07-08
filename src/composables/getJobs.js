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
                } else {
                    throw Error('No data available')
                }
            })
        } catch (error) {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        }
    }

    return { jobs, backupJobs, error, getJobs }
}
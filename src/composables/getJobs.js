import axios from 'axios';
import { ref } from 'vue'

export default function useJobs() {
    const jobs = ref([])
    const error = ref(null)

    const getJobs = async () => {
        try {
            axios.get('http://localhost:3000/jobs').then(response => {
                if (response.status === 200) {
                    // console.log(response)
                    jobs.value = response.data;
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

    return { jobs, error, getJobs }
}
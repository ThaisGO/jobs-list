import axios from 'axios';
import { ref } from "vue"

const getJobs = () => {
    const jobs = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            await axios.get('http://localhost:3000/jobs').then(res => {
                if (res.status === 200) {
                    console.log(res)
                    jobs.value = res.data
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
    return { jobs, error, load }
}
export default getJobs
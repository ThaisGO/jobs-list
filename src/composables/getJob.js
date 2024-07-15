import axios from "axios";
import { ref } from "vue";

export default function useJob(id) {
    const job = ref(null);
    const error = ref(null);

    const getJob = async () => {
        try {
            const response = await axios.get(`https://json-serve-list.vercel.app/jobs/${id}`);
            
            if (response.status === 200) {
                job.value = response.data;
            } else if (response.status === 404) {
                throw new Error('The requested resource does not exist or has been deleted');
            } else {
                throw new Error('An unexpected error occurred');
            }
        } catch (err) {
            error.value = err.message
            console.error('Error fetching jobs:', err.message)
        }
    };

    return { job, error, getJob };
}

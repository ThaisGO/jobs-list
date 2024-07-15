import axios from "axios";
import { ref } from "vue";

export default function useJob(id) {
    const job = ref(null);
    const error = ref(null);

    const getJob = async () => {
        try {
            axios
                .get(`https://json-serve-list.vercel.app/jobs/${id}`)
                .then((response) => {
                    if (response.status === 200) {
                        job.value = response.data;
                    } else if (response.status === 404) {
                        console.log(
                            "The requested resource does not exist or has been deleted"
                        );
                        error.value = response.status
                    } else {
                        throw Error("No response here");
                    }
                });
        } catch (err) {
            if (err.response) {
                console.log(err.response);
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }
        }
    };

    return { job, error, getJob };
}

import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-8d7a9-default-rtdb.asia-southeast1.firebasedatabase.app/'
})
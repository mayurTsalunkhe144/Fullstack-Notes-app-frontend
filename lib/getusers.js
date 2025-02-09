import axios from 'axios';

const getUsers = async () => {
    try {
        const response = await axios.get('https://fullstack-notes-app-backend-jade.vercel.app/api/users');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return { message: "Failed to fetch data" }; // Return an object with a message property
    }
};

export default getUsers;
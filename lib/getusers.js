import axios from 'axios';

const getUsers = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/users/');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return { message: "Failed to fetch data" }; // Return an object with a message property
    }
};

export default getUsers;
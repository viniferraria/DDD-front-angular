// let port = 44318;
let baseUrl = `https://animalback.azurewebsites.net/zoo`;

const fetchTableUrl = `${baseUrl}`;
const bulkUrl = `${baseUrl}/read`;
const createUrl = `${baseUrl}/add`;
const deleteUrl = ({ id }) => `${baseUrl}/${id}`;
const editUrl = ({ id }) => `${baseUrl}/update/${id}`;
const getByIdUrl = ({ id }) => `${baseUrl}/${id}`;

export { fetchTableUrl, bulkUrl, createUrl, deleteUrl, editUrl, getByIdUrl };
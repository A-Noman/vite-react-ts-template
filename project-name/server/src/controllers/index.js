import { getExampleData, postExampleData } from '../controllers/index.js';

export function setRoutes(app) {
    app.get('/api/example', getExampleData);
    app.post('/api/example', postExampleData);
}
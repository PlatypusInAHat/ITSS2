const { Router } = require('express');
const project = require('../controllers/project.controller');

const router = Router();

// GET    /api/projects
router.get('/', project.getAll);

// GET    /api/projects/:id
router.get('/:id', project.getOne);

// POST   /api/projects
router.post('/', project.create);

// PUT    /api/projects/:id
router.put('/:id', project.update);

// DELETE /api/projects/:id
router.delete('/:id', project.remove);

module.exports = router;
